'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProjectDetailsPage({ params }) {
  const { id } = params;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/projects/${id}`)
      .then(r => r.json())
      .then(data => {
        setProject(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div style={{ paddingTop: 140, paddingBottom: '7rem', textAlign: 'center', minHeight: '80vh' }}>
        <p style={{ color: 'var(--muted)' }}>Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div style={{ paddingTop: 140, paddingBottom: '7rem', textAlign: 'center', minHeight: '80vh' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--text)', marginBottom: '1rem' }}>Project Not Found</h1>
        <Link href="/work" className="btn-secondary">Back to Work</Link>
      </div>
    );
  }

  const tagsList = project.tags ? project.tags.split(',').map(t => t.trim()) : [];

  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: '5rem', paddingLeft: '3rem', paddingRight: '3rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Link href="/work" style={{ color: 'var(--muted)', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: '2.5rem', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
            ← Back to Work
          </Link>

          <div className="section-tag" style={{ animation: 'fadeUp .7s .2s both' }}>
            {project.service?.name || 'Project Study'}
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem,8vw,7rem)',
            lineHeight: 0.9, letterSpacing: '0.02em',
            animation: 'fadeUp .8s .4s both',
            color: 'var(--text)', marginBottom: '1.5rem'
          }}>
            {project.title}
          </h1>
          <p style={{
            fontSize: '1.15rem', color: 'var(--muted)', lineHeight: 1.7,
            maxWidth: 600, animation: 'fadeUp .8s .6s both',
          }}>
            {project.shortDescription}
          </p>
        </div>
      </section>

      {/* Hero Image */}
      {project.imageUrl && (
        <section style={{ padding: '3rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', overflow: 'hidden', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <img src={project.imageUrl} alt={project.title} style={{ width: '100%', display: 'block', maxHeight: '80vh', objectFit: 'cover' }} />
          </div>
        </section>
      )}

      {/* Project Details */}
      <section style={{ padding: '6rem 3rem', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '4rem' }} className="details-grid">
          
          {/* Main Description */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '2rem' }}>The Challenge & Outcome</h2>
            <div 
              style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8 }}
              className="prose"
              dangerouslySetInnerHTML={{ __html: project.description }} 
            />
          </div>

          {/* Sidebar Info */}
          <div>
            <div style={{ border: '1px solid var(--border)', padding: '2rem', background: 'var(--bg)', borderRadius: '8px' }}>
              
              {tagsList.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Expertise</div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {tagsList.map(t => (
                      <span key={t} style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)',
                        border: '1px solid var(--border)', padding: '4px 10px', borderRadius: 4, letterSpacing: '0.05em',
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              )}

              {project.liveLink && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Live Project</div>
                  <a href={project.liveLink} target="_blank" rel="noreferrer" style={{ color: 'var(--text)', textDecoration: 'underline' }}>Visit Site ↗</a>
                </div>
              )}

              {project.githubLink && (
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Source Code</div>
                  <a href={project.githubLink} target="_blank" rel="noreferrer" style={{ color: 'var(--text)', textDecoration: 'underline' }}>View Repository ↗</a>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
      
      <style>{`
        .details-grid { grid-template-columns: 1fr 300px !important; }
        .prose h2, .prose h3 { color: var(--text); margin-top: 2rem; margin-bottom: 1rem; }
        .prose p { margin-bottom: 1.5rem; }
        @media(max-width: 900px) {
          .details-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
