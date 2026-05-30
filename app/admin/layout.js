'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  if (pathname === '/admin/login') return children;

  const links = [
    { href: '/admin', label: 'Dashboard' },
    { href: '/admin/inquiries', label: 'Inquiries' },
    { href: '/admin/audits', label: 'Audits' },
    { href: '/admin/services', label: 'Services' },
    { href: '/admin/projects', label: 'Projects' },
    { href: '/admin/content', label: 'Page Content' },
    { href: '/admin/settings', label: 'Site Settings' },
  ];

  return (
    <>
      <style>{`
        body, * {
          cursor: auto !important;
        }
        a, button, select, input[type="submit"], input[type="button"], input[type="checkbox"] {
          cursor: pointer !important;
        }
      `}</style>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg2)' }}>
        {/* Sidebar */}
        <aside style={{ width: '250px', background: 'var(--bg)', borderRight: '1px solid var(--border)', padding: '2rem' }}>
          <Link href="/" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', display: 'block', marginBottom: '3rem' }}>
            PYTHAFLOW<span style={{ color: 'var(--accent)' }}>.</span>
          </Link>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
            {links.map(l => {
              const isActive = l.href === '/admin' ? pathname === '/admin' : pathname.startsWith(l.href);
              return (
                <Link key={l.href} href={l.href} style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '4px',
                  background: isActive ? 'var(--accent)' : 'transparent',
                  color: isActive ? '#fff' : 'var(--text)',
                  transition: 'background 0.2s'
                }}>
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/admin/profile" style={{
              display: 'block', padding: '0.75rem 1rem', borderRadius: '4px', marginBottom: '0.5rem',
              background: pathname.includes('/admin/profile') ? 'var(--accent)' : 'transparent',
              color: pathname.includes('/admin/profile') ? '#fff' : 'var(--text)'
            }}>
              My Profile
            </Link>
            <button onClick={async () => {
              await fetch('/api/auth/logout', { method: 'POST' });
              window.location.href = '/admin/login';
            }} style={{
              width: '100%', textAlign: 'left', padding: '0.75rem 1rem', borderRadius: '4px',
              background: 'transparent', color: '#ff5555', border: 'none', cursor: 'pointer'
            }}>
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '3rem', overflowY: 'auto' }}>
          {children}
        </main>
      </div>
    </>
  );
}
