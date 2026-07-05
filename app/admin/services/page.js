'use client';
import { useState, useEffect } from 'react';
import StatusRadio from '@/components/admin/StatusRadio';
import TagInput from '@/components/admin/TagInput';

export default function ServicesAdmin() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // View State
  const [view, setView] = useState('list');

  // Form State
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    sorting: '0',
    description: '',
    tags: '',
    tasks: '',
    status: true
  });

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/services');
      const data = await res.json();
      setServices(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData(prev => ({ ...prev, [e.target.name]: value }));
  };

  const handleTagsChange = (newTags) => {
    setFormData(prev => ({ ...prev, tags: newTags }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingId ? `/api/services/${editingId}` : '/api/services';
      const method = editingId ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        resetForm();
        fetchServices();
      } else {
        alert('Failed to save service');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (service) => {
    setFormData({
      name: service.name || '',
      sorting: service.sorting?.toString() || '0',
      description: service.description || '',
      tags: service.tags || '',
      tasks: service.tasks || '',
      status: service.status !== undefined ? service.status : true
    });
    setEditingId(service.id);
    setView('form');
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this service? All related projects may lose their service link.')) return;
    
    try {
      const res = await fetch(`/api/services/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchServices();
      } else {
        alert('Failed to delete');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', sorting: '0', description: '', tags: '', tasks: '', status: true });
    setEditingId(null);
    setView('list');
  };

  if (view === 'form') {
    return (
      <div style={{ width: '100%', maxWidth: '1000px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem' }}>
            {editingId ? 'Edit Service' : 'Add New Service'}
          </h1>
          <button onClick={resetForm} style={{ background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
            &larr; Back to List
          </button>
        </div>

        <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '2rem' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ flex: 2 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Service Name *</label>
                <input required name="name" value={formData.name} onChange={handleChange} 
                  style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Sorting Order</label>
                <input type="number" name="sorting" value={formData.sorting} onChange={handleChange} 
                  style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem' }}>Active Status</label>
                <StatusRadio name="status" value={formData.status} onChange={handleChange} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Description *</label>
              <textarea required name="description" value={formData.description} onChange={handleChange} rows={3}
                style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Tags (Keywords)</label>
              <TagInput tags={formData.tags} onChange={handleTagsChange} placeholder="Enter tag and press enter" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Tasks / What you get (comma separated)</label>
              <textarea name="tasks" value={formData.tasks} onChange={handleChange} rows={3} placeholder="e.g. SEO Strategy, Google Ads, Competitor Analysis"
                style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button type="submit" style={{ background: 'var(--accent)', color: '#fff', border: 'none', padding: '0.75rem 2rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                {editingId ? 'Update Service' : 'Save Service'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', maxWidth: '1000px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem' }}>
          Manage Services
        </h1>
        <button onClick={() => setView('form')} style={{ background: 'var(--accent)', color: '#fff', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          + Add New Service
        </button>
      </div>

      <div>
        {loading ? (
          <p>Loading services...</p>
        ) : services.length === 0 ? (
          <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            No services found. Click "Add New Service" to create one.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {services.map(s => (
              <div key={s.id} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem' }}>{s.name}</h3>
                    <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '12px', background: s.status ? 'rgba(0,200,100,0.2)' : 'rgba(255,100,100,0.2)', color: s.status ? '#00c864' : '#ff6464' }}>
                      {s.status ? 'ACTIVE' : 'INACTIVE'}
                    </span>
                    <span style={{fontSize: '0.8rem', color: 'var(--text-muted)'}}>Order: {s.sorting}</span>
                  </div>
                  
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem', maxWidth: '500px' }}>{s.description}</p>
                  {s.tags && <p style={{ fontSize: '0.75rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>Tags: {s.tags}</p>}
                </div>
                
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => handleEdit(s)} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(s.id)} style={{ background: 'rgba(255,50,50,0.1)', border: '1px solid rgba(255,50,50,0.2)', color: '#ff5555', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
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
