import WorldFireMap from './WorldFireMap.jsx'
import Html from './Html.jsx'
import { teamName, videoUrl } from '../content/shared.js'

export default function Hero({ t }) {
  const h = t.hero
  return (
    <header className="hero" id="top">
      <WorldFireMap />
      <div className="wrap hero-inner">
        <p className="kicker">
          <span className="pulse" aria-hidden="true" />
          {h.kicker}
        </p>
        <Html as="h1" html={h.titleHtml} />
        {h.altTitle && <p className="alt-title" lang="en">{h.altTitle}</p>}
        <p className="hero-sub">{h.sub}</p>

        <div className="hero-meta">
          <span className="team-chip">
            {h.by} <strong lang="en">{teamName}</strong>
          </span>
          {videoUrl ? (
            <a className="video-chip" href={videoUrl} target="_blank" rel="noopener">
              <span className="play" aria-hidden="true">▶</span>
              {h.videoLabel}
            </a>
          ) : (
            <span className="video-chip pending">{h.videoPending}</span>
          )}
        </div>

        <dl className="facts">
          {h.facts.map((f) => (
            <div key={f.l} className="fact">
              <dt>{f.l}</dt>
              <dd>{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  )
}
