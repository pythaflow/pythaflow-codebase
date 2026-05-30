'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = {
  Services: [
    { label: 'Digital Marketing', href: '/services#digital-marketing' },
    { label: 'Graphics & Branding', href: '/services#branding' },
    { label: 'Motion & Video', href: '/services#motion' },
    { label: 'Social Media', href: '/services#social' },
    { label: 'Web Development', href: '/services#web' },
    { label: 'Software Dev', href: '/services#software' },
  ],
  Company: [
    { label: 'About Studio', href: '/#about' },
    { label: 'Our Work', href: '/work' },
    { label: 'Our Process', href: '/#process' },
    { label: 'Free Brand Audit', href: '/assessment' },
    { label: 'Contact', href: '/contact' },
  ],
};

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/pythaflow' },
  { label: 'Instagram', href: 'https://instagram.com/pythaflow' },
  { label: 'Facebook', href: 'https://facebook.com/pythaflow' },
  { label: 'Behance', href: 'https://behance.net/pythaflow' },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;

  return (
    <footer style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
    }}>
      {/* Top section */}
      <div className="container" style={{ padding: '5rem 3rem 3rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          gap: '3rem',
        }}
          className="footer-grid">
          {/* Brand column */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.8rem', letterSpacing: '0.12em',
              color: 'var(--text)', marginBottom: '1rem',
            }}>
              PYTHAFLOW<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <p style={{
              fontSize: '0.85rem', color: 'var(--muted)',
              lineHeight: 1.8, maxWidth: 260,
            }}>
              A motion-first creative agency. We make brands impossible to ignore — from Dhaka to the world.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                    color: 'var(--muted)', letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid var(--border)',
                    paddingBottom: 2,
                    transition: 'color .2s, border-color .2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--muted)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                color: 'var(--accent)', letterSpacing: '0.2em',
                textTransform: 'uppercase', marginBottom: '1.2rem',
              }}>
                {group}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {items.map(item => (
                  <li key={item.label}>
                    <Link href={item.href} style={{
                      fontSize: '0.83rem', color: 'var(--muted)',
                      transition: 'color .2s',
                    }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
              color: 'var(--accent)', letterSpacing: '0.2em',
              textTransform: 'uppercase', marginBottom: '1.2rem',
            }}>
              Get In Touch
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <p style={{ fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 3 }}>Email</p>
                <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@pythaflow.com'}`}
                  style={{ fontSize: '0.85rem', color: 'var(--text)', transition: 'color .2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
                >
                  hello@pythaflow.com
                </a>
              </div>
              <div>
                <p style={{ fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 3 }}>HQ</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text)' }}>Canada</p>
              </div>
              <div>
                <p style={{ fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 3 }}>Operations</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text)' }}>Dhaka, Bangladesh</p>
              </div>
              <Link href="/assessment" style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                marginTop: '0.5rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                color: 'var(--accent)', letterSpacing: '0.12em',
                textTransform: 'uppercase',
                borderBottom: '1px solid var(--accent)',
                paddingBottom: 2,
              }}>
                Free Brand Audit →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{
          padding: '1.5rem 3rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
          className="footer-bottom">
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            color: 'var(--muted)', letterSpacing: '0.08em',
          }}>
            © {new Date().getFullYear()} Pythaflow Inc. · Registered in Canada · All rights reserved.
          </p>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            color: 'var(--muted)', letterSpacing: '0.08em',
          }}>
            Global services · pythaflow.com
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-bottom { flex-direction: column; gap: .6rem; text-align: center; }
          footer .container { padding: 3rem 1.5rem 2rem !important; }
        }
      `}</style>
    </footer>
  );
}
