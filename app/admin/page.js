import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function AdminDashboard() {
  // Fetch overview stats
  const [
    totalProjects,
    totalAudits,
    totalInquiries,
    recentProjects,
    recentAudits,
    recentInquiries
  ] = await Promise.all([
    prisma.project.count(),
    prisma.auditRequest.count(),
    prisma.contactInquiry.count(),
    prisma.project.findMany({ orderBy: { createdAt: 'desc' }, take: 5 }),
    prisma.auditRequest.findMany({ orderBy: { createdAt: 'desc' }, take: 5 }),
    prisma.contactInquiry.findMany({ orderBy: { createdAt: 'desc' }, take: 5 })
  ]);

  return (
    <div style={{ maxWidth: '1000px' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '2rem' }}>
        Dashboard Overview
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Total Projects</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>{totalProjects}</p>
        </div>
        <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Total Audits</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>{totalAudits}</p>
        </div>
        <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Total Inquiries</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>{totalInquiries}</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        
        {/* Recent Inquiries */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.25rem' }}>Recent Inquiries</h2>
            <Link href="/admin/inquiries" style={{ fontSize: '0.875rem', color: 'var(--accent)' }}>View All</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {recentInquiries.length === 0 ? <p style={{ color: 'var(--text-muted)' }}>No inquiries yet.</p> : recentInquiries.map(inquiry => (
              <div key={inquiry.id} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1rem' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{inquiry.name}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{inquiry.email}</p>
                <Link href={`/admin/inquiries`} style={{ fontSize: '0.875rem', color: 'var(--accent)' }}>Go to Inquiries to Reply</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Audits */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.25rem' }}>Recent Audits</h2>
            <Link href="/admin/audits" style={{ fontSize: '0.875rem', color: 'var(--accent)' }}>View All</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {recentAudits.length === 0 ? <p style={{ color: 'var(--text-muted)' }}>No audits yet.</p> : recentAudits.map(audit => (
              <div key={audit.id} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1rem' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{audit.website}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{new Date(audit.createdAt).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
