'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Tracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    
    // Track page view
    fetch('/api/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ path: pathname }),
    }).catch((err) => console.error('Failed to log page tracking:', err));
  }, [pathname]);

  return null;
}
