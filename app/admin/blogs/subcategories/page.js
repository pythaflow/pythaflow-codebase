'use client';
import { useState, useEffect } from 'react';
import StatusRadio from '@/components/admin/StatusRadio';

export default function BlogSubCategoriesAdmin() {
  const [subcats, setSubcats] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('list');
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: '', slug: '', categoryId: '', status: true });

  useEffect(() => { 
    fetchSubcats(); 
    fetchCategories();
  }, []);

  const fetchSubcats = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/blogs/subcategories');
      setSubcats(await res.json());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/blogs/categories');
      setCategories(await res.json());
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
      const url = editingId ? `/api/blogs/subcategories/${editingId}` : '/api/blogs/subcategories';
      const res = await fetch(url, {
        method: editingId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        resetForm();
        fetchSubcats();
      } else alert('Failed to save');
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (c) => {
    setFormData({ name: c.name, slug: c.slug, categoryId: c.categoryId, status: c.status });
    setEditingId(c.id);
    setView('form');
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure?')) return;
    try {
      const res = await fetch(`/api/blogs/subcategories/${id}`, { method: 'DELETE' });
      if (res.ok) fetchSubcats();
      else alert('Failed to delete');
    } catch (err) {
      console.error(err);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', slug: '', categoryId: '', status: true });
    setEditingId(null);
    setView('list');
  };

  if (view === 'form') return (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>{editingId ? 'Edit Subcategory' : 'New Subcategory'}</h2>
        <button onClick={resetForm} style={{ background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Back to List</button>
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--bg)', padding: '2rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
        <div>
          <label>Parent Category *</label>
          <select required name="categoryId" value={formData.categoryId} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '4px' }}>
            <option value="">Select Category</option>
            {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label>Name</label>
          <input required name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '4px' }} />
        </div>
        <div>
          <label>Slug</label>
          <input required name="slug" value={formData.slug} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '4px' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label>Status</label>
          <StatusRadio name="status" value={formData.status} onChange={handleChange} />
        </div>
        <button type="submit" style={{ background: 'var(--accent)', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '4px', fontWeight: 'bold' }}>Save</button>
      </form>
    </div>
  );

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Subcategories</h2>
        <button onClick={() => setView('form')} style={{ background: 'var(--accent)', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>+ Add Subcategory</button>
      </div>
      {loading ? <p>Loading...</p> : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {subcats.map(c => (
            <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', background: 'var(--bg)', padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{c.name}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Category: {c.category?.name} | Slug: {c.slug} | {c.status ? 'Active' : 'Inactive'}</p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={() => handleEdit(c)} style={{ background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', padding: '0.5rem 1rem', borderRadius: '4px' }}>Edit</button>
                <button onClick={() => handleDelete(c.id)} style={{ background: 'rgba(255,50,50,0.1)', color: '#ff5555', border: '1px solid rgba(255,50,50,0.2)', padding: '0.5rem 1rem', borderRadius: '4px' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
