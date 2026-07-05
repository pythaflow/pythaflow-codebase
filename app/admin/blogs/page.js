'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';
import StatusRadio from '@/components/admin/StatusRadio';
import TagInput from '@/components/admin/TagInput';
import FileUpload from '@/components/admin/FileUpload';

// Dynamically import React Quill to prevent SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

export default function BlogsAdmin() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcats, setSubcats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('list');
  const [editingId, setEditingId] = useState(null);
  
  const [formData, setFormData] = useState({
    title: '', slug: '', mainImage: '', categoryId: '', subcategoryId: '',
    metaTitle: '', metaDescription: '', keywords: '[]', status: true,
    contentBlocks: []
  });

  useEffect(() => { 
    fetchBlogs(); 
    fetchCategories();
    fetchSubcats();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/blogs');
      setBlogs(await res.json());
    } catch (err) { console.error(err); } 
    finally { setLoading(false); }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/blogs/categories');
      setCategories(await res.json());
    } catch (err) {}
  };

  const fetchSubcats = async () => {
    try {
      const res = await fetch('/api/blogs/subcategories');
      setSubcats(await res.json());
    } catch (err) {}
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const finalVal = type === 'checkbox' ? checked : value;

    setFormData(prev => {
      const newData = { ...prev, [name]: finalVal };
      // Auto-generate slug from title
      if (name === 'title' && !editingId) {
        newData.slug = finalVal.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      }
      return newData;
    });
  };

  const handleBlockChange = (index, field, value) => {
    const newBlocks = [...formData.contentBlocks];
    newBlocks[index][field] = value;
    setFormData(prev => ({ ...prev, contentBlocks: newBlocks }));
  };

  const addBlock = () => {
    setFormData(prev => ({
      ...prev,
      contentBlocks: [...prev.contentBlocks, { subTitle: '', images: '[]', layoutStyle: 'grid', content: '', sorting: prev.contentBlocks.length }]
    }));
  };

  const removeBlock = (index) => {
    const newBlocks = formData.contentBlocks.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, contentBlocks: newBlocks }));
  };

  const moveBlock = (index, direction) => {
    if ((direction === -1 && index === 0) || (direction === 1 && index === formData.contentBlocks.length - 1)) return;
    const newBlocks = [...formData.contentBlocks];
    const temp = newBlocks[index];
    newBlocks[index] = newBlocks[index + direction];
    newBlocks[index + direction] = temp;
    
    // Update sorting field correctly
    newBlocks.forEach((b, i) => b.sorting = i);
    setFormData(prev => ({ ...prev, contentBlocks: newBlocks }));
  };

  const handleBlockImageUpload = (index, url) => {
    const block = formData.contentBlocks[index];
    let imagesArr = [];
    try { imagesArr = JSON.parse(block.images || '[]'); } catch(e) {}
    imagesArr.push(url);
    handleBlockChange(index, 'images', JSON.stringify(imagesArr));
  };

  const removeBlockImage = (blockIndex, imageIndex) => {
    const block = formData.contentBlocks[blockIndex];
    let imagesArr = [];
    try { imagesArr = JSON.parse(block.images || '[]'); } catch(e) {}
    imagesArr.splice(imageIndex, 1);
    handleBlockChange(blockIndex, 'images', JSON.stringify(imagesArr));
  };

  const handleTagsChange = (newTags) => {
    setFormData(prev => ({ ...prev, keywords: newTags }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingId ? `/api/blogs/${editingId}` : '/api/blogs';
      const res = await fetch(url, {
        method: editingId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        toast.success('Blog post saved successfully!');
        resetForm();
        fetchBlogs();
      } else {
        toast.error('Failed to save blog post.');
      }
    } catch (err) { 
      console.error(err); 
      toast.error('An unexpected error occurred.');
    }
  };

  const handleEdit = (b) => {
    setFormData({
      title: b.title || '', slug: b.slug || '', mainImage: b.mainImage || '',
      categoryId: b.categoryId || '', subcategoryId: b.subcategoryId || '',
      metaTitle: b.metaTitle || '', metaDescription: b.metaDescription || '',
      keywords: b.keywords || '[]', status: b.status,
      contentBlocks: b.contentBlocks || []
    });
    setEditingId(b.id);
    setView('form');
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    try {
      const res = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Blog post deleted.');
        fetchBlogs();
      } else {
        toast.error('Failed to delete blog post.');
      }
    } catch (err) {
      toast.error('An unexpected error occurred.');
    }
  };

  const resetForm = () => {
    setFormData({ title: '', slug: '', mainImage: '', categoryId: '', subcategoryId: '', metaTitle: '', metaDescription: '', keywords: '[]', status: true, contentBlocks: [] });
    setEditingId(null);
    setView('list');
  };

  if (view === 'form') return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>{editingId ? 'Edit Blog Post' : 'New Blog Post'}</h2>
        <button onClick={resetForm} style={{ background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Back to List</button>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        
        {/* Left Side: Main Editor */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ background: 'var(--bg)', padding: '2rem', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3>Basic Info</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 2 }}>
                <label>Title *</label>
                <input required name="title" value={formData.title} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '4px' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label>Slug *</label>
                <input required name="slug" value={formData.slug} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '4px' }} />
              </div>
            </div>
            <div>
              <label>Main Image</label>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <FileUpload onUpload={(url) => setFormData(prev => ({...prev, mainImage: url}))} buttonText="Upload Main Image" />
                {formData.mainImage && <img src={formData.mainImage} alt="Main Blog Image" style={{ height: '60px', borderRadius: '4px' }} />}
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--bg)', padding: '2rem', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>Content Blocks</h3>
              <button type="button" onClick={addBlock} style={{ background: 'var(--accent)', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>+ Add Content Block</button>
            </div>
            
            {formData.contentBlocks.map((block, idx) => {
              let blockImages = [];
              try { blockImages = JSON.parse(block.images || '[]'); } catch(e) {}
              
              return (
                <div key={idx} style={{ background: 'var(--bg2)', padding: '1.5rem', borderRadius: '4px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4>Block {idx + 1}</h4>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button type="button" onClick={() => moveBlock(idx, -1)} disabled={idx === 0} style={{ padding: '0.25rem 0.5rem', cursor: 'pointer' }}>↑</button>
                      <button type="button" onClick={() => moveBlock(idx, 1)} disabled={idx === formData.contentBlocks.length - 1} style={{ padding: '0.25rem 0.5rem', cursor: 'pointer' }}>↓</button>
                      <button type="button" onClick={() => removeBlock(idx)} style={{ background: 'transparent', border: '1px solid rgba(255,50,50,0.3)', color: '#ff5555', cursor: 'pointer', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>Remove</button>
                    </div>
                  </div>
                  <div>
                    <label>Sub Title (Heading)</label>
                    <input value={block.subTitle || ''} onChange={(e) => handleBlockChange(idx, 'subTitle', e.target.value)} style={{ width: '100%', padding: '0.75rem', background: 'var(--bg)', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '4px' }} />
                  </div>
                  
                  <div>
                    <label>Text Content</label>
                    <div style={{ background: '#fff', color: '#000', borderRadius: '4px' }}>
                      <ReactQuill theme="snow" value={block.content || ''} onChange={(val) => handleBlockChange(idx, 'content', val)} />
                    </div>
                  </div>

                  <div style={{ borderTop: '1px dashed var(--border)', paddingTop: '1rem', marginTop: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <label>Block Images</label>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <label style={{ fontSize: '0.875rem' }}>Layout Style:</label>
                        <select value={block.layoutStyle || 'grid'} onChange={(e) => handleBlockChange(idx, 'layoutStyle', e.target.value)} style={{ padding: '0.25rem', background: 'var(--bg)', color: 'var(--text)', border: '1px solid var(--border)' }}>
                          <option value="grid">Grid (Default)</option>
                          <option value="stacked">Stacked</option>
                          <option value="carousel">Carousel / Slider</option>
                          <option value="side-by-side">Side by Side</option>
                        </select>
                      </div>
                    </div>
                    
                    <FileUpload onUpload={(url) => handleBlockImageUpload(idx, url)} buttonText="Add Image to Block" />
                    
                    {blockImages.length > 0 && (
                      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                        {blockImages.map((imgUrl, imgIdx) => (
                          <div key={imgIdx} style={{ position: 'relative' }}>
                            <img src={imgUrl} alt="Block" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px' }} />
                            <button type="button" onClick={() => removeBlockImage(idx, imgIdx)} style={{ position: 'absolute', top: -5, right: -5, background: 'red', color: 'white', border: 'none', borderRadius: '50%', width: '20px', height: '20px', cursor: 'pointer' }}>×</button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <button type="submit" style={{ background: 'var(--accent)', color: '#fff', border: 'none', padding: '1rem', borderRadius: '4px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}>Save Blog Post</button>
        </div>

        {/* Right Side: Metadata Panel */}
        <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '2rem', position: 'sticky', top: '2rem' }}>
          
          <div style={{ background: 'var(--bg)', padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3>Organization</h3>
            <div>
              <label>Category *</label>
              <select required name="categoryId" value={formData.categoryId} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '4px' }}>
                <option value="">Select Category</option>
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div>
              <label>Subcategory</label>
              <select name="subcategoryId" value={formData.subcategoryId} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '4px' }}>
                <option value="">None</option>
                {subcats.filter(s => s.categoryId === formData.categoryId).map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div>
              <label>Active Status</label>
              <StatusRadio name="status" value={formData.status} onChange={handleChange} />
            </div>
          </div>

          <div style={{ background: 'var(--bg)', padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3>SEO & Tags</h3>
            <div>
              <label>Meta Title</label>
              <input name="metaTitle" value={formData.metaTitle} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '4px' }} />
            </div>
            <div>
              <label>Meta Description</label>
              <textarea name="metaDescription" value={formData.metaDescription} onChange={handleChange} rows={3} style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '4px' }} />
            </div>
            <div>
              <label>Keywords</label>
              <TagInput tags={formData.keywords} onChange={handleTagsChange} placeholder="Add tag & Enter" />
            </div>
          </div>

          <div style={{ background: 'var(--bg)', padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '1rem' }}>Content Index</h3>
            {formData.contentBlocks.length === 0 ? (
              <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>No blocks added yet.</p>
            ) : (
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--muted)', fontSize: '0.9rem' }}>
                {formData.contentBlocks.map((b, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{b.subTitle || <em>Untitled Block {i+1}</em>}</li>
                ))}
              </ul>
            )}
          </div>

        </div>
      </form>
    </div>
  );

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Posts</h2>
        <button onClick={() => setView('form')} style={{ background: 'var(--accent)', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>+ Create Blog Post</button>
      </div>
      {loading ? <p>Loading...</p> : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {blogs.map(b => (
            <div key={b.id} style={{ display: 'flex', justifyContent: 'space-between', background: 'var(--bg)', padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                {b.mainImage && <img src={b.mainImage} alt={b.title} style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />}
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{b.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Category: {b.category?.name} | Blocks: {b.contentBlocks?.length || 0} | {b.status ? 'Active' : 'Inactive'}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <button onClick={() => handleEdit(b)} style={{ background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
                <button onClick={() => handleDelete(b.id)} style={{ background: 'rgba(255,50,50,0.1)', color: '#ff5555', border: '1px solid rgba(255,50,50,0.2)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
