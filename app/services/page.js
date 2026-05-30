'use client';
import { useEffect } from 'react';
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

const SERVICES = [
  {
    id: 'digital-marketing', num: '01', icon: '📣',
    name: 'Digital Marketing',
    tagline: 'Full-funnel. Data-driven. Results-obsessed.',
    desc: 'We build and manage end-to-end digital marketing systems that bring in real customers — not vanity metrics. From search to social to email, every channel works together toward your revenue goals.',
    deliverables: ['SEO Strategy & Execution', 'Google & Meta Paid Ads', 'Email Marketing Campaigns', 'Marketing Analytics & Reporting', 'Conversion Rate Optimisation', 'Competitor Analysis'],
    tags: ['SEO / SEM', 'Google Ads', 'Meta Ads', 'Email', 'Analytics', 'CRO'],
    color: '#FF4D1C',
  },
  {
    id: 'branding', num: '02', icon: '🎨',
    name: 'Graphics & Brand Design',
    tagline: 'Visual identities that speak before you do.',
    desc: 'Great brands are recognised before they\'re read. We build cohesive visual systems — from logo and colour palette to every touchpoint your customers see — that make you look undeniably premium.',
    deliverables: ['Logo Design & Brand Identity', 'Brand Guidelines Document', 'Social Media Design Kits', 'Print & Packaging Design', 'Pitch Decks & Presentations', 'UI/UX Design'],
    tags: ['Brand Identity', 'Logo Design', 'UI/UX', 'Print', 'Social Kits', 'Pitch Decks'],
    color: '#FFB347',
  },
  {
    id: 'motion', num: '03', icon: '🎬',
    name: 'Motion Design & Video',
    tagline: 'Content that stops the scroll. Every time.',
    desc: 'Video is the highest-converting format on every platform — and most brands are doing it wrong. We produce motion graphics, brand films, reels and ad creatives that make people stop, watch, and act.',
    deliverables: ['Motion Graphics & Animation', 'Social Media Reels & Shorts', 'Brand & Product Films', 'Video Ad Creatives', 'Logo Animation', 'Explainer Videos'],
    tags: ['Motion Graphics', 'Reels', 'Brand Film', 'Ad Creatives', 'Animation', 'Explainer'],
    color: '#9B59B6',
  },
  {
    id: 'social', num: '04', icon: '📱',
    name: 'Social Media Management',
    tagline: 'Your socials, fully handled. Month after month.',
    desc: 'Consistent, strategic, on-brand social media is a full-time job. We manage your entire presence — content calendars, creative production, posting, community management and monthly reporting.',
    deliverables: ['Content Strategy & Calendar', 'Creative Design & Copywriting', 'Scheduling & Publishing', 'Community Management', 'Monthly Performance Reports', 'Hashtag & Growth Strategy'],
    tags: ['Meta', 'LinkedIn', 'TikTok', 'YouTube', 'Instagram', 'Content Strategy'],
    color: '#27AE60',
  },
  {
    id: 'web', num: '05', icon: '💻',
    name: 'Web Design & Development',
    tagline: 'Fast. Beautiful. Built to convert.',
    desc: 'Your website is your best salesperson. We design and build websites that load fast, look stunning and are engineered to convert visitors into paying customers — on every device.',
    deliverables: ['UI/UX Design & Wireframing', 'Custom Next.js / React Development', 'WordPress & Webflow Builds', 'E-commerce Development', 'Landing Page Design', 'Website Speed Optimisation'],
    tags: ['Next.js', 'React', 'WordPress', 'Webflow', 'E-commerce', 'Landing Pages'],
    color: '#2980B9',
  },
  {
    id: 'software', num: '06', icon: '⚙️',
    name: 'Software Development',
    tagline: 'Custom software. Zero compromises.',
    desc: 'When off-the-shelf tools aren\'t enough, we build exactly what you need. Web apps, SaaS platforms, internal tools, APIs and automation systems — engineered to scale.',
    deliverables: ['Web Application Development', 'SaaS Product Development', 'API Design & Integration', 'Business Process Automation', 'Database Architecture', 'Ongoing Maintenance & Support'],
    tags: ['Web Apps', 'SaaS', 'API', 'Automation', 'Database', 'Maintenance'],
    color: '#E74C3C',
  },
];

export default function ServicesPage() {
  useReveal();
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: '140px', paddingBottom: '5rem', paddingLeft: '3rem', paddingRight: '3rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-tag" style={{ animation: 'fadeUp .7s .2s both' }}>What We Do</div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(4rem,10vw,9rem)',
            lineHeight: 0.9, letterSpacing: '0.04em', color: 'var(--text)',
            animation: 'fadeUp .8s .4s both',
          }}>
            Every<br />Service<br /><span style={{ color: 'var(--accent)' }}>You Need.</span>
          </h1>
          <p style={{
            fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.7,
            maxWidth: 460, marginTop: '2rem',
            animation: 'fadeUp .8s .6s both',
          }}>
            Six core service areas. One strategic partner. Everything working together to grow your brand.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap', animation: 'fadeUp .8s .7s both' }}>
            {SERVICES.map(s => (
              <a key={s.id} href={`#${s.id}`} style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                color: 'var(--muted)', border: '1px solid var(--border)',
                padding: '5px 12px', borderRadius: 1, letterSpacing: '0.1em',
                textTransform: 'uppercase', transition: 'all .2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
              >
                {s.num} {s.name}
              </a>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){#services-hero{padding:120px 1.5rem 3rem !important}}`}</style>
      </section>

      {/* Service sections */}
      {SERVICES.map((s, idx) => (
        <section key={s.id} id={s.id} style={{
          padding: '6rem 3rem',
          background: idx % 2 === 1 ? 'var(--bg2)' : 'var(--bg)',
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="svc-row reveal">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                  color: s.color, letterSpacing: '0.15em', border: `1px solid ${s.color}33`,
                  padding: '4px 10px', borderRadius: 1,
                }}>{s.num}</span>
                <span style={{ fontSize: '1.6rem' }}>{s.icon}</span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem,5vw,4rem)',
                lineHeight: 0.95, letterSpacing: '0.04em',
                color: 'var(--text)', marginBottom: '0.6rem',
              }}>{s.name}</h2>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                color: s.color, letterSpacing: '0.12em', textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}>{s.tagline}</p>
              <p style={{ fontSize: '0.92rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem' }}>{s.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {s.tags.map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                    color: 'var(--muted)', border: '1px solid var(--border)',
                    padding: '4px 10px', borderRadius: 1, letterSpacing: '0.08em',
                  }}>{t}</span>
                ))}
              </div>
            </div>
            <div>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                color: s.color, letterSpacing: '0.18em', textTransform: 'uppercase',
                marginBottom: '1.2rem',
              }}>What You Get</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid var(--border)' }}>
                {s.deliverables.map((d, i) => (
                  <div key={d} style={{
                    padding: '1rem 1.2rem',
                    borderBottom: i < s.deliverables.length - 1 ? '1px solid var(--border)' : 'none',
                    display: 'flex', alignItems: 'center', gap: 10,
                    transition: 'background .2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--bg3)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <span style={{ color: s.color, fontSize: '0.75rem' }}>✦</span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--text)' }}>{d}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                marginTop: '1.5rem', background: s.color, color: '#fff',
                fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em',
                textTransform: 'uppercase', padding: '0.85rem 1.8rem',
                borderRadius: 1, transition: 'opacity .2s',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Get a Quote →
              </Link>
            </div>
          </div>
          <style>{`
            .svc-row { grid-template-columns: 1fr 1fr !important; }
            @media(max-width:900px) { .svc-row { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
            @media(max-width:768px) { section { padding: 4rem 1.5rem !important; } }
          `}</style>
        </section>
      ))}

      {/* Bottom CTA */}
      <section style={{ padding: '7rem 3rem', textAlign: 'center' }}>
        <div className="reveal">
          <div className="section-tag" style={{ justifyContent: 'center' }}>Ready?</div>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Let's Start<br /><span>Building.</span></h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: 440, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Not sure which service you need? Get a free audit first — we'll tell you exactly where to focus.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/assessment" className="btn-primary">Free Brand Audit →</Link>
            <Link href="/contact" className="btn-secondary">Talk to Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
