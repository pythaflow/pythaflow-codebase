'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Toaster } from 'react-hot-toast';

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const baseStyles = (
    <style>{`
      body, * {
        cursor: auto !important;
      }
      a, button, select, input[type="submit"], input[type="button"], input[type="checkbox"] {
        cursor: pointer !important;
      }
    `}</style>
  );

  if (pathname === '/admin/login') return <>{children}</>;

  const links = [
    { href: '/admin', label: 'Dashboard' },
    { href: '/admin/inquiries', label: 'Inquiries' },
    { href: '/admin/audits', label: 'Audits' },
    { href: '/admin/services', label: 'Services' },
    { href: '/admin/projects', label: 'Projects' },
    { href: '/admin/blogs', label: 'Blog Management' },
    { href: '/admin/content', label: 'Page Content' },
    { href: '/admin/settings', label: 'Site Settings' },
  ];

  return (
    <>
      <Toaster position="bottom-right" toastOptions={{ style: { background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)' } }} />
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
        <aside style={{
          width: '260px',
          minWidth: '260px',
          background: 'var(--bg)',
          borderRight: '1px solid var(--border)',
          padding: '2.5rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <Link href="/" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', display: 'block', marginBottom: '2.5rem', paddingLeft: '0.5rem' }}>
              PYTHAFLOW<span style={{ color: 'var(--accent)' }}>.</span>
            </Link>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {links.map(l => {
                const isActive = l.href === '/admin' ? pathname === '/admin' : pathname.startsWith(l.href);
                return (
                  <Link key={l.href} href={l.href} style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '6px',
                    background: isActive ? 'var(--accent)' : 'transparent',
                    color: isActive ? '#fff' : 'var(--text)',
                    transition: 'all 0.2s',
                    fontWeight: isActive ? '600' : 'normal',
                  }}>
                    {l.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link href="/admin/profile" style={{
              display: 'block', padding: '0.75rem 1rem', borderRadius: '6px',
              background: pathname.includes('/admin/profile') ? 'var(--accent)' : 'transparent',
              color: pathname.includes('/admin/profile') ? '#fff' : 'var(--text)',
              transition: 'all 0.2s'
            }}>
              My Profile
            </Link>
            <button onClick={async () => {
              await fetch('/api/auth/logout', { method: 'POST' });
              window.location.href = '/admin/login';
            }} style={{
              width: '100%', textAlign: 'left', padding: '0.75rem 1rem', borderRadius: '6px',
              background: 'transparent', color: '#ff5555', border: 'none', cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '2.5rem 3.5rem', overflowY: 'auto', minWidth: 0 }}>
          <div style={{ width: '100%', maxWidth: '1200px', marginLeft: '0', marginRight: 'auto' }}>
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
