import Html from './Html.jsx'
import PixelFigure from './PixelFigure.jsx'
import Stages from './Stages.jsx'
import Tools from './Tools.jsx'
import Team from './Team.jsx'
import References from './References.jsx'

function Block({ b, t }) {
  switch (b.type) {
    case 'p':
      return <Html html={b.html} />
    case 'h3':
      return <h3>{b.text}</h3>
    case 'stage':
      return (
        <h3 id={b.id} className="stage">
          <span className="stage-n">{b.n}</span>
          {b.text}
        </h3>
      )
    case 'callout':
      return <Html className="callout" html={b.html} />
    case 'ul':
      return (
        <ul className="pixel-list">
          {b.items.map((x, i) => (
            <Html as="li" key={i} html={x} />
          ))}
        </ul>
      )
    case 'placeholder':
      return (
        <p className="todo-box">
          <span className="tag">{t.placeholderTag}</span>
          {b.text}
        </p>
      )
    case 'figure':
      return <PixelFigure f={t.figure} />
    case 'stages':
      return <Stages items={t.stages} />
    case 'tools':
      return <Tools items={t.tools} />
    case 'team':
      return <Team t={t} />
    case 'refs':
      return <References />
    default:
      return null
  }
}

export default function Section({ s, index, t }) {
  return (
    <section id={s.id} className="section">
      <div className="wrap section-grid">
        <div className="section-head">
          <span className="section-num">{String(index).padStart(2, '0')}</span>
          <h2>{s.title}</h2>
        </div>
        <div className="section-body prose">
          {s.blocks.map((b, i) => (
            <Block key={i} b={b} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
