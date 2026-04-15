import { SectionLabel } from './TableOfContents'

const pipeline = [
  { step: '01', title: '데이터 수집', desc: '수조 실시간 영상 스트림 또는 고화질 MP4 영상', icon: '📹' },
  { step: '02', title: 'AI 탐지·추적', desc: 'YOLOv8 객체 탐지 + ByteTrack 고유 ID 부여', icon: '🤖' },
  { step: '03', title: '행동 분석', desc: '좌표(x,y) → 이동거리·속도 → 활동성 지수(NumPy)', icon: '📊' },
  { step: '04', title: '관제 대시보드', desc: 'Streamlit + Plotly 실시간 인터랙티브 시각화', icon: '🖥️' },
  { step: '05', title: '이상 감지', desc: '활동량 급감(질병) / 급증(스트레스) 자동 판단 + 경고', icon: '🚨' },
]

export default function AquariumProject() {
  return (
    <section id="aquarium" style={{ padding: '120px 2rem', background: 'var(--surface)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <SectionLabel>Project 04</SectionLabel>

        {/* 헤더 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '2.5rem' }}>🐠</span>
              <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.6rem)', fontWeight: 900 }}>
                지능형 수조 <span style={{ color: '#fb923c' }}>관제 시스템</span>
              </h2>
              <span style={{ padding: '4px 14px', borderRadius: 100, fontSize: '0.75rem', fontWeight: 700, background: 'rgba(251,146,60,0.15)', border: '1px solid rgba(251,146,60,0.35)', color: '#fb923c', animation: 'blink 2s infinite' }}>🔧 2026.06 완성 예정</span>
            </div>
            <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              기존 스마트 수조가 온도·pH 등 환경 수치 측정에만 국한된 한계를 극복합니다.
              AI 비전 기술로 물고기의 움직임을 정량적 데이터로 추출하여 <strong style={{ color: '#fb923c' }}>환경은 정상이지만 생물학적 이상이 발생한 경우</strong>를 조기에 발견할 수 있는 차별화된 시스템입니다.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {['Python', 'YOLOv8', 'ByteTrack', 'NumPy', 'Streamlit', 'Plotly', 'AI Vision'].map(t => (
                <Tag key={t} color="#fb923c">{t}</Tag>
              ))}
            </div>
          </div>

          <div style={{ width: 220, background: 'linear-gradient(135deg, rgba(251,146,60,0.12), rgba(251,146,60,0.03))', border: '2px dashed rgba(251,146,60,0.35)', borderRadius: 20, padding: '1.75rem', textAlign: 'center', flexShrink: 0 }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🔬</div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.7rem', color: '#fb923c', marginBottom: '1rem' }}>IN PROGRESS</div>
            <div style={{ width: '100%', background: 'rgba(255,255,255,0.08)', borderRadius: 100, height: 8, marginBottom: 8 }}>
              <div style={{ width: '20%', background: 'linear-gradient(90deg, #fb923c, #f59e0b)', borderRadius: 100, height: '100%' }} />
            </div>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>진행률 약 20%</div>
            <div style={{ marginTop: '1rem', fontSize: '0.72rem', color: '#64748b' }}>목표: 2026년 6월</div>
          </div>
        </div>

        {/* 파이프라인 */}
        <div style={{ background: 'var(--surface2)', border: '1px solid rgba(251,146,60,0.2)', borderRadius: 16, padding: '2rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1rem' }}>🔁 시스템 파이프라인</h3>
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

        {/* 차별화 포인트 */}
        <div style={{ background: 'linear-gradient(135deg, rgba(251,146,60,0.08), rgba(251,146,60,0.02))', border: '1px solid rgba(251,146,60,0.2)', borderRadius: 16, padding: '2rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontWeight: 700, marginBottom: '1.25rem', fontSize: '1rem' }}>⭐ 차별화 포인트</h3>
          {[
            '영상에서 객체 좌표(x, y)를 추출하여 활동량이라는 수치 데이터로 변환',
            '다수의 물고기에게 고유 ID를 부여 → 특정 개체의 건강 이상을 개별 추적',
            '누적 활동량 데이터 기반으로 폐사 전 단계(활동 저하) 시점을 AI가 자동 판단',
            '환경 수치는 정상이지만 생물학적 이상이 발생한 경우를 조기 발견',
          ].map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, marginBottom: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ color: '#fb923c', fontWeight: 700, flexShrink: 0 }}>→</span>
              <span style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7 }}>{p}</span>
            </div>
          ))}
        </div>

        {/* 코드 */}
        <Card title="💡 핵심 로직 — 활동성 지수 계산 (개발 중)">
          <CodeBlock>{`# NumPy 기반 프레임 간 이동 거리 → 활동성 지수 계산
import numpy as np

def calc_activity(prev_pos: np.ndarray, curr_pos: np.ndarray) -> float:
    """
    prev_pos, curr_pos: shape (N, 2)  — N마리 물고기 (x, y) 좌표
    Returns: 평균 활동성 지수 (0.0 ~ 10.0)
    """
    distances = np.linalg.norm(curr_pos - prev_pos, axis=1)
    # 정규화: 최대 이동 가능 거리(프레임 대각선)로 나눔
    activity_scores = np.clip(distances / MAX_DIST * 10, 0, 10)
    return float(np.mean(activity_scores))

# 이상 판단: 3σ 기반 z-score
def detect_anomaly(history: list[float]) -> str:
    arr = np.array(history[-60:])   # 최근 60프레임
    z = (arr[-1] - arr.mean()) / (arr.std() + 1e-6)
    if z < -2.0: return "⚠️ 활동 저하 (질병 의심)"
    if z >  2.0: return "⚠️ 과활동 (스트레스 의심)"
    return "✅ 정상"`}</CodeBlock>
        </Card>
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:.5}}`}</style>
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
