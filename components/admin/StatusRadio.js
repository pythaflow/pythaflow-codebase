'use client';

export default function StatusRadio({ name, value, onChange }) {
  // We expect value to be a boolean (true = active, false = inactive)
  const isTrue = value === true || value === 'true';

  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
        <input 
          type="radio" 
          name={name} 
          checked={isTrue} 
          onChange={() => onChange({ target: { name, type: 'radio', value: true } })} 
          style={{ cursor: 'pointer' }}
        />
        <span>Active</span>
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
        <input 
          type="radio" 
          name={name} 
          checked={!isTrue} 
          onChange={() => onChange({ target: { name, type: 'radio', value: false } })} 
          style={{ cursor: 'pointer' }}
        />
        <span>Inactive</span>
      </label>
    </div>
  );
}
