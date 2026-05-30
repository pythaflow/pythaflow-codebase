import { prisma } from '@/lib/prisma';
import InquiryCard from './InquiryCard';

export const dynamic = 'force-dynamic';

export default async function InquiriesPage() {
  const inquiries = await prisma.contactInquiry.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '2rem' }}>Project Inquiries</h1>
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {inquiries.length === 0 ? <p>No inquiries yet.</p> : inquiries.map(inq => (
          <InquiryCard key={inq.id} inquiry={inq} />
        ))}
      </div>
    </div>
  );
}
