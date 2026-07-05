'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BlogsLayout({ children }) {
  const pathname = usePathname();
  const tabs = [
    { name: 'Posts', path: '/admin/blogs' },
    { name: 'Categories', path: '/admin/blogs/categories' },
    { name: 'Subcategories', path: '/admin/blogs/subcategories' },
  ];

  return (
    <div style={{ width: '100%', maxWidth: '1200px' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Blog Management</h1>
      <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border)', marginBottom: '2rem', paddingBottom: '1rem' }}>
        {tabs.map(t => (
          <Link key={t.path} href={t.path} style={{
            padding: '0.5rem 1rem',
            background: pathname === t.path ? 'var(--accent)' : 'transparent',
            color: pathname === t.path ? '#fff' : 'var(--text)',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: pathname === t.path ? 'bold' : 'normal',
            transition: 'all 0.2s'
          }}>
            {t.name}
          </Link>
        ))}
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
