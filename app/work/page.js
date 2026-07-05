'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      entries => entries.forEach((e, i) => {
        if (e.isIntersecting) { setTimeout(() => e.target.classList.add('visible'), i * 80); obs.unobserve(e.target); }
      }), { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function WorkPage() {
  useReveal();
  const [active, setActive] = useState('All');
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/projects').then(r => r.json()),
      fetch('/api/services').then(r => r.json())
    ]).then(([projData, servData]) => {
      setProjects(projData.filter(p => p.status));
      setServices(servData.filter(s => s.status));
      setLoading(false);
    }).catch(console.error);
  }, []);

  const filtered = active === 'All' ? projects : projects.filter(p => p.serviceId === active);

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: '5rem', paddingLeft: '3rem', paddingRight: '3rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-tag" style={{ animation: 'fadeUp .7s .2s both' }}>Selected Work</div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(4rem,10vw,9rem)',
            lineHeight: 0.9, letterSpacing: '0.04em',
            animation: 'fadeUp .8s .4s both',
          }}>
            Our <span style={{ color: 'var(--accent)' }}>Work</span><br />Speaks.
          </h1>
          <p style={{
            fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.7,
            maxWidth: 440, marginTop: '2rem',
            animation: 'fadeUp .8s .6s both',
          }}>
            Real projects. Real results. We let the output do the talking — no stock photos, no puffery.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <div style={{
        position: 'sticky', top: 72, zIndex: 50,
        background: 'rgba(8,8,8,0.92)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
        padding: '0 3rem',
        display: 'flex', gap: 0, overflowX: 'auto',
      }}>
        <button onClick={() => setActive('All')} style={{
          background: 'none', border: 'none',
          fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
          color: active === 'All' ? 'var(--accent)' : 'var(--muted)',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          padding: '1.2rem 1.5rem',
          borderBottom: `2px solid ${active === 'All' ? 'var(--accent)' : 'transparent'}`,
          transition: 'color .2s, border-color .2s',
          whiteSpace: 'nowrap', cursor: 'pointer'
        }}>
          All
        </button>
        {services.map(s => (
          <button key={s.id} onClick={() => setActive(s.id)} style={{
            background: 'none', border: 'none',
            fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
            color: active === s.id ? 'var(--accent)' : 'var(--muted)',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '1.2rem 1.5rem',
            borderBottom: `2px solid ${active === s.id ? 'var(--accent)' : 'transparent'}`,
            transition: 'color .2s, border-color .2s',
            whiteSpace: 'nowrap', cursor: 'pointer'
          }}>
            {s.name}
          </button>
        ))}
        <style>{`@media(max-width:768px){.filter-bar{padding:0 1.5rem !important;}}`}</style>
      </div>

      {/* Projects grid */}
      <section style={{ padding: '4rem 3rem', minHeight: '60vh' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem',
        }} className="work-grid reveal">
          {filtered.map((p, i) => (
            <div key={p.id}
              style={{
                position: 'relative', overflow: 'hidden',
                border: '1px solid var(--border)',
                gridColumn: i === 0 ? 'span 2' : 'span 1',
              }}
              onMouseEnter={e => { e.currentTarget.querySelector('.pb').style.transform = 'scale(1.04)'; e.currentTarget.querySelector('.po').style.opacity = 1; }}
              onMouseLeave={e => { e.currentTarget.querySelector('.pb').style.transform = 'scale(1)'; e.currentTarget.querySelector('.po').style.opacity = 0; }}
            >
              <Link href={`/work/${p.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                <div className="pb" style={{
                  width: '100%', aspectRatio: i === 0 ? '21/9' : '16/9',
                  background: p.imageUrl ? `url(${p.imageUrl}) center/cover no-repeat` : 'var(--bg3)', 
                  transition: 'transform .5s ease',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                   {!p.imageUrl && <span style={{ color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>No Image</span>}
                </div>
                <div className="po" style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(8,8,8,0.7)', backdropFilter: 'blur(4px)',
                  opacity: 0, transition: 'opacity .3s',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: '50%',
                    background: 'var(--accent)', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.15em',
                  }}>View</div>
                </div>
              </Link>
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(8,8,8,0.95) 0%, transparent 100%)',
                padding: '3rem 2rem 2rem', pointerEvents: 'none'
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 6 }}>
                  {p.service?.name || 'Project'}
                </div>
                <div style={{ fontSize: i === 0 ? '1.8rem' : '1.3rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.6rem' }}>{p.title}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6, maxWidth: i === 0 ? '60%' : '100%' }}>{p.shortDescription}</p>
                <div style={{ display: 'flex', gap: 6, marginTop: '1rem', flexWrap: 'wrap' }}>
                  {(p.tags ? p.tags.split(',') : []).map(t => (
                    <span key={t} style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'rgba(255,255,255,0.6)',
                      border: '1px solid rgba(255,255,255,0.2)', padding: '3px 8px', borderRadius: 2, letterSpacing: '0.1em',
                    }}>{t.trim()}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '5rem 0' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>
              PROJECTS COMING SOON
            </p>
          </div>
        )}
        <style>{`
          .work-grid { grid-template-columns: repeat(2,1fr) !important; }
          @media(max-width:768px) {
            .work-grid { grid-template-columns: 1fr !important; }
            .work-grid > div { grid-column: span 1 !important; }
            section { padding: 3rem 1.5rem !important; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 3rem', background: 'var(--bg2)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="reveal">
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Want Results<br /><span>Like These?</span></h2>
          <p style={{ color: 'var(--muted)', maxWidth: 420, margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Start with a free brand audit — we'll show you exactly what's holding your brand back.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/assessment" className="btn-primary">Free Brand Audit →</Link>
            <Link href="/contact" className="btn-secondary">Start a Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}
