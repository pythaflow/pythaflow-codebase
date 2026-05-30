'use client';
import { useState, useEffect } from 'react';

export default function SettingsAdmin() {
  const [activeTab, setActiveTab] = useState('general');

  // General Settings State (mapped to PageContent)
  const [settings, setSettings] = useState({
    site_name: '',
    logo_url: '',
    address: '',
    facebook: '',
    linkedin: '',
    github: ''
  });
  const [savingSettings, setSavingSettings] = useState(false);

  // Sliders State
  const [sliders, setSliders] = useState([]);
  const [loadingSliders, setLoadingSliders] = useState(true);
  const [sliderView, setSliderView] = useState('list'); // 'list' or 'form'
  const [editingSliderId, setEditingSliderId] = useState(null);
  const [sliderData, setSliderData] = useState({
    title: '',
    imageUrl: '',
    sorting: '0',
    status: true
  });
  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    fetchSettings();
    fetchSliders();
  }, []);

  // --- GENERAL SETTINGS LOGIC ---
  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/content');
      const data = await res.json();
      
      // Extract settings from PageContent
      setSettings({
        site_name: data['site_name']?.value || '',
        logo_url: data['logo_url']?.value || '',
        address: data['address']?.value || '',
        facebook: data['facebook']?.value || '',
        linkedin: data['linkedin']?.value || '',
        github: data['github']?.value || ''
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSettingsChange = (e) => {
    setSettings(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileUpload = async (e, fieldType) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingImage(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (res.ok) {
        if (fieldType === 'logo') {
          setSettings(prev => ({ ...prev, logo_url: data.url }));
        } else if (fieldType === 'slider') {
          setSliderData(prev => ({ ...prev, imageUrl: data.url }));
        }
      } else {
        alert('Upload failed: ' + data.error);
      }
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    } finally {
      setUploadingImage(false);
    }
  };

  const saveGeneralSettings = async (e) => {
    e.preventDefault();
    setSavingSettings(true);
    try {
      // Save each setting using the PageContent API
      const keys = Object.keys(settings);
      for (const key of keys) {
        await fetch('/api/content', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ section: 'settings', key, value: settings[key] })
        });
      }
      alert('Settings saved successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to save settings.');
    } finally {
      setSavingSettings(false);
    }
  };


  // --- SLIDER LOGIC ---
  const fetchSliders = async () => {
    setLoadingSliders(true);
    try {
      const res = await fetch('/api/sliders');
      const data = await res.json();
      setSliders(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingSliders(false);
    }
  };

  const handleSliderChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setSliderData(prev => ({ ...prev, [e.target.name]: value }));
  };

  const saveSlider = async (e) => {
    e.preventDefault();
    try {
      const url = editingSliderId ? `/api/sliders/${editingSliderId}` : '/api/sliders';
      const method = editingSliderId ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sliderData)
      });
      
      if (res.ok) {
        resetSliderForm();
        fetchSliders();
      } else {
        alert('Failed to save slider');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const editSlider = (s) => {
    setSliderData({
      title: s.title || '',
      imageUrl: s.imageUrl || '',
      sorting: s.sorting?.toString() || '0',
      status: s.status !== undefined ? s.status : true
    });
    setEditingSliderId(s.id);
    setSliderView('form');
  };

  const deleteSlider = async (id) => {
    if (!confirm('Delete this slider?')) return;
    try {
      const res = await fetch(`/api/sliders/${id}`, { method: 'DELETE' });
      if (res.ok) fetchSliders();
    } catch (err) {
      console.error(err);
    }
  };

  const resetSliderForm = () => {
    setSliderData({ title: '', imageUrl: '', sorting: '0', status: true });
    setEditingSliderId(null);
    setSliderView('list');
  };


  return (
    <div style={{ maxWidth: '800px' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '2rem' }}>
        Site Settings
      </h1>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
        <button onClick={() => setActiveTab('general')} style={{ 
          background: 'transparent', border: 'none', fontSize: '1.1rem', cursor: 'pointer',
          color: activeTab === 'general' ? 'var(--accent)' : 'var(--text)',
          fontWeight: activeTab === 'general' ? 'bold' : 'normal'
        }}>General Details & Socials</button>
        <button onClick={() => setActiveTab('sliders')} style={{ 
          background: 'transparent', border: 'none', fontSize: '1.1rem', cursor: 'pointer',
          color: activeTab === 'sliders' ? 'var(--accent)' : 'var(--text)',
          fontWeight: activeTab === 'sliders' ? 'bold' : 'normal'
        }}>Slider Management</button>
      </div>

      {/* GENERAL SETTINGS TAB */}
      {activeTab === 'general' && (
        <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '2rem' }}>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Update your existing site details below. These global settings are used throughout your website.</p>
          <form onSubmit={saveGeneralSettings} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Site Name</label>
                <input name="site_name" value={settings.site_name} onChange={handleSettingsChange} 
                  style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Logo Upload</label>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                  {settings.logo_url && (
                    <img src={settings.logo_url} alt="Logo Preview" style={{ width: '40px', height: '40px', objectFit: 'contain', background: 'var(--bg2)', borderRadius: '4px', border: '1px solid var(--border)' }} />
                  )}
                  <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg2)', padding: '0.5rem 1rem', borderRadius: '4px', border: '1px dashed var(--muted)', cursor: 'pointer', flex: 1, color: 'var(--text-muted)' }}>
                    <span style={{ fontSize: '0.875rem' }}>Click to Browse File</span>
                    <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'logo')} style={{ display: 'none' }} />
                  </label>
                </div>
                <input name="logo_url" value={settings.logo_url} onChange={handleSettingsChange} placeholder="Or enter logo URL"
                  style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
                {uploadingImage && <span style={{fontSize: '0.75rem', color: 'var(--accent)'}}>Uploading...</span>}
              </div>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Address</label>
              <textarea name="address" value={settings.address} onChange={handleSettingsChange} rows={3}
                style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
            </div>

            <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--accent)' }}>Social Profiles</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Facebook URL</label>
                <input name="facebook" value={settings.facebook} onChange={handleSettingsChange} 
                  style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>LinkedIn URL</label>
                <input name="linkedin" value={settings.linkedin} onChange={handleSettingsChange} 
                  style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>GitHub URL</label>
              <input name="github" value={settings.github} onChange={handleSettingsChange} 
                style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
            </div>
            
            <div style={{ marginTop: '1rem' }}>
              <button type="submit" disabled={savingSettings} style={{ background: 'var(--accent)', color: '#fff', border: 'none', padding: '0.75rem 2rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                {savingSettings ? 'Saving...' : 'Save Settings'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* SLIDERS TAB */}
      {activeTab === 'sliders' && (
        <>
          {sliderView === 'form' ? (
            <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.25rem', color: 'var(--accent)' }}>
                  {editingSliderId ? 'Edit Slider' : 'Add New Slider'}
                </h2>
                <button type="button" onClick={resetSliderForm} style={{ background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
                  &larr; Back to List
                </button>
              </div>

              <form onSubmit={saveSlider} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Title *</label>
                  <input required name="title" value={sliderData.title} onChange={handleSliderChange} 
                    style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Image Upload</label>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                    {sliderData.imageUrl && (
                      <img src={sliderData.imageUrl} alt="Slider Preview" style={{ width: '80px', height: '40px', objectFit: 'cover', background: 'var(--bg2)', borderRadius: '4px', border: '1px solid var(--border)' }} />
                    )}
                    <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg2)', padding: '0.5rem 1rem', borderRadius: '4px', border: '1px dashed var(--muted)', cursor: 'pointer', flex: 1, color: 'var(--text-muted)' }}>
                      <span style={{ fontSize: '0.875rem' }}>Click to Browse File</span>
                      <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'slider')} style={{ display: 'none' }} />
                    </label>
                  </div>
                  <input name="imageUrl" value={sliderData.imageUrl} onChange={handleSliderChange} placeholder="Or enter image URL"
                    style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
                  {uploadingImage && <span style={{fontSize: '0.75rem', color: 'var(--accent)'}}>Uploading...</span>}
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Sorting Order</label>
                    <input type="number" name="sorting" value={sliderData.sorting} onChange={handleSliderChange} 
                      style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
                    <input type="checkbox" name="status" checked={sliderData.status} onChange={handleSliderChange} id="statusCheck" />
                    <label htmlFor="statusCheck" style={{ fontSize: '0.875rem' }}>Active Status</label>
                  </div>
                </div>
                
                <div style={{ marginTop: '1rem' }}>
                  <button type="submit" style={{ background: 'var(--accent)', color: '#fff', border: 'none', padding: '0.75rem 2rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                    {editingSliderId ? 'Update Slider' : 'Save Slider'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.25rem' }}>Existing Sliders</h2>
                <button onClick={() => setSliderView('form')} style={{ background: 'var(--accent)', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                  + Add New Slider
                </button>
              </div>

              {loadingSliders ? (
                <p>Loading sliders...</p>
              ) : sliders.length === 0 ? (
                <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  No sliders found.
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {sliders.map(s => (
                    <div key={s.id} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.25rem' }}>
                          <h3 style={{ fontSize: '1.1rem' }}>{s.title}</h3>
                          <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '12px', background: s.status ? 'rgba(0,200,100,0.2)' : 'rgba(255,100,100,0.2)', color: s.status ? '#00c864' : '#ff6464' }}>
                            {s.status ? 'ACTIVE' : 'INACTIVE'}
                          </span>
                        </div>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Order: {s.sorting}</p>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button onClick={() => editSlider(s)} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
                        <button onClick={() => deleteSlider(s.id)} style={{ background: 'rgba(255,50,50,0.1)', border: '1px solid rgba(255,50,50,0.2)', color: '#ff5555', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
