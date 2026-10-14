// Renders a trusted content string that contains simple inline HTML.
export default function Html({ as: Tag = 'p', html, ...rest }) {
  return <Tag {...rest} dangerouslySetInnerHTML={{ __html: html }} />
}
