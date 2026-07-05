'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  if (pathname?.startsWith('/admin')) return null;

  const links = [
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/#about', label: 'Studio' },
    { href: '/blog', label: 'Blog' },
    { href: '/assessment', label: 'Free Audit' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.5rem 3rem',
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'background .4s, border-color .4s, backdrop-filter .4s',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            width: 7, height: 7, background: 'var(--accent)',
            borderRadius: '50%', display: 'inline-block',
            animation: 'pulse 2s infinite',
          }} />
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: '1.55rem',
            letterSpacing: '0.12em', color: 'var(--text)',
          }}>PYTHAFLOW</span>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', listStyle: 'none' }}
          className="desktop-nav">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href}
                className={l.href === '/assessment' ? 'free-audit-btn' : ''}
                style={l.href === '/assessment' ? {
                  fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase'
                } : {
                  color: 'var(--muted)',
                  fontSize: '0.78rem', fontWeight: 500,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  transition: 'color .2s',
                }}
                onMouseEnter={e => { if (l.href !== '/assessment') e.currentTarget.style.color = 'var(--text)' }}
                onMouseLeave={e => { if (l.href !== '/assessment') e.currentTarget.style.color = 'var(--muted)' }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" style={{
              background: 'var(--accent)', color: '#fff',
              fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '0.55rem 1.3rem', borderRadius: 'var(--radius-sm)',
              transition: 'background .2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#e63d0e'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
            >
              Start a Project
            </Link>
          </li>
          <li>
            <button onClick={toggleTheme} style={{
              background: 'transparent', border: '1px solid var(--border)',
              color: 'var(--text)', padding: '0',
              borderRadius: 'var(--radius-sm)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 36, height: 36, transition: 'transform 0.3s ease'
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          aria-label="Menu"
          style={{
            background: 'none', border: 'none', padding: 8,
            display: 'flex', flexDirection: 'column', gap: 5,
          }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 1.5,
              background: 'var(--text)',
              transition: 'transform .3s, opacity .3s',
              transform: menuOpen
                ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                  : i === 2 ? 'translateY(-6.5px) rotate(-45deg)'
                    : 'none'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 99,
        background: 'rgba(8,8,8,0.97)',
        backdropFilter: 'blur(16px)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '2rem',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'all' : 'none',
        transition: 'opacity .3s',
      }}>
        {[...links, { href: '/contact', label: 'Start a Project' }].map(l => (
          <Link key={l.href} href={l.href} style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.5rem', letterSpacing: '0.08em',
            color: l.href === '/contact' ? 'var(--accent)' : 'var(--text)',
            textTransform: 'uppercase',
          }}>
            {l.label}
          </Link>
        ))}
      </div>

      <style>{`
        .desktop-nav { display: flex !important; }
        .hamburger { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          nav { padding: 1.2rem 1.5rem !important; }
        }
      `}</style>
    </>
  );
}
