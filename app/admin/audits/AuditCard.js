'use client';
import { useState } from 'react';

export default function AuditCard({ audit, reportData }) {
  const [expanded, setExpanded] = useState(false);

  const totalScore = reportData?.scores 
    ? Math.round((Object.values(reportData.scores).reduce((a,b)=>a+b,0) / 30) * 100)
    : 0;

  return (
    <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '1.5rem', borderRadius: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{audit.website}</h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{audit.name || 'Anonymous User'} - {audit.email || 'Not provided'}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--muted)', display: 'block' }}>{new Date(audit.createdAt).toLocaleString()}</span>
          <span style={{ display: 'inline-block', marginTop: '0.5rem', padding: '0.25rem 0.5rem', background: 'var(--accent)', color: '#fff', fontSize: '0.75rem', borderRadius: '4px' }}>
            {audit.status}
          </span>
        </div>
      </div>
      
      {reportData ? (
        <>
          <div style={{ background: 'var(--bg2)', padding: '1rem', borderRadius: '4px', fontSize: '0.9rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <p><strong>AI Overall Score:</strong> <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>{totalScore}%</span></p>
              <button 
                onClick={() => setExpanded(!expanded)} 
                style={{ background: 'transparent', border: '1px solid var(--border)', padding: '0.25rem 0.75rem', borderRadius: '4px', color: 'var(--text)', cursor: 'pointer', fontSize: '0.8rem' }}
              >
                {expanded ? 'Hide Details' : 'View Full Report Details'}
              </button>
            </div>
            <p style={{ marginBottom: 4 }}><strong>Top Strength:</strong> {reportData.topWin}</p>
            <p><strong>Top Red Flag:</strong> {reportData.topRedFlag}</p>
          </div>

          {expanded && (
            <div style={{ background: 'var(--bg2)', padding: '1.5rem', borderRadius: '4px', marginTop: '1rem', border: '1px solid var(--border)' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>Detailed Breakdown</h4>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ marginBottom: '0.5rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>"{reportData.intro}"</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {Object.entries(reportData.notes || {}).map(([key, note]) => (
                  <div key={key} style={{ background: 'var(--bg)', padding: '1rem', borderRadius: '4px', border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <strong style={{ textTransform: 'capitalize' }}>{key}</strong>
                      <span style={{ 
                        background: 'var(--bg2)', padding: '0.1rem 0.5rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold',
                        color: reportData.scores[key] >= 4 ? '#4CAF50' : reportData.scores[key] <= 2 ? '#FF5252' : '#FFC107'
                      }}>
                        {reportData.scores[key]}/5
                      </span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <div style={{ background: 'var(--bg2)', padding: '1rem', borderRadius: '4px', fontSize: '0.9rem', color: 'var(--accent)' }}>
          Audit report could not be parsed.
        </div>
      )}
    </div>
  );
}
