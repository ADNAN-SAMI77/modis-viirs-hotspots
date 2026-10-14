export default function Tools({ items }) {
  return (
    <dl className="tools">
      {items.map((x) => (
        <div className="tool" key={x.k}>
          <dt>{x.k}</dt>
          <dd>{x.v}</dd>
        </div>
      ))}
    </dl>
  )
}
