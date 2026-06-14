const items = [
  { num: '01', title: 'IoT 스마트 도어락', sub: '아두이노 기반 RFID·키패드 잠금 사물함', color: '#22d3ee', href: '#iot' },
  { num: '02', title: 'JAVA 똘망은행', sub: 'Spring Boot + React + AWS 미니 은행 시스템', color: '#6366f1', href: '#java' },
  { num: '03', title: '오늘의 거래', sub: 'React + Firebase 수산물 거래 명세서', color: '#f472b6', href: '#react' },
  { num: '04', title: '지능형 수조 관제 시스템', sub: 'YOLOv8 + Streamlit AI 물고기 모니터링', color: '#fb923c', href: '#aquarium' },
]

export default function TableOfContents() {
  return (
    <section id="toc" style={{ padding: '120px 2rem', background: 'var(--surface)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionLabel>목차</SectionLabel>
        <h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, marginBottom: '3.5rem', lineHeight: 1.2 }}>
          프로젝트 <span style={{ color: '#6366f1' }}>목록</span>
        </h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {items.map(it => (
            <a key={it.num} href={it.href} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem 2rem', borderRadius: 16, background: 'var(--surface2)', border: '1px solid var(--border)', transition: 'all .25s', color: 'inherit' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = it.color; e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.background = `rgba(${hexToRgb(it.color)},0.05)` }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'var(--surface2)' }}
            >
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '2rem', fontWeight: 700, color: it.color, opacity: 0.7, minWidth: 60 }}>{it.num}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{it.title}</span>
                  {it.badge && <span style={{ fontSize: '0.72rem', padding: '2px 10px', borderRadius: 100, background: 'rgba(251,146,60,0.15)', color: '#fb923c', border: '1px solid rgba(251,146,60,0.3)' }}>{it.badge}</span>}
                </div>
                <span style={{ color: '#64748b', fontSize: '0.88rem' }}>{it.sub}</span>
              </div>
              <span style={{ color: it.color, fontSize: '1.4rem' }}>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16)
  return `${r},${g},${b}`
}

export function SectionLabel({ children }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: 100, padding: '5px 16px', marginBottom: '1.25rem', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', color: '#a5b4fc', textTransform: 'uppercase' }}>
      {children}
    </div>
  )
}
