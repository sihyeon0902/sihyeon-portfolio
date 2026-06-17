import { SectionLabel } from './TableOfContents'

const pipeline = [
  { step: '01', title: '영상 캡처', desc: 'React & Canvas 기반 웹캠 영상 200ms 주기 전송', icon: '📹' },
  { step: '02', title: 'AI 탐지·추적', desc: 'YOLOv8 기반 객체 고유 ID 부여 및 24/7 실시간 추적', icon: '🤖' },
  { step: '03', title: '상태 판별', desc: 'FastAPI 서버에서 휴리스틱 기반 이상 행동 즉각 감지', icon: '📊' },
  { step: '04', title: '관제 대시보드', desc: 'WebSocket 비동기 통신을 통한 일반/전문가 맞춤형 UI', icon: '🖥️' },
  { step: '05', title: '데이터 로깅', desc: 'SQLite 기반 개체별 유영 속도 및 위험 로그 비동기 저장', icon: '💾' },
]

export default function AquariumProject() {
  return (
    <section id="aquarium" style={{ padding: '120px 2rem', background: 'var(--surface)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <SectionLabel>Project 04</SectionLabel>

        <div className="mobile-flex-col" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '2.5rem' }}>🐠</span>
              <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.6rem)', fontWeight: 900 }}>
                지능형 수조 관제 시스템 <span style={{ color: '#fb923c' }}>Aquaguide</span>
              </h2>
            </div>
            <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              수질 수치는 정상이지만 물고기는 아플 수 있다는 문제의식에서 출발한 프로젝트
              기존 CCTV 사후 대응의 한계를 극복하기 위해, AI 비전 기술로 물고기의 실제 움직임을 24시간 분석하고 이상 행동을 즉각 감지하여 골든타임을 확보
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {['React', 'FastAPI', 'YOLOv8', 'WebSocket', 'SQLite', 'AI Vision'].map(t => (
                <Tag key={t} color="#fb923c">{t}</Tag>
              ))}
            </div>
          </div>

          <div className="mobile-full-width" style={{ width: 220, background: 'linear-gradient(135deg, rgba(251,146,60,0.12), rgba(251,146,60,0.03))', border: '1px solid rgba(251,146,60,0.25)', borderRadius: 20, padding: '1.75rem', textAlign: 'center', flexShrink: 0 }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>📊</div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.72rem', color: '#fb923c', marginBottom: '0.5rem' }}>STATUS</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
              <span style={{ color: '#4ade80', fontWeight: 600 }}>완성</span>
            </div>
            <div style={{ marginTop: '1.5rem', fontSize: '0.78rem', color: '#64748b' }}>2026.06.14</div>
          </div>
        </div>

        <div style={{ background: 'var(--surface2)', border: '1px solid rgba(251,146,60,0.2)', borderRadius: 16, padding: '2rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1rem' }}>🔁 시스템 아키텍처</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {pipeline.map((p, i) => (
              <div key={p.step} style={{ flex: '1 1 150px', padding: '1.25rem', borderRadius: 12, background: 'var(--surface)', border: '1px solid rgba(251,146,60,0.15)', position: 'relative', textAlign: 'center' }}>
                <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', background: 'rgba(251,146,60,0.2)', border: '1px solid rgba(251,146,60,0.4)', borderRadius: 100, padding: '1px 10px', fontSize: '0.68rem', color: '#fb923c', fontWeight: 700 }}>{p.step}</div>
                <div style={{ fontSize: '1.75rem', margin: '0.5rem 0 0.5rem' }}>{p.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '0.88rem', marginBottom: 6 }}>{p.title}</div>
                <div style={{ color: '#64748b', fontSize: '0.75rem', lineHeight: 1.6 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(251,146,60,0.08), rgba(251,146,60,0.02))', border: '1px solid rgba(251,146,60,0.2)', borderRadius: 16, padding: '2rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontWeight: 700, marginBottom: '1.25rem', fontSize: '1rem' }}>⭐ 핵심 차별화 포인트</h3>
          {[
            '일반 사용자(직관적 요약 & AI 코멘트)와 전문가(정밀 데이터 차트 & 누적 DB)를 위한 이원화 모드 제공',
            '객체 몸길이 비례 속도 계산 및 상·하단 위험 구역 가중치 부여로 휴리스틱 기반 오탐지율 최소화',
            '200ms 주기 프레임 전송 및 화질(0.8) 타협으로 네트워크 실시간성과 AI 인식률의 완벽한 타협점 도출',
            '단순 관제를 넘어 비동기 로깅을 통한 누적 이상 행동 히스토리 관리(SQLite) 및 Recharts 실시간 렌더링'
          ].map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, marginBottom: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ color: '#fb923c', fontWeight: 700, flexShrink: 0 }}>→</span>
              <span style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7 }}>{p}</span>
            </div>
          ))}
        </div>

        <Card title="🎯 최적화 성과 및 향후 발전 방향">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div className="mobile-flex-col" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <span style={{ background: 'rgba(251,146,60,0.15)', color: '#fb923c', borderRadius: 8, padding: '3px 12px', fontSize: '0.78rem', fontWeight: 600, whiteSpace: 'nowrap', marginTop: 1, textAlign: 'center' }}>실시간성 극대화</span>
              <span style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7 }}>단순 라이브러리 사용을 넘어, 실시간 관제 환경에 맞춰 WebSocket 비동기 통신과 프레임 전송 주기를 제어하여 딜레이 없는 시스템을 구현</span>
            </div>
            <div className="mobile-flex-col" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <span style={{ background: 'rgba(251,146,60,0.15)', color: '#fb923c', borderRadius: 8, padding: '3px 12px', fontSize: '0.78rem', fontWeight: 600, whiteSpace: 'nowrap', marginTop: 1, textAlign: 'center' }}>시스템 확장성</span>
              <span style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7 }}>단일 수조를 넘어, 향후 어종별 동적 임계값 자동 학습 기능과 Redis 인메모리 DB를 활용한 대규모 다중 수조(양식장) 통합 관제로 발전할 수 있는 기반 마련</span>
            </div>
          </div>
        </Card>

        <Card title="💡 핵심 로직 — 도메인 지식 반영 (Heuristic 필터링)">
          <CodeBlock>{`if width < 10 or height < 10 or width > (screen_width * 0.8):
    continue

in_danger_zone = (cy < screen_height * 0.20) or (cy > screen_height * 0.80)

if speed < (body_length * 0.25):
    mem["still_time"] += dt`}</CodeBlock>
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
  return <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 16, padding: '1.75rem', marginTop: '1.5rem' }}><h3 style={{ fontWeight: 700, marginBottom: '1.25rem', fontSize: '1rem' }}>{title}</h3>{children}</div>
}

function CodeBlock({ children }) {
  return <pre style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.8rem', color: '#a5b4fc', background: 'rgba(0,0,0,0.35)', padding: '1.25rem', borderRadius: 10, overflowX: 'auto', lineHeight: 1.7 }}>{children}</pre>
}