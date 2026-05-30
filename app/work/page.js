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

const FILTERS = ['All', 'Branding', 'Digital Marketing', 'Motion & Video', 'Web Development', 'Social Media'];

// Placeholder projects — replace with real work
const PROJECTS = [
  { id: 1, title: 'Brand Identity System', cat: 'Branding', desc: 'Complete visual identity for a lifestyle brand — logo, colour system, typography, brand guidelines.', bg: 'linear-gradient(135deg,#1a0f0a,#2a1208,#1a0a0a)', tags: ['Logo', 'Brand System', 'Guidelines'] },
  { id: 2, title: 'Social Campaign', cat: 'Digital Marketing', desc: 'Multi-channel paid campaign that drove 340% ROAS in 60 days for an e-commerce client.', bg: 'linear-gradient(135deg,#0a0f1a,#080d1a,#0a0810)', tags: ['Meta Ads', 'Google Ads', 'Strategy'] },
  { id: 3, title: 'Brand Film', cat: 'Motion & Video', desc: '90-second brand hero film. Shot, directed and post-produced in-house.', bg: 'linear-gradient(135deg,#0a1a0f,#091508,#0a1a0a)', tags: ['Motion', 'Direction', 'Edit'] },
  { id: 4, title: 'E-commerce Website', cat: 'Web Development', desc: 'Custom Next.js store — sub-2s load time, mobile-first, 89 Lighthouse score.', bg: 'linear-gradient(135deg,#12000a,#1a0010,#0d0008)', tags: ['Next.js', 'E-commerce', 'UI/UX'] },
  { id: 5, title: 'SMM Retainer', cat: 'Social Media', desc: 'Full social management across Instagram, LinkedIn and Facebook. 4× engagement growth in 3 months.', bg: 'linear-gradient(135deg,#0a0a1a,#0a0a18,#080810)', tags: ['Instagram', 'LinkedIn', 'Content'] },
  { id: 6, title: 'Motion Design Pack', cat: 'Motion & Video', desc: '24-piece animated content pack for a SaaS product launch — ads, story frames, reels.', bg: 'linear-gradient(135deg,#1a1000,#1a1200,#140e00)', tags: ['Motion', 'Animation', 'Reels'] },
];

export default function WorkPage() {
  const [active, setActive] = useState('All');
  useReveal();

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat === active);

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
        {FILTERS.map(f => (
          <button key={f} onClick={() => setActive(f)} style={{
            background: 'none', border: 'none',
            fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
            color: active === f ? 'var(--accent)' : 'var(--muted)',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '1.2rem 1.5rem',
            borderBottom: `2px solid ${active === f ? 'var(--accent)' : 'transparent'}`,
            transition: 'color .2s, border-color .2s',
            whiteSpace: 'nowrap',
          }}>
            {f}
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
              <div className="pb" style={{
                width: '100%', aspectRatio: i === 0 ? '21/9' : '4/3',
                background: p.bg, transition: 'transform .6s ease',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '0.8rem',
                  letterSpacing: '0.3em', color: 'rgba(240,235,224,0.15)',
                  textTransform: 'uppercase',
                }}>Add project image</div>
              </div>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top,rgba(8,8,8,.95) 0%,rgba(8,8,8,.3) 60%,transparent 100%)',
                padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 6 }}>{p.cat}</div>
                <div style={{ fontSize: i === 0 ? '1.6rem' : '1.15rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{p.title}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1rem', maxWidth: 480 }}>{p.desc}</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                      color: 'var(--muted)', border: '1px solid var(--border)',
                      padding: '2px 8px', borderRadius: 1, letterSpacing: '0.1em',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="po" style={{
                position: 'absolute', top: '1rem', right: '1rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                color: '#fff', background: 'var(--accent)',
                padding: '4px 10px', letterSpacing: '0.1em', textTransform: 'uppercase',
                opacity: 0, transition: 'opacity .2s',
              }}>Coming Soon</div>
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
