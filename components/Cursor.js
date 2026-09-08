'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Cursor() {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin') && pathname !== '/admin/login';
  
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    // Hide on mobile
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.11;
      ring.current.y += (pos.current.y - ring.current.y) * 0.11;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top = ring.current.y + 'px';
      }
      rafId.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (dotRef.current) { dotRef.current.style.width = '20px'; dotRef.current.style.height = '20px'; }
      if (ringRef.current) { ringRef.current.style.width = '52px'; ringRef.current.style.height = '52px'; ringRef.current.style.borderColor = 'var(--accent)'; }
    };
    const onLeave = () => {
      if (dotRef.current) { dotRef.current.style.width = '10px'; dotRef.current.style.height = '10px'; }
      if (ringRef.current) { ringRef.current.style.width = '36px'; ringRef.current.style.height = '36px'; ringRef.current.style.borderColor = 'rgba(255,77,28,0.4)'; }
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (isAdmin) return null;

  return (
    <>
      <div ref={dotRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
