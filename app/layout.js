import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';

import { prisma } from '@/lib/prisma';

export async function generateMetadata() {
  let logoUrl = '/favicon.ico';
  try {
    const logoEntry = await prisma.pageContent.findUnique({ where: { key: 'logo_url' } });
    if (logoEntry?.value) {
      logoUrl = logoEntry.value;
    }
  } catch (error) {
    // Database might not be ready during build or initial dev load
    console.error('Could not load dynamic favicon', error);
  }

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title: {
      default: 'Pythaflow — Creative Agency',
      template: '%s | Pythaflow',
    },
    description: 'Pythaflow is a motion-first creative agency. Design, digital marketing, motion, video, and software — built for brands that refuse to be forgettable. Headquartered in Canada, operating globally from Dhaka.',
    keywords: [
      'creative agency', 'digital marketing', 'motion design', 'video editing',
      'branding', 'social media marketing', 'web development', 'software development',
      'Bangladesh', 'Canada', 'global agency',
    ],
    authors: [{ name: 'Pythaflow' }],
    creator: 'Pythaflow',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://pythaflow.com',
      siteName: 'Pythaflow',
      title: 'Pythaflow — Creative Agency',
      description: 'Motion-first creative agency. Design, marketing & development.',
      images: [{ url: logoUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Pythaflow — Creative Agency',
      description: 'Motion-first creative agency. Design, marketing & development.',
      images: [logoUrl],
    },
    icons: {
      icon: logoUrl,
      apple: logoUrl,
    },
  };
}

import Tracker from '@/components/Tracker';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Tracker />
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
