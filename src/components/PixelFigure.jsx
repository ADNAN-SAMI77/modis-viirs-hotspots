// One MODIS pixel (1,000 m) with the VIIRS grid (375 m) drawn to the same scale:
// 240 px = 1,000 m, so one VIIRS pixel = 90 px.
export default function PixelFigure({ f }) {
  return (
    <figure className="fig-pixels">
      <svg viewBox="0 0 320 336" role="img" aria-label={f.aria} dir="ltr">
        <rect className="px-modis" x="40" y="50" width="240" height="240" />
        <path className="px-grid" d="M130 50V290M220 50V290M40 140H280M40 230H280" />
        <rect className="px-cell" x="40" y="50" width="90" height="90" />
        <path className="dim" d="M40 34H130M40 28V40M130 28V40" />
        <text className="dim-text" x="85" y="20" textAnchor="middle">{f.small}</text>
        <path className="dim" d="M40 308H280M40 302V314M280 302V314" />
        <text className="dim-text" x="160" y="330" textAnchor="middle">{f.large}</text>
      </svg>
      <figcaption>
        <span>{f.caption}</span>
        <span className="key"><span className="sw m" />{f.keyModis}</span>
        <span className="key"><span className="sw v" />{f.keyViirs}</span>
      </figcaption>
    </figure>
  )
}
