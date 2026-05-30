import { prisma } from '@/lib/prisma';
import AuditCard from './AuditCard';

export const dynamic = 'force-dynamic';

export default async function AuditsPage() {
  const audits = await prisma.auditRequest.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '2rem' }}>Audit Requests</h1>
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {audits.length === 0 ? <p>No audits yet.</p> : audits.map(audit => {
          let reportData = null;
          try { reportData = JSON.parse(audit.report); } catch (e) {}

          return (
            <AuditCard key={audit.id} audit={audit} reportData={reportData} />
          );
        })}
      </div>
    </div>
  );
}
