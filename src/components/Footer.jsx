import { teamName } from '../content/shared.js'

export default function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div className="ramp" aria-hidden="true" />
      <div className="wrap footer-inner" dir="ltr">
        <span className="brand">
          <span className="brand-dot" aria-hidden="true" />
          {teamName}
        </span>
        <span>{t.footer}</span>
      </div>
    </footer>
  )
}
