'use client';
import { useState, useEffect } from 'react';

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // View State (list or form)
  const [view, setView] = useState('list');
  
  // Form State
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    description: '',
    imageUrl: '',
    tags: '',
    liveLink: '',
    githubLink: '',
    sorting: '0',
    serviceId: '',
    status: true
  });

  useEffect(() => {
    fetchProjects();
    fetchServices();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/services');
      const data = await res.json();
      setServices(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData(prev => ({ ...prev, [e.target.name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingId ? `/api/projects/${editingId}` : '/api/projects';
      const method = editingId ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        resetForm();
        fetchProjects();
      } else {
        alert('Failed to save project');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (project) => {
    setFormData({
      title: project.title || '',
      shortDescription: project.shortDescription || '',
      description: project.description || '',
      imageUrl: project.imageUrl || '',
      tags: project.tags || '',
      liveLink: project.liveLink || '',
      githubLink: project.githubLink || '',
      sorting: project.sorting?.toString() || '0',
      serviceId: project.serviceId || '',
      status: project.status !== undefined ? project.status : true
    });
    setEditingId(project.id);
    setView('form');
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    
    try {
      const res = await fetch(`/api/projects/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchProjects();
      } else {
        alert('Failed to delete');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const resetForm = () => {
    setFormData({ title: '', shortDescription: '', description: '', imageUrl: '', tags: '', liveLink: '', githubLink: '', sorting: '0', serviceId: '', status: true });
    setEditingId(null);
    setView('list');
  };

  if (view === 'form') {
    return (
      <div style={{ maxWidth: '800px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem' }}>
            {editingId ? 'Edit Project' : 'Add New Project'}
          </h1>
          <button onClick={resetForm} style={{ background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
            &larr; Back to List
          </button>
        </div>

        <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '2rem' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Related Service</label>
                <select name="serviceId" value={formData.serviceId} onChange={handleChange}
                  style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }}>
                  <option value="">-- No Service --</option>
                  {services.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Sorting Order</label>
                <input type="number" name="sorting" value={formData.sorting} onChange={handleChange} 
                  style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
                <input type="checkbox" name="status" checked={formData.status} onChange={handleChange} id="projectStatus" />
                <label htmlFor="projectStatus" style={{ fontSize: '0.875rem' }}>Active Status</label>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Title *</label>
              <input required name="title" value={formData.title} onChange={handleChange} 
                style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Short Description</label>
              <textarea name="shortDescription" value={formData.shortDescription} onChange={handleChange} rows={2}
                style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Full Description *</label>
              <textarea required name="description" value={formData.description} onChange={handleChange} rows={4}
                style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Image URL</label>
              <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} 
                style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Tags (comma separated)</label>
              <input name="tags" value={formData.tags} onChange={handleChange} 
                style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Live Link</label>
                <input name="liveLink" value={formData.liveLink} onChange={handleChange} 
                  style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>GitHub Link</label>
                <input name="githubLink" value={formData.githubLink} onChange={handleChange} 
                  style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button type="submit" style={{ background: 'var(--accent)', color: '#fff', border: 'none', padding: '0.75rem 2rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                {editingId ? 'Update Project' : 'Save Project'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem' }}>
          Manage Projects
        </h1>
        <button onClick={() => setView('form')} style={{ background: 'var(--accent)', color: '#fff', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          + Add New Project
        </button>
      </div>

      <div>
        {loading ? (
          <p>Loading projects...</p>
        ) : projects.length === 0 ? (
          <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            No projects found. Click "Add New Project" to create one.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {projects.map(p => (
              <div key={p.id} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem' }}>{p.title}</h3>
                    <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '12px', background: p.status ? 'rgba(0,200,100,0.2)' : 'rgba(255,100,100,0.2)', color: p.status ? '#00c864' : '#ff6464' }}>
                      {p.status ? 'ACTIVE' : 'INACTIVE'}
                    </span>
                    <span style={{fontSize:'0.8rem', color: 'var(--text-muted)'}}>Order: {p.sorting}</span>
                  </div>
                  
                  {p.serviceId && <p style={{ fontSize: '0.75rem', background: 'var(--bg2)', display: 'inline-block', padding: '2px 8px', borderRadius: '4px', marginBottom: '0.5rem' }}>Linked to Service</p>}
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', maxWidth: '500px' }}>{p.shortDescription || p.description}</p>
                  
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem' }}>
                    {p.liveLink && <a href={p.liveLink} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>Live Demo</a>}
                    {p.githubLink && <a href={p.githubLink} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>GitHub</a>}
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => handleEdit(p)} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(p.id)} style={{ background: 'rgba(255,50,50,0.1)', border: '1px solid rgba(255,50,50,0.2)', color: '#ff5555', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
