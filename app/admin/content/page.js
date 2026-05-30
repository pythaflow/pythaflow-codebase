'use client';
import { useState, useEffect } from 'react';

export default function ContentAdmin() {
  const [contentMap, setContentMap] = useState({});
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [formData, setFormData] = useState({
    section: '',
    key: '',
    value: ''
  });

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/content');
      const data = await res.json();
      setContentMap(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setFormData({ section: '', key: '', value: '' });
        fetchContent();
      } else {
        alert('Failed to save content');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (key, data) => {
    setFormData({
      section: data.section,
      key: key,
      value: data.value
    });
    window.scrollTo(0, 0);
  };

  // Group content by section
  const sections = Object.entries(contentMap).reduce((acc, [key, data]) => {
    if (!acc[data.section]) acc[data.section] = [];
    acc[data.section].push({ key, ...data });
    return acc;
  }, {});

  return (
    <div style={{ maxWidth: '800px' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '2rem' }}>
        Manage Page Content
      </h1>

      <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '2rem', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>
          Add / Edit Content Block
        </h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Section (e.g., hero, about) *</label>
              <input required name="section" value={formData.section} onChange={handleChange} 
                style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Key (e.g., hero_title) *</label>
              <input required name="key" value={formData.key} onChange={handleChange} 
                style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
            </div>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Value / Text Content *</label>
            <textarea required name="value" value={formData.value} onChange={handleChange} rows={5}
              style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
          </div>
          
          <div style={{ marginTop: '1rem' }}>
            <button type="submit" style={{ background: 'var(--accent)', color: '#fff', border: 'none', padding: '0.75rem 2rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
              Save Content
            </button>
          </div>
        </form>
      </div>

      <div>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Existing Content</h2>
        {loading ? (
          <p>Loading content...</p>
        ) : Object.keys(sections).length === 0 ? (
          <p style={{ color: 'var(--text-muted)' }}>No content found. Add one above.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {Object.entries(sections).map(([sectionName, items]) => (
              <div key={sectionName}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>
                  {sectionName}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {items.map(item => (
                    <div key={item.key} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1, marginRight: '1rem' }}>
                        <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', fontFamily: 'monospace', color: 'var(--accent)' }}>{item.key}</h4>
                        <p style={{ fontSize: '0.875rem', whiteSpace: 'pre-wrap' }}>{item.value}</p>
                      </div>
                      <button onClick={() => handleEdit(item.key, item)} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
                        Edit
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
