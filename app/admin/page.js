import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function AdminDashboard() {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // Fetch overview stats
  const [
    totalProjects,
    totalAudits,
    totalInquiries,
    totalVisits,
    uniqueVisitors,
    visitsToday,
    recentProjects,
    recentAudits,
    recentInquiries
  ] = await Promise.all([
    prisma.project.count(),
    prisma.auditRequest.count(),
    prisma.contactInquiry.count(),
    prisma.siteVisit.count(),
    prisma.siteVisit.findMany({
      select: { ipHash: true },
      distinct: ['ipHash']
    }).then(res => res.length),
    prisma.siteVisit.count({
      where: {
        createdAt: {
          gte: startOfToday
        }
      }
    }),
    prisma.project.findMany({ orderBy: { createdAt: 'desc' }, take: 5 }),
    prisma.auditRequest.findMany({ orderBy: { createdAt: 'desc' }, take: 5 }),
    prisma.contactInquiry.findMany({ orderBy: { createdAt: 'desc' }, take: 5 })
  ]);

  return (
    <div style={{ width: '100%' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '2rem' }}>
        Dashboard Overview
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
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
        
        {/* Site Visits Metrics */}
        <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Visits Today</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981' }}>{visitsToday}</p>
        </div>
        <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Unique Visitors</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#3b82f6' }}>{uniqueVisitors}</p>
        </div>
        <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Total Page Views</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>{totalVisits}</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2.5rem' }}>
        
        {/* Recent Inquiries */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Recent Inquiries</h2>
            <Link href="/admin/inquiries" style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: '500' }}>View All</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {recentInquiries.length === 0 ? <p style={{ color: 'var(--text-muted)' }}>No inquiries yet.</p> : recentInquiries.map(inquiry => (
              <div key={inquiry.id} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', fontWeight: '600' }}>{inquiry.name}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>{inquiry.email}</p>
                <Link href={`/admin/inquiries`} style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: '500' }}>Go to Inquiries to Reply &rarr;</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Audits */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Recent Audits</h2>
            <Link href="/admin/audits" style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: '500' }}>View All</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {recentAudits.length === 0 ? <p style={{ color: 'var(--text-muted)' }}>No audits yet.</p> : recentAudits.map(audit => (
              <div key={audit.id} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem' }}>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.25rem', fontWeight: '600', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{audit.website}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Received {new Date(audit.createdAt).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
