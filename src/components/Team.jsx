import { team, teamName } from '../content/shared.js'

export default function Team({ t }) {
  return (
    <div className="team">
      <p className="team-name">
        <span className="brand-dot" aria-hidden="true" />
        <span lang="en">{teamName}</span>
      </p>
      <ul className="team-grid">
        {team.map((m) => (
          <li className="member" key={m.name}>
            <span className="avatar" aria-hidden="true">{m.initials}</span>
            <span className="member-text">
              <span className="member-name" lang="en">{m.name}</span>
              <span className="member-role">{t.roles[m.role]}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
