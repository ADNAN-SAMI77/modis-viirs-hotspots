import { useEffect, useRef } from 'react'
import { feature } from 'topojson-client'
import landTopo from 'world-atlas/land-110m.json'

// Decorative hero background: a dark dot-matrix world map with glowing
// fire hotspots. The hotspots are ILLUSTRATIVE (randomly placed inside
// regions known for frequent burning), not real detections.

const LAT_TOP = 78
const LAT_BOTTOM = -56
const LON_CENTER = 15 // keeps Africa/Europe near the middle
const CELL = 6        // distance between dots, CSS px
const DOT = 3.2       // dot size, CSS px

// [lon, lat, spread in degrees, weight]
const FIRE_REGIONS = [
  [20, 8, 9, 3.2],     // Sahel and central African savanna
  [26, -12, 8, 3.2],   // southern African savanna
  [-56, -9, 9, 2.2],   // Amazon arc of deforestation
  [-48, -16, 5, 1.2],  // Cerrado
  [101, 18, 6, 2],     // mainland Southeast Asia
  [111, -1, 6, 1.2],   // Borneo and Sumatra
  [76, 29, 3.5, 1],    // Punjab, crop residue burning
  [132, -16, 10, 2],   // northern Australia
  [112, 58, 13, 1.4],  // Siberian boreal forest
  [-116, 57, 9, 1],    // western Canada
  [-121, 39, 3, 0.5],  // California
  [-89, 16, 4, 0.8],   // Central America
  [40, 50, 8, 1],      // Eastern Europe and Russian farmland
  [-62, -27, 6, 0.8],  // Chaco
]

function gauss() {
  let u = 0
  let v = 0
  while (u === 0) u = Math.random()
  while (v === 0) v = Math.random()
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
}

function makeGlowSprite() {
  const r = 48
  const s = document.createElement('canvas')
  s.width = s.height = r * 2
  const g = s.getContext('2d')
  const grd = g.createRadialGradient(r, r, 0, r, r, r)
  grd.addColorStop(0, 'rgba(255,200,110,0.9)')
  grd.addColorStop(0.2, 'rgba(255,110,35,0.45)')
  grd.addColorStop(0.55, 'rgba(210,45,0,0.12)')
  grd.addColorStop(1, 'rgba(160,20,0,0)')
  g.fillStyle = grd
  g.fillRect(0, 0, r * 2, r * 2)
  return s
}

export default function WorldFireMap() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const sprite = makeGlowSprite()
    const land = feature(landTopo, landTopo.objects.land)
    const base = document.createElement('canvas') // pre-rendered dot map

    let w = 0
    let h = 0
    let proj = null
    let landDots = [] // [x, y]
    let fires = []
    let raf = 0
    let last = 0
    let time = 0
    let onScreen = true

    function makeProjection() {
      const spanLat = LAT_TOP - LAT_BOTTOM
      // cover the hero on wide screens, stay readable on phones
      const k = Math.max(w / 360, (h * 0.78) / spanLat)
      const mapH = spanLat * k
      const top = Math.max(0, (h - mapH) * 0.45)
      return {
        k,
        x: (lon) => w / 2 + (lon - LON_CENTER) * k,
        y: (lat) => top + (LAT_TOP - lat) * k,
        lon: (x) => (x - w / 2) / k + LON_CENTER,
        lat: (y) => LAT_TOP - (y - top) / k,
      }
    }

    function landMask() {
      const m = document.createElement('canvas')
      m.width = Math.ceil(w)
      m.height = Math.ceil(h)
      const g = m.getContext('2d')
      g.fillStyle = '#000'
      const worldW = 360 * proj.k
      const geoms = land.type === 'FeatureCollection' ? land.features.map((f) => f.geometry) : [land.geometry]
      const polys = geoms.flatMap((g) => (g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates]))
      for (const shift of [-worldW, 0, worldW]) {
        g.beginPath()
        for (const poly of polys) {
          for (const ring of poly) {
            let prev = null
            ring.forEach(([lon, lat], i) => {
              // unwrap longitudes so rings crossing ±180° stay continuous
              if (prev !== null) {
                while (lon - prev > 180) lon -= 360
                while (lon - prev < -180) lon += 360
              }
              prev = lon
              const x = proj.x(lon) + shift
              const y = proj.y(lat)
              if (i === 0) g.moveTo(x, y)
              else g.lineTo(x, y)
            })
            g.closePath()
          }
        }
        g.fill('evenodd')
      }
      return g.getImageData(0, 0, m.width, m.height)
    }

    function build() {
      proj = makeProjection()
      const mask = landMask()
      const isLand = (x, y) => {
        const xi = Math.round(x)
        const yi = Math.round(y)
        if (xi < 0 || yi < 0 || xi >= mask.width || yi >= mask.height) return false
        return mask.data[(yi * mask.width + xi) * 4 + 3] > 0
      }

      landDots = []
      for (let y = CELL / 2; y < h; y += CELL) {
        for (let x = CELL / 2; x < w; x += CELL) {
          if (isLand(x, y)) landDots.push([x, y])
        }
      }

      // pre-render the static dot map once
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      base.width = Math.round(w * dpr)
      base.height = Math.round(h * dpr)
      const b = base.getContext('2d')
      b.setTransform(dpr, 0, 0, dpr, 0, 0)
      b.fillStyle = 'rgba(150,172,196,0.24)'
      for (const [x, y] of landDots) b.fillRect(x - DOT / 2, y - DOT / 2, DOT, DOT)

      // illustrative fire points, snapped to land dots
      const total = FIRE_REGIONS.reduce((s, r) => s + r[3], 0)
      const count = Math.round(Math.min(900, Math.max(220, landDots.length * 0.08)))
      fires = []
      let guard = 0
      while (fires.length < count && guard++ < count * 40) {
        let pick = Math.random() * total
        const r = FIRE_REGIONS.find((reg) => (pick -= reg[3]) <= 0) || FIRE_REGIONS[0]
        const lon = r[0] + gauss() * r[2]
        const lat = r[1] + gauss() * r[2] * 0.6
        const sx = Math.round((proj.x(lon) - CELL / 2) / CELL) * CELL + CELL / 2
        const sy = Math.round((proj.y(lat) - CELL / 2) / CELL) * CELL + CELL / 2
        if (sx < 0 || sx > w || sy < 0 || sy > h || !isLand(sx, sy)) continue
        fires.push({
          x: sx,
          y: sy,
          base: 0.25 + Math.random() * 0.75,
          flick: 0.6 + Math.random() * 2.2,
          ph: Math.random() * Math.PI * 2,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)
      ctx.drawImage(base, 0, 0, w, h)

      ctx.globalCompositeOperation = 'lighter'
      for (const f of fires) {
        const k = f.base * (0.55 + 0.45 * Math.sin(time * f.flick + f.ph))
        if (k < 0.05) continue
        const s = CELL * (0.8 + 2.6 * k)
        ctx.globalAlpha = Math.min(1, k * 0.8)
        ctx.drawImage(sprite, f.x - s, f.y - s, s * 2, s * 2)
        ctx.globalAlpha = Math.min(1, 0.35 + k)
        ctx.fillStyle = k > 0.7 ? '#FFD58A' : k > 0.4 ? '#FF8A3D' : '#E0461A'
        ctx.fillRect(f.x - DOT / 2, f.y - DOT / 2, DOT, DOT)
      }
      ctx.globalCompositeOperation = 'source-over'
      ctx.globalAlpha = 1
    }

    function resize() {
      const r = canvas.getBoundingClientRect()
      if (!r.width || !r.height) return
      w = r.width
      h = r.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      build()
      time = 1.3
      draw()
    }

    function frame(now) {
      raf = requestAnimationFrame(frame)
      if (!onScreen || document.hidden) { last = now; return }
      if (now - last < 40) return // ~25 fps is plenty for a slow flicker
      time += last ? Math.min(0.1, (now - last) / 1000) : 0.04
      last = now
      draw()
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    const io = new IntersectionObserver(([e]) => { onScreen = e.isIntersecting })
    io.observe(canvas)
    resize()
    if (!reduce) raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return <canvas ref={ref} className="hotspots" aria-hidden="true" />
}
