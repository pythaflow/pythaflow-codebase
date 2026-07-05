'use client';
import { useState } from 'react';

export default function TagInput({ tags, onChange, placeholder = "Type and press enter" }) {
  const [inputValue, setInputValue] = useState('');
  
  // Ensure tags is an array. If it's a JSON string or comma separated, try to parse it.
  let parsedTags = [];
  if (Array.isArray(tags)) {
    parsedTags = tags;
  } else if (typeof tags === 'string' && tags.trim() !== '') {
    try {
      // try parsing as JSON array
      parsedTags = JSON.parse(tags);
      if (!Array.isArray(parsedTags)) throw new Error('Not array');
    } catch (e) {
      // fallback to comma-separated
      parsedTags = tags.split(',').map(t => t.trim()).filter(Boolean);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const val = inputValue.trim();
      if (val && !parsedTags.includes(val)) {
        const newTags = [...parsedTags, val];
        onChange(JSON.stringify(newTags));
        setInputValue('');
      }
    }
  };

  const removeTag = (tagToRemove) => {
    const newTags = parsedTags.filter(t => t !== tagToRemove);
    onChange(JSON.stringify(newTags));
  };

  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
      padding: '0.5rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px'
    }}>
      {parsedTags.map((tag, idx) => (
        <div key={idx} style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          background: 'var(--accent)', color: '#000', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.875rem',
          fontWeight: '500'
        }}>
          {tag}
          <button type="button" onClick={() => removeTag(tag)} style={{
            background: 'none', border: 'none', color: '#000', cursor: 'pointer', fontSize: '1rem', lineHeight: 1
          }}>
            &times;
          </button>
        </div>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        style={{
          flex: 1, minWidth: '150px', background: 'transparent', border: 'none', outline: 'none',
          color: 'var(--text)', fontSize: '0.875rem'
        }}
      />
    </div>
  );
}
