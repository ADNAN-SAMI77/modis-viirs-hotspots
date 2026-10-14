import { teamName } from '../content/shared.js'

export default function Nav({ t, active, onToggle }) {
  return (
    <nav className="topnav" aria-label="Sections">
      <div className="wrap topnav-inner">
        <a className="brand" href="#top">
<img className="brand-logo" src="/logo.png" alt="" width="34" height="34" />
          <span className="brand-name">{teamName}</span>
        </a>
        <div className="navlinks">
          {t.nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'active' : undefined}>
              {n.label}
            </a>
          ))}
        </div>
        <button type="button" className="lang-btn" onClick={onToggle} aria-label={t.toggle.aria}>
          <span lang={t.toggle.labelLang}>{t.toggle.label}</span>
        </button>
      </div>
    </nav>
  )
}
