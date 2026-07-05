'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BlogListingPage() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCat, setActiveCat] = useState('All');
  const [activeSubCat, setActiveSubCat] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/blogs').then(r => r.json()).then(data => {
      setBlogs(data.filter(b => b.status));
      setLoading(false);
    });
    fetch('/api/blogs/categories').then(r => r.json()).then(data => {
      setCategories(data.filter(c => c.status));
    });
    fetch('/api/blogs/subcategories').then(r => r.json()).then(data => {
      setSubcategories(data.filter(s => s.status));
    });
  }, []);

  const filteredBlogs = blogs.filter(b => {
    const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = activeCat === 'All' ? true : b.categoryId === activeCat;
    const matchesSubCat = activeSubCat === 'All' ? true : b.subcategoryId === activeSubCat;
    return matchesSearch && matchesCat && matchesSubCat;
  });

  const availableSubcats = activeCat === 'All' ? [] : subcategories.filter(s => s.categoryId === activeCat);

  return (
    <div style={{ paddingTop: '140px', paddingBottom: '7rem', minHeight: '100vh', paddingLeft: '3rem', paddingRight: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', marginBottom: '1rem' }}>Our Insights</h1>
      <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '600px', marginBottom: '3rem' }}>
        Thoughts, strategies, and updates from the Pythaflow team.
      </p>

      {/* Search & Filters */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
        <input 
          type="text" 
          placeholder="Search articles by name..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '4px', border: '1px solid var(--border)', background: 'var(--bg2)', color: 'var(--text)' }}
        />
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button 
            onClick={() => { setActiveCat('All'); setActiveSubCat('All'); }}
            style={{
              padding: '0.5rem 1rem', borderRadius: '20px', border: '1px solid var(--border)',
              background: activeCat === 'All' ? 'var(--accent)' : 'transparent',
              color: activeCat === 'All' ? '#fff' : 'var(--text)', cursor: 'pointer', transition: 'all 0.3s'
            }}>
            All
          </button>
          {categories.map(c => (
            <button 
              key={c.id} 
              onClick={() => { setActiveCat(c.id); setActiveSubCat('All'); }}
              style={{
                padding: '0.5rem 1rem', borderRadius: '20px', border: '1px solid var(--border)',
                background: activeCat === c.id ? 'var(--accent)' : 'transparent',
                color: activeCat === c.id ? '#fff' : 'var(--text)', cursor: 'pointer', transition: 'all 0.3s'
              }}>
              {c.name}
            </button>
          ))}
        </div>

        {availableSubcats.length > 0 && (
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '-0.5rem' }}>
            <span style={{ color: 'var(--muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>Subcategories:</span>
            <button 
              onClick={() => setActiveSubCat('All')}
              style={{
                padding: '0.25rem 0.75rem', borderRadius: '16px', border: '1px solid var(--border)', fontSize: '0.85rem',
                background: activeSubCat === 'All' ? 'var(--bg3)' : 'transparent',
                color: activeSubCat === 'All' ? 'var(--text)' : 'var(--muted)', cursor: 'pointer', transition: 'all 0.3s'
              }}>
              Any
            </button>
            {availableSubcats.map(s => (
              <button 
                key={s.id} 
                onClick={() => setActiveSubCat(s.id)}
                style={{
                  padding: '0.25rem 0.75rem', borderRadius: '16px', border: '1px solid var(--border)', fontSize: '0.85rem',
                  background: activeSubCat === s.id ? 'var(--bg3)' : 'transparent',
                  color: activeSubCat === s.id ? 'var(--text)' : 'var(--muted)', cursor: 'pointer', transition: 'all 0.3s'
                }}>
                {s.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {loading ? (
        <p>Loading articles...</p>
      ) : filteredBlogs.length === 0 ? (
        <p style={{ color: 'var(--muted)' }}>No articles found in this category.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {filteredBlogs.map(blog => (
            <Link key={blog.id} href={`/blog/${blog.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
              <div style={{
                border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden',
                background: 'var(--bg2)', transition: 'transform 0.3s ease, border-color 0.3s',
                height: '100%', display: 'flex', flexDirection: 'column'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)'; }}>
                {blog.mainImage && (
                  <img src={blog.mainImage} alt={blog.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
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
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text)', marginBottom: '0.75rem', lineHeight: 1.3 }}>{blog.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--muted)', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '1.5rem' }}>
                    {blog.metaDescription}
                  </p>
                  <div style={{ marginTop: 'auto', fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent)' }}>Read Article →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
