'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const SCORE_CATEGORIES = [
  { key: 'website', label: 'Website & UX', icon: '🌐' },
  { key: 'seo',     label: 'SEO & Discoverability', icon: '🔍' },
  { key: 'social',  label: 'Social Media Presence', icon: '📱' },
  { key: 'content', label: 'Content & Creative Quality', icon: '🎨' },
  { key: 'ads',     label: 'Paid Advertising Setup', icon: '📣' },
  { key: 'strategy',label: 'Overall Digital Strategy', icon: '🎯' },
];

const LOADING_STEPS = [
  'Scanning online presence & links',
  'Analysing social media signals',
  'Auditing SEO & website performance',
  'Benchmarking against industry standards',
  'Generating your custom report',
];

function getColor(score) {
  if (score >= 5) return '#4CAF50';
  if (score >= 4) return '#8BC34A';
  if (score >= 3) return '#FFB347';
  if (score >= 2) return '#FF9800';
  return '#FF4D1C';
}
function getFlag(score) {
  if (score >= 5) return '✦ STRENGTH';
  if (score >= 4) return '◈ GOOD';
  if (score >= 3) return '◉ AVERAGE';
  if (score >= 2) return '⚠ WEAK';
  return '✕ RED FLAG';
}

/* ── Step indicator ─────────── */
function Steps({ current }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '2rem' }}>
      {[1, 2, 3].map((n, i) => (
        <>
          <div key={n} style={{
            width: 28, height: 28, borderRadius: '50%',
            border: `1px solid ${current > n ? 'var(--accent)' : current === n ? 'var(--accent)' : 'var(--border)'}`,
            background: current > n ? 'rgba(255,77,28,.15)' : current === n ? 'var(--accent)' : 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            color: current >= n ? (current === n ? '#fff' : 'var(--accent)') : 'var(--muted)',
            flexShrink: 0, transition: 'all .3s',
          }}>{current > n ? '✓' : n}</div>
          {i < 2 && <div key={`line-${n}`} style={{ flex: 1, height: 1, background: current > n ? 'var(--accent)' : 'var(--border)', transition: 'background .4s' }} />}
        </>
      ))}
    </div>
  );
}

/* ── Field wrapper ───────────── */
function Field({ label, half, children }) {
  return (
    <div style={{ marginBottom: '1.2rem', gridColumn: half ? undefined : 'span 2' }}>
      <label className="field-label">{label}</label>
      {children}
    </div>
  );
}

export default function AssessmentPage() {
  const [step, setStep]     = useState(1); // 1=form, 2=loading, 3=results
  const [lsIdx, setLsIdx]   = useState(0); // loading step index
  const [result, setResult] = useState(null);
  const [error, setError]   = useState('');
  const barsAnimated = useRef(false);

  const [form, setForm] = useState({
    website: '', instagram: '', facebook: '',
    linkedin: '', other: '', industry: '', budget: '', struggle: '',
  });
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  /* Animate score bars after results load */
  useEffect(() => {
    if (step === 3 && !barsAnimated.current) {
      barsAnimated.current = true;
      setTimeout(() => {
        document.querySelectorAll('.score-bar-fill').forEach(el => {
          el.style.width = el.dataset.width;
        });
        const ob = document.getElementById('overall-fill');
        if (ob) ob.style.width = ob.dataset.width;
      }, 120);
    }
  }, [step]);

  /* Loading animation */
  function runLoadingAnimation(apiCall) {
    let i = 0;
    setLsIdx(0);
    const iv = setInterval(() => {
      i++;
      if (i < LOADING_STEPS.length) setLsIdx(i);
      else clearInterval(iv);
    }, 900);
    return apiCall.finally(() => clearInterval(iv));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.website && !form.industry && !form.instagram) {
      setError('Please fill in at least your website URL or industry.');
      return;
    }
    setError('');
    setStep(2);
    barsAnimated.current = false;

    const apiCall = fetch('/api/assess', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(r => r.json())
      .then(data => {
        if (data.error) throw new Error(data.error);
        setResult(data);
        setTimeout(() => setStep(3), 600);
      })
      .catch(err => {
        setError(err.message || 'Something went wrong. Please try again.');
        setStep(1);
      });

    runLoadingAnimation(apiCall);
  }

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/pythaflow';

  return (
    <div style={{ minHeight: '100vh', paddingTop: 100, paddingBottom: '5rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
          <Link href="/" style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', letterSpacing: '0.12em', color: 'var(--text)' }}>
            PYTHAFLOW<span style={{ color: 'var(--accent)' }}>.</span>
          </Link>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
            color: 'var(--accent)', background: 'rgba(255,77,28,.1)',
            border: '1px solid rgba(255,77,28,.25)', padding: '4px 10px', borderRadius: 2, letterSpacing: '0.15em',
          }}>FREE BRAND AUDIT</span>
        </div>

        {/* ── STEP 1: FORM ─────────────────────────── */}
        {step === 1 && (
          <>
            <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem', marginBottom: '2.5rem' }}>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem,8vw,4rem)',
                lineHeight: 0.92, letterSpacing: '0.04em',
                marginBottom: '0.8rem',
              }}>
                Is Your Brand<br /><span style={{ color: 'var(--accent)' }}>Losing Money</span><br />Online?
              </h1>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                Drop your links below. Our AI audits your entire digital presence in 30 seconds and shows you exactly where you're leaving revenue on the table — completely free.
              </p>
            </div>

            <Steps current={1} />

            {error && (
              <div style={{
                background: 'rgba(255,77,28,.08)', border: '1px solid rgba(255,77,28,.3)',
                borderRadius: 2, padding: '0.75rem 1rem', marginBottom: '1.2rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent)',
                letterSpacing: '0.05em',
              }}>{error}</div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Card 1: Links */}
              <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: '1.8rem', marginBottom: '1rem', borderRadius: 2 }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ display: 'block', width: 16, height: 1, background: 'var(--accent)' }} />Your Online Presence
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1.2rem' }} className="form-2col">
                  <div style={{ marginBottom: '1.2rem', gridColumn: 'span 2' }}>
                    <label className="field-label">Website URL</label>
                    <input className="field-input" type="url" placeholder="https://yourwebsite.com" value={form.website} onChange={set('website')} />
                  </div>
                  {[
                    { k: 'instagram', label: 'Instagram', prefix: '@', ph: 'handle' },
                    { k: 'facebook',  label: 'Facebook',  prefix: '@', ph: 'page name' },
                    { k: 'linkedin',  label: 'LinkedIn',  prefix: '/in/', ph: 'profile' },
                    { k: 'other',     label: 'TikTok / YouTube', prefix: '@', ph: 'handle' },
                  ].map(({ k, label, prefix, ph }) => (
                    <div key={k} style={{ marginBottom: '1.2rem', position: 'relative' }}>
                      <label className="field-label">{label}</label>
                      <div style={{ position: 'relative' }}>
                        <span style={{
                          position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)',
                          fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--muted)', pointerEvents: 'none', zIndex: 1,
                        }}>{prefix}</span>
                        <input className="field-input" type="text" placeholder={ph} value={form[k]} onChange={set(k)} style={{ paddingLeft: prefix.length > 2 ? '3.2rem' : '2.2rem' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Quick questions */}
              <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: '1.8rem', marginBottom: '1.5rem', borderRadius: 2 }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ display: 'block', width: 16, height: 1, background: 'var(--accent)' }} />Quick Questions
                </p>
                <div style={{ marginBottom: '1.2rem' }}>
                  <label className="field-label">Industry / Niche *</label>
                  <input className="field-input" type="text" placeholder="e.g. E-commerce fashion, SaaS, Restaurant chain, Real estate..." value={form.industry} onChange={set('industry')} required />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1.2rem' }} className="form-2col">
                  <div style={{ marginBottom: '1.2rem' }}>
                    <label className="field-label">Monthly Marketing Budget</label>
                    <select className="field-select" value={form.budget} onChange={set('budget')}>
                      <option value="">Select range</option>
                      {['Under $500/mo','$500 – $2,000/mo','$2,000 – $5,000/mo','$5,000 – $15,000/mo','$15,000+/mo'].map(b => <option key={b}>{b}</option>)}
                    </select>
                  </div>
                  <div style={{ marginBottom: '1.2rem' }}>
                    <label className="field-label">Biggest Struggle Right Now</label>
                    <select className="field-select" value={form.struggle} onChange={set('struggle')}>
                      <option value="">Select one</option>
                      {['Not enough leads / sales','Low social media engagement','Poor website traffic','Weak brand presence','Content creation bandwidth','No clear strategy'].map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem', padding: '1.1rem' }}>
                Audit My Brand Now →
              </button>
              <p style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.08em', marginTop: '0.8rem' }}>
                100% FREE · NO CREDIT CARD · NO SPAM · TAKES 30 SECONDS
              </p>
            </form>
            <style>{`.form-2col { grid-template-columns: 1fr 1fr !important; } @media(max-width:540px){.form-2col{grid-template-columns:1fr !important;}}`}</style>
          </>
        )}

        {/* ── STEP 2: LOADING ──────────────────────── */}
        {step === 2 && (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <div style={{
              width: 52, height: 52,
              border: '2px solid var(--border)', borderTopColor: 'var(--accent)',
              borderRadius: '50%', animation: 'spin .8s linear infinite',
              margin: '0 auto 2rem',
            }} />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>ANALYZING</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Our AI is scanning your digital footprint...</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: '2rem', textAlign: 'left' }}>
              {LOADING_STEPS.map((s, i) => (
                <div key={s} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                  color: i < lsIdx ? 'var(--success)' : i === lsIdx ? 'var(--text)' : 'var(--muted)',
                  letterSpacing: '0.08em',
                  padding: '0.55rem 0.9rem',
                  border: `1px solid ${i < lsIdx ? 'rgba(76,175,80,.3)' : i === lsIdx ? 'rgba(255,77,28,.3)' : 'var(--border)'}`,
                  borderRadius: 2,
                  background: i < lsIdx ? 'rgba(76,175,80,.05)' : i === lsIdx ? 'rgba(255,77,28,.05)' : 'transparent',
                  transition: 'all .4s',
                }}>
                  <span style={{
                    width: 7, height: 7, borderRadius: '50%', flexShrink: 0,
                    background: i < lsIdx ? 'var(--success)' : i === lsIdx ? 'var(--accent)' : 'var(--border)',
                    animation: i === lsIdx ? 'pulse 1s infinite' : 'none',
                  }} />
                  {s}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── STEP 3: RESULTS ──────────────────────── */}
        {step === 3 && result && (() => {
          const scores = result.scores || {};
          const notes  = result.notes  || {};
          const total  = Object.values(scores).reduce((a, b) => a + b, 0);
          const maxPts = Object.keys(scores).length * 5;
          const pct    = Math.round((total / maxPts) * 100);
          const overallColor = pct >= 70 ? '#4CAF50' : pct >= 50 ? '#FFB347' : '#FF4D1C';

          return (
            <>
              <Steps current={3} />

              <div style={{ marginBottom: '2rem' }}>
                <div className="section-tag">Your Brand Audit Results</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,6vw,3.5rem)', lineHeight: 0.95, letterSpacing: '0.04em', marginBottom: '0.6rem' }}>
                  Here's <span style={{ color: 'var(--accent)' }}>What We Found</span>
                </h2>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7 }}>{result.intro}</p>
              </div>

              {/* Overall bar */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                background: 'var(--bg3)', border: '1px solid var(--border)',
                padding: '1rem 1.5rem', marginBottom: '1.2rem', borderRadius: 2,
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0 }}>Overall Score</span>
                <div style={{ flex: 1, height: 6, background: 'var(--border)', borderRadius: 3, overflow: 'hidden' }}>
                  <div id="overall-fill" data-width={`${pct}%`} style={{
                    height: '100%', borderRadius: 3, width: 0,
                    background: `linear-gradient(90deg,#FF4D1C,${overallColor})`,
                    transition: 'width 1.5s cubic-bezier(.2,.8,.2,1)',
                  }} />
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', letterSpacing: '0.05em', flexShrink: 0, color: overallColor }}>{pct}%</span>
              </div>

              {/* Score rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', marginBottom: '1.5rem' }}>
                {SCORE_CATEGORIES.map((cat, i) => {
                  const score = scores[cat.key] ?? 3;
                  const note  = notes[cat.key] ?? '';
                  const color = getColor(score);
                  const flag  = getFlag(score);
                  const isTop = score === 5;
                  return (
                    <div key={cat.key} style={{
                      background: isTop ? 'linear-gradient(90deg,rgba(255,77,28,.07) 0%,transparent 100%)' : 'var(--bg2)',
                      borderLeft: isTop ? '2px solid var(--accent)' : '2px solid transparent',
                      padding: '1.1rem 1.2rem',
                      display: 'flex', alignItems: 'center', gap: '1.2rem',
                      transition: 'background .2s',
                    }}
                      onMouseEnter={e => !isTop && (e.currentTarget.style.background = 'var(--bg3)')}
                      onMouseLeave={e => !isTop && (e.currentTarget.style.background = 'var(--bg2)')}
                    >
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.15rem' }}>
                          {isTop ? '✦ ' : ''}{cat.label}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--muted)', lineHeight: 1.4 }}>{note}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexShrink: 0 }}>
                        <div style={{ width: 100, height: 4, background: 'var(--bg3)', borderRadius: 2, overflow: 'hidden' }} className="score-bar-track">
                          <div className="score-bar-fill" data-width={`${score / 5 * 100}%`} style={{
                            height: '100%', borderRadius: 2, width: 0,
                            background: color,
                            transition: `width 1.2s cubic-bezier(.2,.8,.2,1) ${i * 0.12}s`,
                          }} />
                        </div>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', letterSpacing: '0.04em', color, minWidth: 32, textAlign: 'right' }}>{score}/5</span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.06em', color, whiteSpace: 'nowrap' }}>{flag}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Red flag + Win */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }} className="insight-grid">
                <div style={{
                  background: 'var(--bg2)', borderLeft: '2px solid var(--accent)',
                  padding: '1.3rem 1.4rem',
                }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>⚠ Top Red Flag</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text)', lineHeight: 1.7 }}>{result.topRedFlag}</p>
                </div>
                <div style={{
                  background: 'var(--bg2)', borderLeft: '2px solid var(--muted)',
                  padding: '1.3rem 1.4rem',
                }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>✦ Your Strength</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text)', lineHeight: 1.7 }}>{result.topWin}</p>
                </div>
              </div>

              {/* CTA block */}
              <div style={{
                background: 'var(--bg2)', border: '1px solid rgba(255,77,28,.25)',
                borderRadius: 2, padding: '2.5rem 2rem', textAlign: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(255,77,28,.07) 0%, transparent 100%)',
                  pointerEvents: 'none',
                }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', letterSpacing: '0.06em', marginBottom: '0.6rem' }}>READY TO FIX THIS?</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: 440, margin: '0 auto 2rem' }}>
                  We've identified exactly what's holding your brand back. Let's build a plan in a free 30-minute strategy call — no fluff, just next steps.
                </p>
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', fontSize: '0.9rem', padding: '1rem 2.5rem' }}>
                  Let's Talk Now →
                </a>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.1em', marginTop: '0.8rem' }}>
                  FREE 30-MIN STRATEGY CALL · NO OBLIGATION
                </p>
                <button onClick={() => { setStep(1); setResult(null); barsAnimated.current = false; }}
                  style={{
                    display: 'block', margin: '1.2rem auto 0', background: 'none',
                    border: '1px solid var(--border)', borderRadius: 2,
                    fontFamily: 'var(--font-body)', fontSize: '0.72rem',
                    color: 'var(--muted)', letterSpacing: '0.1em',
                    textTransform: 'uppercase', padding: '0.6rem 1.2rem',
                    transition: 'all .2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--muted)'; e.currentTarget.style.color = 'var(--text)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
                >← Run another audit</button>
              </div>

              <style>{`.insight-grid { grid-template-columns: 1fr 1fr !important; } @media(max-width:540px){.insight-grid{grid-template-columns:1fr !important;}}`}</style>
            </>
          );
        })()}
      </div>
    </div>
  );
}
