'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import CircleNet from '@/components/CircleNet';

/* ── Scroll reveal hook ─────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const SERVICES = [
  {
    num: '01', icon: '📣', name: 'Digital Marketing',
    desc: 'Full-funnel campaigns across every channel. Strategy, creative, execution and analytics — we drive real, measurable growth.',
    tags: ['SEO / SEM', 'Paid Ads', 'Email', 'Analytics'],
  },
  {
    num: '02', icon: '🎨', name: 'Graphics & Brand Design',
    desc: 'Visual identities that speak before you do. Brand systems, logos, print and digital — built to be distinct and durable.',
    tags: ['Brand Identity', 'UI/UX', 'Print', 'Social Kits'],
  },
  {
    num: '03', icon: '🎬', name: 'Motion Design & Video',
    desc: 'Animated content that stops the scroll. Motion graphics, reels, commercials and brand films crafted for maximum impact.',
    tags: ['Motion Graphics', 'Reels', 'Ad Creatives', 'Film'],
  },
  {
    num: '04', icon: '📱', name: 'Social Media Management',
    desc: 'Strategy, content creation, scheduling and community management. We own your socials while you focus on your business.',
    tags: ['Meta', 'LinkedIn', 'TikTok', 'YouTube'],
  },
  {
    num: '05', icon: '💻', name: 'Web Design & Development',
    desc: 'Fast, conversion-focused websites that look as good as they perform. Built on modern tech, optimised for every device.',
    tags: ['React', 'Next.js', 'WordPress', 'E-commerce'],
  },
  {
    num: '06', icon: '⚙️', name: 'Software Development',
    desc: 'Custom software that solves real problems. Web apps, SaaS platforms, APIs and automation tools built to scale.',
    tags: ['Web Apps', 'SaaS', 'API', 'Automation'],
  },
];

const MARQUEE_ITEMS = [
  'Digital Marketing', 'Motion Design', 'Brand Identity',
  'Video Editing', 'Social Media', 'Web Development',
  'Software Development', 'Paid Advertising', 'SEO & SEM', 'Content Strategy',
];

const PROCESS_STEPS = [
  { n: '01', name: 'Discovery', desc: 'We dig deep into your brand, audience, competitors and goals before touching a single pixel.' },
  { n: '02', name: 'Strategy', desc: 'A clear roadmap — channels, messaging, creative direction, timelines and KPIs. No vague promises.' },
  { n: '03', name: 'Create', desc: 'Our creative team executes. Design, motion, copy and campaigns built to your brief — and beyond.' },
  { n: '04', name: 'Launch', desc: 'We deploy across every channel — live, tracked and optimised from day one. No set-and-forget.' },
  { n: '05', name: 'Scale', desc: 'We analyse, iterate and double down on what works. Growth is not a moment — it is a system.' },
];

export default function HomePage() {
  useReveal();
  const [slideIdx, setSlideIdx] = useState(0);
  const [sliders, setSliders] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    fetch('/api/sliders').then(r => r.json()).then(data => {
      setSliders(data.filter(s => s.status));
    }).catch(console.error);

    fetch('/api/blogs').then(r => r.json()).then(data => {
      setBlogs(data.filter(b => b.status).slice(0, 3)); // Latest 3 blogs
    }).catch(console.error);

    fetch('/api/services').then(r => r.json()).then(data => {
      setServicesData(data.filter(s => s.status));
    }).catch(console.error);

    fetch('/api/projects').then(r => r.json()).then(data => {
      setProjectsData(data.filter(p => p.status).slice(0, 4)); // Latest 4 projects for preview
    }).catch(console.error);
  }, []);

  useEffect(() => {
    if (sliders.length === 0) return;
    const interval = setInterval(() => {
      setSlideIdx(prev => (prev + 1) % sliders.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slideIdx, sliders]);

  const slide = sliders.length > 0 ? sliders[slideIdx] : null;

  return (
    <>
      {/* ── HERO ───────────────────────────────────────── */}
      <section id="hero-section" style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        paddingTop: '140px', paddingBottom: '4rem',
        paddingLeft: '3rem', paddingRight: '3rem',
        position: 'relative', overflow: 'hidden'
      }}>
        {/* Grid bg */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 70% 50%, black 30%, transparent 100%)',
        }} />

        {/* Interactive CircleNet Animation */}
        <CircleNet />

        <div style={{
          position: 'absolute', top: 0, right: 0, bottom: 0,
          width: '55%', borderLeft: '1px solid var(--border)', pointerEvents: 'none',
        }} />

        {/* Main Grid Content */}
        <div className="hero-grid" style={{
          display: 'grid', flexGrow: 1, alignItems: 'center', zIndex: 2, position: 'relative', gap: '2rem'
        }}>
          {/* Left Side: Floating Slide Image and Short Description */}
          <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ position: 'relative', width: '100%', height: '400px' }}>
              {sliders.map((s, i) => (
                <img key={s.id} src={s.imageUrl} alt="floating shape" style={{
                  width: '100%', height: '100%', objectFit: 'contain',
                  position: 'absolute', inset: 0,
                  opacity: slideIdx === i ? 1 : 0,
                  transition: 'opacity 1s ease',
                  mixBlendMode: 'plus-lighter', pointerEvents: 'none',
                  animation: 'floating 4s ease-in-out infinite'
                }} />
              ))}
            </div>

            {/* Dynamic Short Description matching the active slide */}
            <div style={{ minHeight: '80px', position: 'relative' }}>
              {sliders.map((s, i) => (
                <p key={s.id} style={{
                  fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.65, maxWidth: 450,
                  position: 'absolute', top: 0, left: 0, width: '100%',
                  opacity: slideIdx === i ? 1 : 0,
                  transition: 'opacity 0.8s ease', pointerEvents: slideIdx === i ? 'auto' : 'none'
                }}>
                  {s.shortDescription}
                </p>
              ))}
            </div>
          </div>

          {/* Right Side: Text & Controls */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
              color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase',
              marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: 10,
              animation: 'fadeUp .8s .3s both',
            }}>
              <span style={{ display: 'block', width: 30, height: 1, background: 'var(--accent)' }} />
              Creative Agency — Dhaka × Canada × Global
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4rem, 8vw, 8rem)',
              lineHeight: 0.9, letterSpacing: '0.03em', color: 'var(--text)',
              animation: 'fadeUp .9s .5s both', position: 'relative',
              minHeight: '280px',
              wordWrap: 'break-word', textTransform: 'uppercase'
            }}>
              {sliders.map((s, i) => (
                <span key={s.id} style={{
                  display: slideIdx === i ? 'block' : 'none',
                  animation: slideIdx === i ? 'fadeUp 0.8s both' : 'none',
                  color: (i % 2 !== 0) ? 'var(--accent)' : 'var(--text)' // Alternate color for flair if needed, or stick to provided title
                }}>
                  {/* Since Title might be one long string, we just display it. */}
                  {/* To match the 'WE MAKE BRANDS MOVE.', we can split words if needed, but direct render works too */}
                  <span dangerouslySetInnerHTML={{ __html: s.title.replace(/\./g, '<span style="color:var(--accent)">.</span>').replace(/\n/g, '<br/>') }} />
                </span>
              ))}
            </h1>

            {/* Slider Controls */}
            {sliders.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '2rem', animation: 'fadeUp 1s .7s both' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => setSlideIdx((slideIdx - 1 + sliders.length) % sliders.length)} style={{
                    background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)',
                    width: 40, height: 40, borderRadius: '50%', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.3s'
                  }} aria-label="Previous Slide">←</button>
                  <button onClick={() => setSlideIdx((slideIdx + 1) % sliders.length)} style={{
                    background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)',
                    width: 40, height: 40, borderRadius: '50%', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.3s'
                  }} aria-label="Next Slide">→</button>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {sliders.map((_, i) => (
                    <button key={i} onClick={() => setSlideIdx(i)} style={{
                      width: 30, height: 2, background: slideIdx === i ? 'var(--accent)' : 'var(--border)',
                      border: 'none', cursor: 'pointer', transition: 'background 0.3s'
                    }} aria-label={`Go to slide ${i + 1}`} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', marginTop: 'auto',
          animation: 'fadeUp .9s .8s both', zIndex: 2,
          flexWrap: 'wrap', gap: '2rem',
        }}>
          <div style={{ display: 'flex', gap: '3rem', width: '100%', justifyContent: 'flex-end' }}>
            {[['360°', 'Digital Solutions'], ['2', 'Continents'], ['∞', 'Global Reach']].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', letterSpacing: '0.05em', lineHeight: 1 }}>{num}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          animation: 'fadeUp .8s 1.3s both',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: 1, height: 50, background: 'linear-gradient(to bottom, var(--muted), transparent)', animation: 'scrollDrop 2s 1.5s infinite' }} />
        </div>

        <style>{`
          .hero-grid { grid-template-columns: 1fr 1fr; }
          @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr; }
            .hero-grid > div:first-child { height: 250px !important; }
            #hero-section { padding: 120px 1.5rem 4rem !important; }
          }
          @keyframes floating {
            0% { transform: translateY(-15px) rotate(0deg); }
            50% { transform: translateY(15px) rotate(2deg); }
            100% { transform: translateY(-15px) rotate(0deg); }
          }
        `}</style>
      </section>

      {/* ── MARQUEE ────────────────────────────────────── */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ───────────────────────────────────── */}
      <section id="services" style={{ padding: '7rem 3rem', background: 'var(--bg2)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }} className="reveal">
          <div>
            <div className="section-tag">What We Do</div>
            <h2 className="section-title">Our <span>Services</span></h2>
          </div>
          <Link href="/services" style={{
            fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            borderBottom: '1px solid var(--accent)', paddingBottom: 2,
            display: 'flex', alignItems: 'center', gap: 8,
            transition: 'gap .2s',
          }}>Explore All The Services →</Link>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          gap: 1, background: 'var(--border)',
          border: '1px solid var(--border)',
        }} className="reveal services-grid">
          {servicesData.map((s, i) => (
            <div key={s.id}
              style={{ background: 'var(--bg2)', padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden', transition: 'background .3s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg3)'; e.currentTarget.querySelector('.sbar').style.width = '100%'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg2)'; e.currentTarget.querySelector('.sbar').style.width = '0'; }}
            >
              <div className="sbar" style={{ position: 'absolute', bottom: 0, left: 0, height: 2, width: 0, background: 'var(--accent)', transition: 'width .4s ease' }} />
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
                {(i + 1).toString().padStart(2, '0')}
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.8rem', letterSpacing: '0.02em' }}>{s.name}</div>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7 }}>{s.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: '1.2rem' }}>
                {(s.tags ? s.tags.split(',') : []).map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                    color: 'var(--muted)', border: '1px solid var(--border)',
                    padding: '3px 8px', borderRadius: 1, letterSpacing: '0.08em',
                  }}>{t.trim()}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .services-grid { grid-template-columns: repeat(3,1fr) !important; }
          @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 600px) { .services-grid { grid-template-columns: 1fr !important; } }
          #services { padding: 7rem 3rem; }
          @media (max-width: 768px) { #services { padding: 5rem 1.5rem !important; } }
        `}</style>
      </section>

      {/* ── ABOUT ──────────────────────────────────────── */}
      <section id="about" style={{ padding: '7rem 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', maxWidth: 1200, margin: '0 auto' }} className="about-wrap">
          {/* Visual */}
          <div className="reveal" style={{ position: 'relative', height: 500 }}>
            <div style={{
              position: 'absolute', width: '75%', height: '75%', top: 0, left: 0,
              background: 'var(--bg3)', border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
            }}>
              <div style={{
                width: '100%', height: '100%',
                background: 'linear-gradient(135deg,#1a1108 0%,#0f0f0f 60%,#1a0808 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  width: 160, height: 160,
                  border: '1px solid rgba(255,77,28,0.3)', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  animation: 'spin 20s linear infinite',
                }}>
                  <div style={{
                    width: 100, height: 100,
                    border: '1px solid rgba(255,77,28,0.2)', borderRadius: '50%',
                    animation: 'spin 10s linear infinite reverse',
                  }} />
                </div>
              </div>
            </div>
            <div style={{
              position: 'absolute', width: '22%', height: '22%',
              bottom: '42%', right: '27%',
              background: 'var(--bg)', border: '1px solid var(--accent)',
            }} />
            <div style={{
              position: 'absolute', width: '45%', height: '40%',
              bottom: 0, right: 0,
              background: 'var(--accent)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', gap: 4,
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: '#fff', lineHeight: 1 }}>BD</span>
              <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>× Canada</span>
            </div>
          </div>

          {/* Text */}
          <div className="reveal">
            <div className="section-tag">Who We Are</div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Built to<br /><span>Outperform.</span></h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Pythaflow is a <strong style={{ color: 'var(--text)' }}>motion-first creative agency</strong> that runs on two continents. We combine the creative energy of Dhaka with the business credibility of a Canadian-headquartered studio to serve clients worldwide.
            </p>
            <p style={{ fontSize: '0.92rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.8rem' }}>
              We don't do cookie-cutter. Every brand we work with gets a <strong style={{ color: 'var(--text)' }}>custom strategy, original creative, and a team that's genuinely invested</strong> in your growth.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '2rem' }}>
              {['🇧🇩 Dhaka Operations', '🇨🇦 Canadian HQ', '🌍 Global Clients', 'Motion-First', 'Retainer Model'].map((p, i) => (
                <span key={p} style={{
                  fontSize: '0.75rem', fontWeight: 600, color: i === 0 || i === 1 || i === 2 ? '#fff' : 'var(--text)',
                  background: i < 3 ? 'var(--accent)' : 'var(--bg3)',
                  border: '1px solid ' + (i < 3 ? 'var(--accent)' : 'var(--border)'),
                  padding: '6px 14px', borderRadius: 1, letterSpacing: '0.05em',
                }}>{p}</span>
              ))}
            </div>
            <Link href="/contact" className="btn-primary">Work With Us →</Link>
          </div>
        </div>
        <style>{`
          .about-wrap { grid-template-columns: 1fr 1fr !important; }
          @media (max-width: 900px) { .about-wrap { grid-template-columns: 1fr !important; gap: 3rem !important; } }
          @media (max-width: 768px) { #about { padding: 5rem 1.5rem !important; } }
        `}</style>
      </section>

      {/* ── WORK PREVIEW ───────────────────────────────── */}
      <section style={{ padding: '7rem 3rem', background: 'var(--bg2)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }} className="reveal">
          <div>
            <div className="section-tag">Selected Work</div>
            <h2 className="section-title">Our <span>Projects</span></h2>
          </div>
          <Link href="/work" style={{
            fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            borderBottom: '1px solid var(--accent)', paddingBottom: 2,
            display: 'flex', alignItems: 'center', gap: 8,
            transition: 'gap .2s',
          }}>View All Work →</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }} className="reveal work-preview-grid">
          {projectsData.length > 0 ? projectsData.map((project, i) => {
            const span = i === 0 ? 2 : 1;
            return (
              <Link key={project.id} href={`/work/${project.id}`} style={{ display: 'block', textDecoration: 'none', gridColumn: `span ${span}` }}>
                <div 
                  style={{ position: 'relative', overflow: 'hidden', border: '1px solid var(--border)', height: '100%' }}
                  onMouseEnter={e => { e.currentTarget.querySelector('.wbg').style.transform = 'scale(1.04)'; e.currentTarget.querySelector('.wov').style.transform = 'translateY(0)'; }}
                  onMouseLeave={e => { e.currentTarget.querySelector('.wbg').style.transform = 'scale(1)'; e.currentTarget.querySelector('.wov').style.transform = 'translateY(4px)'; }}
                >
                  <div className="wbg" style={{
                    width: '100%', aspectRatio: span === 2 ? '21/9' : '16/9',
                    background: project.imageUrl ? `url(${project.imageUrl}) center/cover no-repeat` : 'var(--bg3)', 
                    transition: 'transform .5s ease',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {!project.imageUrl && (
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', letterSpacing: '0.3em', color: 'var(--muted)', textTransform: 'uppercase' }}>
                        No Image
                      </span>
                    )}
                  </div>
                  <div className="wov" style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top,rgba(8,8,8,.9) 0%,transparent 60%)',
                    padding: '2rem', display: 'flex', flexDirection: 'column',
                    justifyContent: 'flex-end', transform: 'translateY(4px)', transition: 'transform .3s',
                  }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 4 }}>
                      {project.service?.name || 'Project'}
                    </div>
                    <div style={{ fontSize: span === 2 ? '1.5rem' : '1.1rem', fontWeight: 700, color: 'var(--text)' }}>
                      {project.title}
                    </div>
                  </div>
                </div>
              </Link>
            )
          }) : (
            <p style={{ color: 'var(--muted)', gridColumn: 'span 2', textAlign: 'center', padding: '2rem' }}>Projects coming soon...</p>
          )}
        </div>
        <style>{`
          .work-preview-grid { grid-template-columns: repeat(2,1fr) !important; }
          @media (max-width: 768px) {
            .work-preview-grid { grid-template-columns: 1fr !important; }
            .work-preview-grid > div { grid-column: span 1 !important; }
          }
        `}</style>
      </section>

      {/* ── PROCESS ────────────────────────────────────── */}
      <section id="process" style={{ padding: '7rem 3rem', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="reveal">
          <div className="section-tag" style={{ justifyContent: 'center' }}>How We Work</div>
          <h2 className="section-title">Our <span>Process</span></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0, maxWidth: 1200, margin: '0 auto' }} className="reveal process-grid">
          {PROCESS_STEPS.map((s, i) => (
            <div key={s.n}
              style={{
                padding: '2rem 1.5rem',
                borderRight: i < 4 ? '1px solid var(--border)' : 'none',
                transition: 'background .3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg3)'; e.currentTarget.querySelector('.pn').style.color = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.querySelector('.pn').style.color = 'var(--border)'; }}
            >
              <div className="pn" style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--border)', lineHeight: 1, marginBottom: '1.2rem', transition: 'color .3s' }}>{s.n}</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.6rem' }}>{s.name}</div>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <style>{`
          .process-grid { grid-template-columns: repeat(5,1fr) !important; }
          @media (max-width: 900px) {
            .process-grid { grid-template-columns: repeat(2,1fr) !important; }
            .process-grid > div { border-right: none !important; border-bottom: 1px solid var(--border); }
          }
          @media (max-width: 768px) { #process { padding: 5rem 1.5rem !important; } }
        `}</style>
      </section>

      {/* ── ASSESSMENT CTA ─────────────────────────────── */}
      <section style={{ padding: '7rem 3rem', background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }} className="reveal">
          <div className="section-tag" style={{ justifyContent: 'center' }}>Free Tool</div>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Is Your Brand<br /><span>Losing Money</span> Online?</h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: 480, margin: '0 auto 2.5rem' }}>
            Drop your links. Our AI audits your entire digital presence in 30 seconds and shows you exactly where you're leaving revenue on the table.
          </p>
          <Link href="/assessment" className="btn-primary" style={{ display: 'inline-flex' }}>
            Get My Free Audit →
          </Link>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em', marginTop: '1rem' }}>
            FREE · NO CREDIT CARD · TAKES 30 SECONDS
          </p>
        </div>
      </section>

      {/* ── RECENT BLOGS ───────────────────────────────── */}
      <section style={{ padding: '7rem 3rem', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }} className="reveal">
          <div>
            <div className="section-tag">Insights & News</div>
            <h2 className="section-title">Latest <span>Articles</span></h2>
          </div>
          <Link href="/blog" style={{
            fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            borderBottom: '1px solid var(--accent)', paddingBottom: 2,
            display: 'flex', alignItems: 'center', gap: 8,
            transition: 'gap .2s',
          }}>View All Articles →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }} className="reveal">
          {blogs.length > 0 ? (
            blogs.map(blog => (
              <Link key={blog.id} href={`/blog/${blog.slug}`} style={{ display: 'block', textDecoration: 'none', height: '100%' }}>
                <div style={{
                  border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden',
                  background: 'var(--bg2)', transition: 'transform 0.3s ease, border-color 0.3s',
                  height: '100%', display: 'flex', flexDirection: 'column'
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)'; }}>
                  {blog.mainImage && (
                    <img src={blog.mainImage} alt={blog.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  )}
                  <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        {blog.category?.name || 'General'}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text)', marginBottom: '0.5rem', lineHeight: 1.3 }}>{blog.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '1.5rem' }}>
                      {blog.metaDescription || 'Read more about this topic in our latest article.'}
                    </p>
                    <div style={{ marginTop: 'auto', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)' }}>Read Article →</div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            [1, 2, 3].map(i => (
              <div key={i} style={{
                border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden',
                background: 'var(--bg2)', opacity: 0.6, height: '100%', display: 'flex', flexDirection: 'column'
              }}>
                <div style={{ width: '100%', height: '200px', background: 'var(--bg3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Placeholder Image</span>
                </div>
                <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Category</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>00/00/0000</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text)', marginBottom: '0.5rem', lineHeight: 1.3 }}>Example Blog Post Title Here</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>This is a placeholder for a blog post. Add some articles from the admin panel!</p>
                  <div style={{ marginTop: 'auto', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)' }}>Read Article →</div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────── */}
      <section style={{ padding: '8rem 3rem', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{
          position: 'absolute', fontFamily: 'var(--font-display)',
          fontSize: '22vw', color: 'rgba(255,77,28,0.03)',
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          pointerEvents: 'none', whiteSpace: 'nowrap', letterSpacing: '0.05em',
        }}>PYTHAFLOW</div>
        <div className="reveal">
          <div className="section-tag" style={{ justifyContent: 'center' }}>Let's Build Something</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem,8vw,7rem)',
            lineHeight: 0.9, letterSpacing: '0.04em', color: 'var(--text)',
            margin: '1rem 0 2rem',
          }}>
            Ready to <span style={{ color: 'var(--accent)' }}>Stand Out?</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: 460, margin: '0 auto 3rem', lineHeight: 1.7 }}>
            Tell us about your brand. We'll tell you exactly how to make it impossible to ignore.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Start a Project →</Link>
            <Link href="/services" className="btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
