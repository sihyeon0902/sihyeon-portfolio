import { SectionLabel } from './TableOfContents'

const modules = [
  { id: 'ProductInputSection', icon: '⌨️', tag: 'UX', desc: '즐겨찾기 버튼으로 키보드 없이 원터치 입력. 바쁜 경매 현장 특성 반영' },
  { id: 'TradeContext', icon: '🗃️', tag: 'State', desc: 'Context API + Provider 패턴으로 전역 상태 관리. Prop Drilling 방지' },
  { id: 'ReceiptPreview', icon: '🧾', tag: 'UI', desc: 'forwardRef + useMemo로 캡처 대상 DOM 노출 및 성능 최적화' },
  { id: 'useReceiptCapture', icon: '📤', tag: 'Feature', desc: 'html2canvas → Web Share API(모바일) / 자동 다운로드(PC) 분기 처리' },
  { id: 'tradeService', icon: '☁️', tag: 'Backend', desc: 'Firebase Firestore(거래내역) + LocalStorage(개인설정) 이중 저장 전략' },
]

export default function ReactProject() {
  return (
    <section id="react" style={{ padding: '120px 2rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <SectionLabel>Project 03</SectionLabel>
        <div className="mobile-flex-col" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: '1rem' }}>
              <span style={{ fontSize: '2.5rem' }}>🐟</span>
              <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900 }}>
                오늘의 <span style={{ color: '#f472b6' }}>거래</span>
              </h2>
            </div>
            <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '0.75rem' }}>
              수산물 중매인의 수기 장부·종이 영수증을 디지털로 전환하는 현장 업무 앱입니다.
              거래 명세서를 이미지로 캡처해 카카오톡 등 메신저로 즉시 공유할 수 있습니다.
            </p>
            <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              📎 React 기말 프로젝트 | Vercel 배포 + PWA 지원
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {['React', 'Context API', 'Firebase', 'Vercel', 'PWA', 'html2canvas', 'CSS Module'].map(t => (
                <Tag key={t} color="#f472b6">{t}</Tag>
              ))}
            </div>
          </div>

          <div className="mobile-full-width" style={{ width: 220, background: 'linear-gradient(135deg, rgba(244,114,182,0.1), rgba(244,114,182,0.02))', border: '1px solid rgba(244,114,182,0.25)', borderRadius: 20, padding: '1.75rem', textAlign: 'center', flexShrink: 0 }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🏪</div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.7rem', color: '#f472b6', marginBottom: '1rem' }}>FEATURES</div>
            {['원터치 입력', '자동 계산', '영수증 캡처', '메신저 공유', 'PWA 설치'].map(f => (
              <div key={f} style={{ fontSize: '0.78rem', color: '#94a3b8', padding: '3px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>✓ {f}</div>
            ))}
          </div>
        </div>

        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '2rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1rem' }}>🔄 데이터 흐름</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, overflowX: 'auto', paddingBottom: 8 }}>
            {modules.map((m, i) => (
              <div key={m.id} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ padding: '1rem 1.25rem', borderRadius: 12, background: 'var(--surface2)', border: '1px solid rgba(244,114,182,0.2)', textAlign: 'center', minWidth: 140 }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: 6 }}>{m.icon}</div>
                  <div style={{ fontSize: '0.7rem', color: '#f472b6', fontWeight: 600, marginBottom: 4 }}>{m.tag}</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.68rem', color: '#a5b4fc', marginBottom: 6 }}>{m.id}</div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', lineHeight: 1.5 }}>{m.desc}</div>
                </div>
                {i < modules.length - 1 && <span style={{ color: '#f472b6', fontSize: '1.2rem', padding: '0 0.5rem', flexShrink: 0 }}>→</span>}
              </div>
            ))}
          </div>
        </div>

        <Card title="💡 핵심 코드 — 영수증 캡처 & 공유">
          <CodeBlock>{`const captureReceipt = useCallback(async (ref) => {
  const canvas = await html2canvas(ref.current, { scale: 2 })

  canvas.toBlob(async (blob) => {
    const file = new File([blob], '거래명세서.png', { type: 'image/png' })
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

    if (isMobile && navigator.share && navigator.canShare({ files: [file] })) {
      await navigator.share({ files: [file], title: '거래명세서 전송' })
    } else {
      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = '거래명세서.png'
      link.click()
    }
  })
})`}</CodeBlock>
        </Card>
      </div>
    </section>
  )
}

function Tag({ children, color }) {
  const r = parseInt(color.slice(1, 3), 16), g = parseInt(color.slice(3, 5), 16), b = parseInt(color.slice(5, 7), 16)
  return <span style={{ padding: '4px 12px', borderRadius: 100, fontSize: '0.78rem', fontWeight: 500, background: `rgba(${r},${g},${b},0.1)`, border: `1px solid rgba(${r},${g},${b},0.25)`, color }}>{children}</span>
}
function Card({ title, children }) {
  return <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '1.75rem', marginTop: '1.5rem' }}><h3 style={{ fontWeight: 700, marginBottom: '1.25rem', fontSize: '1rem' }}>{title}</h3>{children}</div>
}
function CodeBlock({ children }) {
  return <pre style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.8rem', color: '#a5b4fc', background: 'rgba(0,0,0,0.35)', padding: '1.25rem', borderRadius: 10, overflowX: 'auto', lineHeight: 1.7 }}>{children}</pre>
}