'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (res.ok) {
      router.push('/admin');
    } else {
      setError('Invalid password');
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg2)' }}>
      <form onSubmit={handleLogin} style={{ background: 'var(--bg)', padding: '3rem', borderRadius: '8px', border: '1px solid var(--border)', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>Admin Login</h1>
        {error && <p style={{ color: 'var(--accent)', marginBottom: '1rem', fontSize: '0.9rem', textAlign: 'center' }}>{error}</p>}
        <input 
          type="email" 
          placeholder="Enter Admin Email" 
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: '100%', padding: '1rem', marginBottom: '1rem', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: '4px' }}
          required
        />
        <input 
          type="password" 
          placeholder="Enter Admin Password" 
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', padding: '1rem', marginBottom: '1.5rem', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: '4px' }}
          required
        />
        <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Login</button>
      </form>
    </div>
  );
}
