import Html from './Html.jsx'
import { references } from '../content/shared.js'

export default function References() {
  return (
    <ol className="refs" dir="ltr" lang="en">
      {references.map((r, i) => (
        <Html as="li" key={i} html={r} />
      ))}
    </ol>
  )
}
