import { useEffect, useRef } from 'react'

const skills = ['React', 'Java', 'MySQL', 'Firebase', 'Arduino', 'Python', 'YOLOv8']

export default function Cover() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      o: Math.random() * 0.5 + 0.2,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99,102,241,${p.o})`
        ctx.fill()
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section id="cover" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0 }} />

      <div style={{ position: 'absolute', top: '20%', left: '15%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 1.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 100, padding: '6px 18px', marginBottom: '2rem', fontSize: '0.82rem', color: '#a5b4fc' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22d3ee', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          PORTFOLIO 2024~ing
        </div>

        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: '1.5rem' }}>
          <span style={{ display: 'block', background: 'linear-gradient(135deg, #e2e8f0 0%, #a5b4fc 50%, #22d3ee 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>안 시 현</span>
          <span style={{ display: 'block', fontSize: '0.45em', fontWeight: 400, color: '#94a3b8', marginTop: '0.5rem', letterSpacing: '0.1em' }}>AHN SI HYEON</span>
        </h1>

        <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: '#94a3b8', maxWidth: 520, margin: '0 auto 0.75rem', lineHeight: 1.7 }}>
          하드웨어부터 AI까지, 직접 만들며 배우는 개발자입니다.
          <p style={{ margin: 0 }}>IoT · 풀스택 웹 · AI 비전까지 폭넓게 경험하며</p>
          <p style={{ margin: 0 }}>현장의 문제를 기술로 해결하는 것을 즐깁니다.</p>
        </div>
        <div className="mobile-flex-col" style={{ fontSize: '0.95rem', color: '#64748b', marginBottom: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span>📧 snrnekf3989@naver.com</span>
          <span className="mobile-hide-divider">|</span>
          <span>📱 010-7550-3989</span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', maxWidth: 600, margin: '0 auto 3rem' }}>
          {skills.map((s, i) => (
            <span key={s} style={{
              padding: '5px 14px', borderRadius: 100, fontSize: '0.78rem', fontWeight: 500,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#cbd5e1',
              animation: `fadeUp .5s ease ${i * 0.06}s both`,
            }}>{s}</span>
          ))}
        </div>

        <a href="#toc" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '14px 36px', borderRadius: 50,
          background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
          color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem',
          boxShadow: '0 0 30px rgba(99,102,241,0.4)',
          transition: 'transform .2s, box-shadow .2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 50px rgba(99,102,241,0.6)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(99,102,241,0.4)' }}
        >
          프로젝트 보기 ↓
        </a>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.3} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(15px)} to{opacity:1;transform:none} }
      `}</style>
    </section>
  )
}