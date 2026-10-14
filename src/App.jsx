import { useEffect, useState } from 'react'
import en from './content/en.js'
import ar from './content/ar.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Section from './components/Section.jsx'
import Footer from './components/Footer.jsx'
import useActiveSection from './hooks/useActiveSection.js'

const CONTENT = { en, ar }

function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'ar') return saved
  } catch {
    /* storage unavailable: fall back to English */
  }
  return 'en'
}

export default function App() {
  const [lang, setLang] = useState(initialLang)
  const t = CONTENT[lang]
  const active = useActiveSection(t.nav.map((n) => n.id))

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = t.meta.dir
    document.title = t.meta.title
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* ignore */
    }
  }, [lang, t])

  return (
    <>
      <Nav t={t} active={active} onToggle={() => setLang(lang === 'en' ? 'ar' : 'en')} />
      <Hero t={t} />
      <main>
        {t.sections.map((s, i) => (
          <Section key={s.id} s={s} index={i + 1} t={t} />
        ))}
      </main>
      <Footer t={t} />
    </>
  )
}
