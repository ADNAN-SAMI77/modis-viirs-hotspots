export default function Stages({ items }) {
  return (
    <ol className="stages">
      {items.map((s) => (
        <li key={s.id} className={s.core ? 'core' : undefined}>
          <a href={`#${s.id}`}>
            <span className="n">{String(s.n).padStart(2, '0')}</span>
            <span className="t">{s.label}</span>
          </a>
        </li>
      ))}
    </ol>
  )
}
