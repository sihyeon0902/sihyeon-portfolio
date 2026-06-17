import { SectionLabel } from './TableOfContents'

const specs = [
  { label: '보드 1', value: 'Arduino UNO — 키패드 + LCD(16×2)' },
  { label: '보드 2', value: 'Arduino UNO — RFID-RC522 + 서보모터' },
  { label: '통신', value: 'SoftwareSerial (보드 간 직렬 통신)' },
  { label: '잠금 해제', value: '비밀번호(1473*) 또는 등록된 RFID 카드' },
  { label: '출력', value: 'LCD 메시지 (DOOR OPEN / ERROR)' },
  { label: '구동', value: '서보모터 0° ↔ 90° 제어' },
]

const timeline = [
  { week: '1주차', desc: '하드웨어 구상도 작성, 모듈별 코드 작성' },
  { week: '2주차', desc: '코드 오류 수정 및 재업로드, 아두이노 보드 연결, 하드웨어 설계' },
  { week: '3주차', desc: '하드웨어·소프트웨어 통합 테스트 및 오류 해결' },
]

export default function IoTProject() {
  return (
    <section id="iot" style={{ padding: '120px 2rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <SectionLabel>Project 01</SectionLabel>
        <div className="mobile-flex-col" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: '1rem' }}>
              <span style={{ fontSize: '2.5rem' }}>🔐</span>
              <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900 }}>
                IoT 스마트 <span style={{ color: '#22d3ee' }}>도어락</span> 사물함
              </h2>
            </div>
            <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              아두이노 2개를 직렬 통신으로 연결하여 구현한 스마트 도어락 사물함
              키패드로 비밀번호를 입력하거나 RFID 카드를 태그하면 서보모터로 잠금이 해제되며,
              LCD를 통해 사용자에게 실시간 피드백 제공
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {['Arduino', 'C++', 'RFID-RC522', 'SoftwareSerial', 'LCD I2C', 'Servo'].map(t => (
                <Tag key={t} color="#22d3ee">{t}</Tag>
              ))}
            </div>
            <TeamBadge members={['조장·HardWare']} />
          </div>

          <div className="mobile-full-width" style={{ width: 260, background: 'linear-gradient(135deg, rgba(34,211,238,0.08), rgba(34,211,238,0.02))', border: '1px solid rgba(34,211,238,0.25)', borderRadius: 20, padding: '2rem', textAlign: 'center', flexShrink: 0 }}>
            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🗄️</div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.75rem', color: '#22d3ee', marginBottom: '0.5rem' }}>STATUS</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
              <span style={{ color: '#4ade80', fontWeight: 600 }}>완성</span>
            </div>
            <div style={{ marginTop: '1.5rem', fontSize: '0.78rem', color: '#64748b' }}>2024.06.10</div>
          </div>
        </div>

        <Card title="🔧 시스템 구성">
          <div className="mobile-grid-1fr" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: '0.75rem' }}>
            {specs.map(s => (
              <div key={s.label} style={{ display: 'flex', gap: 12, padding: '0.75rem 1rem', background: 'rgba(34,211,238,0.04)', borderRadius: 10, border: '1px solid rgba(34,211,238,0.1)' }}>
                <span style={{ color: '#22d3ee', fontWeight: 600, minWidth: 60, fontSize: '0.82rem' }}>{s.label}</span>
                <span style={{ color: '#94a3b8', fontSize: '0.88rem' }}>{s.value}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="📅 진행 과정">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {timeline.map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{ background: 'rgba(34,211,238,0.15)', color: '#22d3ee', borderRadius: 8, padding: '3px 12px', fontSize: '0.78rem', fontWeight: 600, whiteSpace: 'nowrap', marginTop: 1 }}>{t.week}</span>
                <span style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7 }}>{t.desc}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="💡 핵심 코드 포인트">
          <CodeBlock>{`if (!strcmp(Data, Master)) {
  lcd.print("DOOR OPEN");
  digitalWrite(signalPin, HIGH);
  delay(500);
  digitalWrite(signalPin, LOW);
} else {
  lcd.print("ERROR");
}

if (rfid.uid.uidByte[0] == CARD1_0 && ...) {
  myservo.write(90);
  delay(5000);
  myservo.write(0);
}`}</CodeBlock>
        </Card>
      </div>
    </section>
  )
}

function Tag({ children, color }) {
  return <span style={{ padding: '4px 12px', borderRadius: 100, fontSize: '0.78rem', fontWeight: 500, background: `rgba(${hexRgb(color)},0.1)`, border: `1px solid rgba(${hexRgb(color)},0.25)`, color }}>{children}</span>
}
function hexRgb(h) { const r = parseInt(h.slice(1, 3), 16), g = parseInt(h.slice(3, 5), 16), b = parseInt(h.slice(5, 7), 16); return `${r},${g},${b}` }

function Card({ title, children }) {
  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '1.75rem', marginTop: '1.5rem' }}>
      <h3 style={{ fontWeight: 700, marginBottom: '1.25rem', fontSize: '1rem' }}>{title}</h3>
      {children}
    </div>
  )
}
function CodeBlock({ children }) {
  return <pre style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.8rem', color: '#a5b4fc', background: 'rgba(0,0,0,0.35)', padding: '1.25rem', borderRadius: 10, overflowX: 'auto', lineHeight: 1.7 }}>{children}</pre>
}
function TeamBadge({ members }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {members.map(m => (
        <span key={m} style={{ fontSize: '0.78rem', padding: '4px 12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, color: '#94a3b8' }}>👤 {m}</span>
      ))}
    </div>
  )
}