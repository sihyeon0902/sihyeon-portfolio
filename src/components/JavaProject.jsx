import { SectionLabel } from './TableOfContents'

const features = [
  { icon: '👤', title: '회원가입 / 로그인', desc: 'BCrypt 없이 간단 인증, JWT 없는 세션 방식. 프론트-백 연동 실습 목적' },
  { icon: '🏦', title: '계좌 생성 및 조회', desc: '100-XXXX-XXXX 형식 랜덤 계좌번호 생성, 기본 잔액 1,250,000원 지급' },
  { icon: '💸', title: '송금 (입/출금)', desc: '@Transactional 보장, 잔액 부족 시 예외 처리, 송·수신 거래내역 동시 기록' },
  { icon: '📋', title: '거래 내역 조회', desc: '날짜 내림차순 정렬, 금액·잔액·계좌번호 포함 이력 관리' },
  { icon: '💱', title: '실시간 환율 조회', desc: 'ExchangeRate API 호출, USD·EUR·JPY 지원, API 실패 시 기본값 fallback' },
]

const stack = [
  { name: 'React + Vite', role: 'Frontend', color: '#61dafb' },
  { name: 'Spring Boot', role: 'Backend', color: '#6db33f' },
  { name: 'MySQL', role: 'Database', color: '#4479a1' },
  { name: 'AWS S3', role: 'Frontend 배포', color: '#ff9900' },
  { name: 'AWS EC2', role: 'Backend 배포', color: '#ff9900' },
  { name: 'AWS RDS', role: 'DB 배포', color: '#ff9900' },
]

export default function JavaProject() {
  return (
    <section id="java" style={{ padding: '120px 2rem', background: 'var(--surface)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <SectionLabel>Project 02</SectionLabel>
        <div className="mobile-flex-col" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: '1rem' }}>
              <span style={{ fontSize: '2.5rem' }}>🏧</span>
              <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900 }}>
                JAVA <span style={{ color: '#6366f1' }}>똘망은행</span>
              </h2>
            </div>
            <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              "어르신도 쉽게 사용할 수 있는 간편 미니 은행"을 목표로 개발한 풀스택 프로젝트
              Spring Boot 백엔드와 React 프론트엔드를 AWS에 배포하여 3-Tier 아키텍처 직접 구현
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {['Java', 'Spring Boot', 'React', 'MySQL', 'AWS', 'REST API'].map(t => (
                <Tag key={t} color="#6366f1">{t}</Tag>
              ))}
            </div>
            <TeamBadge members={['FrontEnd 중심']} />
          </div>

          <div className="mobile-full-width" style={{ width: 220, background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(99,102,241,0.03))', border: '1px solid rgba(99,102,241,0.25)', borderRadius: 20, padding: '1.75rem', textAlign: 'center', flexShrink: 0 }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '0.75rem' }}>🏛️</div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.72rem', color: '#6366f1', marginBottom: '0.5rem' }}>ARCH</div>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.8 }}>S3 → EC2 → RDS<br />3-Tier Architecture</div>
            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
              <span style={{ color: '#4ade80', fontWeight: 600, fontSize: '0.85rem' }}>배포 완료</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px,1fr))', gap: '0.85rem', marginBottom: '1.5rem' }}>
          {stack.map(s => (
            <div key={s.name} style={{ padding: '1rem', borderRadius: 12, background: 'var(--surface2)', border: '1px solid var(--border)', textAlign: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: '0.88rem', color: s.color, marginBottom: 4 }}>{s.name}</div>
              <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{s.role}</div>
            </div>
          ))}
        </div>

        <div className="mobile-grid-1fr" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          {features.map(f => (
            <div key={f.title} style={{ padding: '1.5rem', borderRadius: 14, background: 'var(--surface2)', border: '1px solid var(--border)', transition: 'border-color .2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>{f.icon}</div>
              <div style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem' }}>{f.title}</div>
              <div style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.7 }}>{f.desc}</div>
            </div>
          ))}
        </div>

        <Card title="💡 핵심 로직 — 송금 트랜잭션">
          <CodeBlock>{`@Transactional
public void transfer(String from, String to, Long amount) {
  Account sender   = accountRepo.findByAccountNumber(from).orElseThrow();
  Account receiver = accountRepo.findByAccountNumber(to).orElseThrow();

  if (amount <= 0) throw new IllegalArgumentException("송금 금액이 올바르지 않습니다.");
  if (sender.getBalance() < amount) throw new IllegalArgumentException("잔액이 부족합니다.");

  sender.setBalance(sender.getBalance() - amount);
  receiver.setBalance(receiver.getBalance() + amount);
  accountRepo.save(sender); accountRepo.save(receiver);

  transactionRepo.save(buildTx(sender, "송금", -amount, to));
  transactionRepo.save(buildTx(receiver, "입금",   amount, from));
}`}</CodeBlock>
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
function TeamBadge({ members }) {
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{members.map(m => <span key={m} style={{ fontSize: '0.78rem', padding: '4px 12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, color: '#94a3b8' }}>👤 {m}</span>)}</div>
}