import { useState, useEffect } from 'react'

const links = [
  { id: 'cover', label: 'HOME' },
  { id: 'toc', label: '목차' },
  { id: 'iot', label: 'IoT' },
  { id: 'java', label: 'Java' },
  { id: 'react', label: 'React' },
  { id: 'aquarium', label: 'AI수조' },
]

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const nav = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    padding: '0 1rem',
    background: scrolled ? 'rgba(10,14,26,0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(99,102,241,0.15)' : 'none',
    transition: 'all .3s',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    height: 64,
    gap: '1rem'
  }

  return (
    <nav style={nav}>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#6366f1', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0 }}>
        &lt;ASH /&gt;
      </span>
      <ul className="mobile-nav-list" style={{ listStyle: 'none', display: 'flex', gap: '0.2rem', margin: 0, padding: 0 }}>
        {links.map(l => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              className="mobile-nav-link"
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: 8,
                fontSize: '0.82rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                textDecoration: 'none',
                transition: 'all .2s',
                color: active === l.id ? '#fff' : '#94a3b8',
                background: active === l.id ? 'rgba(99,102,241,0.25)' : 'transparent',
                border: active === l.id ? '1px solid rgba(99,102,241,0.4)' : '1px solid transparent',
              }}
            >{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}