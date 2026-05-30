'use client';
import { useState } from 'react';

export default function InquiryCard({ inquiry }) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyMessage, setReplyMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(inquiry.status);

  const handleReply = async () => {
    if (!replyMessage.trim()) return;
    setSending(true);
    try {
      const res = await fetch(`/api/inquiries/${inquiry.id}/reply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ replyMessage })
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('REPLIED');
        setIsReplying(false);
        setReplyMessage('');
        alert('Reply sent successfully!');
      } else {
        alert('Error: ' + data.error);
      }
    } catch (err) {
      alert('Failed to send reply.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '1.5rem', borderRadius: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>
            {inquiry.name} <span style={{ color: 'var(--muted)', fontWeight: 400 }}>({inquiry.email})</span>
          </h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{inquiry.company || 'No Company'}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--muted)', display: 'block' }}>{new Date(inquiry.createdAt).toLocaleString()}</span>
          <span style={{ 
            fontSize: '0.75rem', 
            fontWeight: 'bold', 
            padding: '0.25rem 0.5rem', 
            borderRadius: '4px',
            background: status === 'REPLIED' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 152, 0, 0.1)',
            color: status === 'REPLIED' ? '#4CAF50' : '#FF9800',
            marginTop: '0.5rem',
            display: 'inline-block'
          }}>
            {status}
          </span>
        </div>
      </div>
      
      <div style={{ background: 'var(--bg2)', padding: '1rem', borderRadius: '4px', whiteSpace: 'pre-wrap', fontSize: '0.95rem', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>
        {inquiry.message}
      </div>

      {!isReplying && status !== 'REPLIED' && (
        <div>
          <button onClick={() => setIsReplying(true)} style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--accent)', color: '#fff', borderRadius: '4px', fontSize: '0.875rem', border: 'none' }}>
            Write Reply
          </button>
        </div>
      )}

      {isReplying && (
        <div style={{ marginTop: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Your Reply Message (Supports links, drive links, etc.)</label>
          <textarea 
            value={replyMessage}
            onChange={(e) => setReplyMessage(e.target.value)}
            rows={5}
            placeholder="Type your response here... Include any Google Drive or image links directly in the text."
            style={{ width: '100%', padding: '0.75rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text)', marginBottom: '1rem' }}
          />
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={handleReply} disabled={sending} style={{ padding: '0.5rem 1rem', background: 'var(--accent)', color: '#fff', borderRadius: '4px', fontSize: '0.875rem', border: 'none' }}>
              {sending ? 'Sending...' : 'Send Reply'}
            </button>
            <button onClick={() => setIsReplying(false)} disabled={sending} style={{ padding: '0.5rem 1rem', background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '0.875rem' }}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
