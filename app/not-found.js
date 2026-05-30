import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', textAlign: 'center', padding: '2rem',
    }}>
      <div>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(6rem,20vw,16rem)',
          lineHeight: 0.85, letterSpacing: '0.04em',
          color: 'rgba(240,235,224,0.04)',
          marginBottom: '2rem',
        }}>404</div>
        <div className="section-tag" style={{ justifyContent: 'center' }}>Page Not Found</div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem,6vw,5rem)',
          lineHeight: 0.95, letterSpacing: '0.04em',
          color: 'var(--text)', margin: '1rem 0 1.5rem',
        }}>
          Lost in the <span style={{ color: 'var(--accent)' }}>void.</span>
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 380, margin: '0 auto 2.5rem' }}>
          This page doesn't exist. Let's get you back to something that does.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-primary">Back to Home →</Link>
          <Link href="/contact" className="btn-secondary">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
