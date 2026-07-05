'use client';
import { useState, useRef } from 'react';

export default function FileUpload({ onUpload, accept = 'image/*', buttonText = 'Upload Image' }) {
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        onUpload(data.url);
      } else {
        alert('Upload failed');
      }
    } catch (err) {
      console.error(err);
      alert('Error uploading file');
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div>
      <input 
        type="file" 
        accept={accept} 
        onChange={handleFileChange} 
        ref={fileInputRef} 
        style={{ display: 'none' }} 
      />
      <button 
        type="button" 
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading}
        style={{
          background: 'var(--bg2)',
          color: 'var(--text)',
          border: '1px solid var(--border)',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: uploading ? 'not-allowed' : 'pointer'
        }}
      >
        {uploading ? 'Uploading...' : buttonText}
      </button>
    </div>
  );
}
