'use client';
import { useState } from 'react';
import Link from 'next/link';

const SERVICES = [
  'Digital Marketing', 'Graphics & Brand Design',
  'Motion Design & Video', 'Social Media Management',
  'Web Design & Development', 'Software Development', 'Not sure yet',
];
const BUDGETS = [
  'Under $500/mo', '$500 – $2,000/mo', '$2,000 – $5,000/mo',
  '$5,000 – $15,000/mo', '$15,000+/mo',
];

function Field({ label, children }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <label className="field-label">{label}</label>
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', website: '', service: '', budget: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | done | error

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus('done');
      } else {
        setStatus('idle');
        alert('Failed to send message. Please try again.');
      }
    } catch (err) {
      setStatus('idle');
      alert('Error sending message.');
    }
  }

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: '5rem', paddingLeft: '3rem', paddingRight: '3rem', borderBottom: '1px solid var(--border)', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'end' }} className="contact-hero-grid">
          <div>
            <div className="section-tag" style={{ animation: 'fadeUp .7s .2s both' }}>Let's Talk</div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem,9vw,8rem)',
              lineHeight: 0.9, letterSpacing: '0.04em',
              animation: 'fadeUp .8s .4s both',
            }}>
              Start a<br /><span style={{ color: 'var(--accent)' }}>Project.</span>
            </h1>
          </div>
          <div style={{ animation: 'fadeUp .8s .5s both' }}>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Tell us about your brand and goals. We respond within 24 hours with a clear plan of action — no sales fluff, just straight talk.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {[
                { icon: '📧', label: 'Email', val: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@pythaflow.com', href: `mailto:hello@pythaflow.com` },
                { icon: '📍', label: 'HQ', val: 'Canada (registered)' },
                { icon: '🏢', label: 'Operations', val: 'Dhaka, Bangladesh' },
                { icon: '🌍', label: 'Serving', val: 'Clients worldwide' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1rem', marginTop: 2 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>{item.label}</div>
                    {item.href
                      ? <a href={item.href} style={{ fontSize: '0.9rem', color: 'var(--text)', transition: 'color .2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
                      >{item.val}</a>
                      : <div style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{item.val}</div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          .contact-hero-grid { grid-template-columns: 1fr 1fr !important; }
          @media(max-width:900px) { .contact-hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
          @media(max-width:768px) { section { padding-left: 1.5rem !important; padding-right: 1.5rem !important; } }
        `}</style>
      </section>

      {/* Form */}
      <section style={{ padding: '6rem 3rem' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          {status === 'done' ? (
            <div style={{ textAlign: 'center', padding: '5rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>✦</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', letterSpacing: '0.06em', color: 'var(--text)', marginBottom: '1rem' }}>
                MESSAGE RECEIVED
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 400, margin: '0 auto 2rem' }}>
                We'll get back to you within 24 hours. In the meantime, feel free to explore our work or get a free brand audit.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/work" className="btn-primary">See Our Work →</Link>
                <Link href="/assessment" className="btn-secondary">Free Audit</Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2rem' }} className="form-grid">
                <Field label="Your Name *">
                  <input className="field-input" type="text" placeholder="John Smith" value={form.name} onChange={set('name')} required />
                </Field>
                <Field label="Email Address *">
                  <input className="field-input" type="email" placeholder="john@company.com" value={form.email} onChange={set('email')} required />
                </Field>
                <Field label="Company / Brand">
                  <input className="field-input" type="text" placeholder="Your company name" value={form.company} onChange={set('company')} />
                </Field>
                <Field label="Website (if any)">
                  <input className="field-input" type="url" placeholder="https://yourwebsite.com" value={form.website} onChange={set('website')} />
                </Field>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2rem' }} className="form-grid">
                <Field label="Service You're Interested In">
                  <select className="field-select" value={form.service} onChange={set('service')}>
                    <option value="">Select a service</option>
                    {SERVICES.map(s => <option key={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="Monthly Budget">
                  <select className="field-select" value={form.budget} onChange={set('budget')}>
                    <option value="">Select budget range</option>
                    {BUDGETS.map(b => <option key={b}>{b}</option>)}
                  </select>
                </Field>
              </div>

              <Field label="Tell Us About Your Project *">
                <textarea
                  className="field-input"
                  placeholder="What are you building? What's your biggest challenge right now? What does success look like?"
                  rows={6}
                  style={{ resize: 'vertical', lineHeight: 1.7 }}
                  value={form.message}
                  onChange={set('message')}
                  required
                />
              </Field>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.08em' }}>
                  * Required fields. We respond within 24 hours.
                </p>
                <button type="submit" className="btn-primary" disabled={status === 'sending'}
                  style={{ opacity: status === 'sending' ? 0.7 : 1, minWidth: 200 }}>
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
              </div>

              {/* Note for developer */}
              {/* 
                TO CONNECT THIS FORM:
                Option A (free): Use Formspree — go to formspree.io, create a form, get the endpoint URL.
                  Replace the handleSubmit logic with:
                    fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } })
                Option B (free): Use Web3Forms — same pattern, web3forms.com
              */}
            </form>
          )}
        </div>
        <style>{`
          .form-grid { grid-template-columns: 1fr 1fr !important; }
          @media(max-width:640px) { .form-grid { grid-template-columns: 1fr !important; } }
          @media(max-width:768px) { section { padding: 4rem 1.5rem !important; } }
        `}</style>
      </section>

      {/* Quick audit nudge */}
      <section style={{ padding: '4rem 3rem', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 6 }}>Not ready to commit?</p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: '0.06em', color: 'var(--text)' }}>Get a free brand audit first.</h3>
          </div>
          <Link href="/assessment" className="btn-primary" style={{ flexShrink: 0 }}>Audit My Brand →</Link>
        </div>
      </section>
    </>
  );
}
