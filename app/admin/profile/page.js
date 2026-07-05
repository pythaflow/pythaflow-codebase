'use client';
import { useState } from 'react';

export default function ProfileAdmin() {
  const [step, setStep] = useState(1); // 1: Request, 2: Verify Code
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    code: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const requestPasswordChange = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (formData.newPassword !== formData.confirmPassword) {
      return setError('New passwords do not match');
    }
    if (formData.newPassword.length < 6) {
      return setError('New password must be at least 6 characters');
    }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'request',
          currentPassword: formData.currentPassword
        })
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || 'Verification code sent to your email.');
        setStep(2);
      } else {
        setError(data.error || 'Failed to request change');
      }
    } catch (err) {
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const verifyPasswordChange = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'verify',
          newPassword: formData.newPassword,
          code: formData.code
        })
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || 'Password updated successfully!');
        setStep(1);
        setFormData({ currentPassword: '', newPassword: '', confirmPassword: '', code: '' });
      } else {
        setError(data.error || 'Failed to verify code');
      }
    } catch (err) {
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '2rem' }}>
        Admin Profile
      </h1>

      <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>Change Password</h2>
        
        {message && <div style={{ padding: '1rem', background: 'rgba(0,200,100,0.1)', color: '#00c864', marginBottom: '1rem', borderRadius: '4px' }}>{message}</div>}
        {error && <div style={{ padding: '1rem', background: 'rgba(255,50,50,0.1)', color: '#ff5555', marginBottom: '1rem', borderRadius: '4px' }}>{error}</div>}

        {step === 1 ? (
          <form onSubmit={requestPasswordChange} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Current Password *</label>
              <input type="password" required name="currentPassword" value={formData.currentPassword} onChange={handleChange} 
                style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>New Password *</label>
              <input type="password" required name="newPassword" value={formData.newPassword} onChange={handleChange} 
                style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Confirm New Password *</label>
              <input type="password" required name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} 
                style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
            </div>
            
            <div style={{ marginTop: '1rem' }}>
              <button type="submit" disabled={loading} style={{ background: 'var(--accent)', color: '#fff', border: 'none', padding: '0.75rem 2rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                {loading ? 'Processing...' : 'Change Password'}
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={verifyPasswordChange} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>A 6-digit verification code has been sent to your email. Please enter it below to confirm the password change.</p>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>6-Digit Code *</label>
              <input type="text" required name="code" value={formData.code} onChange={handleChange} placeholder="123456"
                style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)' }} />
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button type="submit" disabled={loading} style={{ background: 'var(--accent)', color: '#fff', border: 'none', padding: '0.75rem 2rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                {loading ? 'Verifying...' : 'Verify & Update'}
              </button>
              <button type="button" onClick={() => setStep(1)} style={{ background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)', padding: '0.75rem 2rem', borderRadius: '4px', cursor: 'pointer' }}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
