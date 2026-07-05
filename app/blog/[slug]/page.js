'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Head from 'next/head';

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    // We fetch all blogs and find the one with this slug because we don't have a direct slug API route
    fetch('/api/blogs').then(r => r.json()).then(data => {
      const found = data.find(b => b.slug === slug);
      setBlog(found);
      setLoading(false);
    });
  }, [slug]);

  if (loading) return <div style={{ paddingTop: '140px', textAlign: 'center' }}>Loading article...</div>;
  if (!blog) return <div style={{ paddingTop: '140px', textAlign: 'center' }}>Article not found.</div>;

  let keywords = [];
  try { keywords = JSON.parse(blog.keywords || '[]'); } catch(e) { keywords = (blog.keywords || '').split(','); }

  return (
    <>
      <Head>
        <title>{blog.metaTitle || blog.title}</title>
        <meta name="description" content={blog.metaDescription || ''} />
      </Head>
      <div style={{ paddingTop: '120px', paddingBottom: '7rem', maxWidth: '1200px', margin: '0 auto', paddingLeft: '2rem', paddingRight: '2rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem', color: 'var(--muted)', fontSize: '0.875rem' }}>
            <span style={{ color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{blog.category?.name}</span>
            <span>•</span>
            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
            {blog.title}
          </h1>
          {keywords.length > 0 && (
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {keywords.map(k => (
                <span key={k} style={{ background: 'var(--bg2)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', color: 'var(--muted)' }}>
                  #{k.trim()}
                </span>
              ))}
            </div>
          )}
        </div>

        {blog.mainImage && (
          <div style={{ width: '100%', height: '500px', marginBottom: '4rem', borderRadius: '12px', overflow: 'hidden' }}>
            <img src={blog.mainImage} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '4rem' }} className="blog-layout">
          
          {/* Main Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {blog.contentBlocks?.map((block, idx) => {
              let imgs = [];
              try { imgs = JSON.parse(block.images || '[]'); } catch(e) { imgs = (block.images || '').split(','); }
              return (
                <div key={block.id} id={`section-${idx}`} className="content-block">
                  {block.subTitle && <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text)' }}>{block.subTitle}</h2>}
                  
                  {block.content && (
                    <div className="rich-text" dangerouslySetInnerHTML={{ __html: block.content }} style={{ lineHeight: 1.8, color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '2rem' }} />
                  )}

                  {imgs.length > 0 && (
                    <div style={{ marginTop: '2rem' }}>
                      {(!block.layoutStyle || block.layoutStyle === 'grid') && (
                        <div style={{ display: 'grid', gridTemplateColumns: imgs.length > 1 ? '1fr 1fr' : '1fr', gap: '1rem' }}>
                          {imgs.map((img, i) => <img key={i} src={img} alt="content" style={{ width: '100%', borderRadius: '8px' }} />)}
                        </div>
                      )}
                      
                      {block.layoutStyle === 'stacked' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                          {imgs.map((img, i) => <img key={i} src={img} alt="content" style={{ width: '100%', borderRadius: '8px' }} />)}
                        </div>
                      )}

                      {block.layoutStyle === 'side-by-side' && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                          {imgs.map((img, i) => <img key={i} src={img} alt="content" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />)}
                        </div>
                      )}

                      {block.layoutStyle === 'carousel' && (
                        <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem', scrollSnapType: 'x mandatory' }}>
                          {imgs.map((img, i) => (
                            <img key={i} src={img} alt="content" style={{ height: '300px', width: 'auto', flexShrink: 0, borderRadius: '8px', scrollSnapAlign: 'start' }} />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sticky Sidebar Index */}
          <div>
            <div style={{ position: 'sticky', top: '120px', padding: '2rem', background: 'var(--bg2)', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Table of Contents</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {blog.contentBlocks?.map((block, idx) => {
                  if (!block.subTitle) return null;
                  return (
                    <li key={idx}>
                      <a href={`#section-${idx}`} style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                         onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                         onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
                        {block.subTitle}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <style>{`
          .rich-text h3 { color: var(--text); margin-top: 2rem; margin-bottom: 1rem; }
          .rich-text p { margin-bottom: 1.5rem; }
          .rich-text a { color: var(--accent); text-decoration: underline; }
          .rich-text ul { padding-left: 1.5rem; margin-bottom: 1.5rem; }
          .rich-text li { margin-bottom: 0.5rem; }
          
          @media (max-width: 900px) {
            .blog-layout { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </>
  );
}
