import Link from 'next/link';
import { Monitor, Code, Layout, Gauge, Search, Globe } from 'lucide-react';

export const metadata = {
  title: 'Web Development in India — Codverse Tech',
  description: 'Looking for professional web development services in Indore? Codverse Tech builds high-performance, SEO-friendly websites tailored for modern businesses.',
  alternates: {
    canonical: 'https://www.codverse.in/services/web-development',
  },
};

export default function WebDevelopmentPage() {
  return (
    <>
      <header className="hero">
        <div className="container fade-up">
          <Link href="/services" style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'inline-block' }}>&larr; Back to Services</Link>
          <span className="micro-label" style={{ textTransform: 'uppercase', letterSpacing: '0.2rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '1rem', display: 'block' }}>
            Engineering Excellence
          </span>
          <h1>Web Development Services in Indore</h1>
          <p style={{ maxWidth: '800px', marginInline: 'auto' }}>
            Transforming your vision into a high-performance digital reality with professional web development services in Indore. 
            At Codverse Tech, we specialize in building websites that don&apos;t just look good but drive measurable results.
          </p>
        </div>
      </header>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="fade-up">
              <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Strategic Web Engineering</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Our <strong>web development services in Indore</strong> follow a strict &quot;zero-template&quot; policy. 
                We believe your brand deserves a unique identity, which is why every line of code is written to optimize for 
                speed, security, and conversion. Whether you need a starter landing page or a complex corporate portal, 
                our Indore-based team delivers world-class engineering.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--primary)' }}><Gauge size={32} /></div>
                  <span style={{ fontWeight: 600 }}>90+ PageSpeed Score</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--secondary)' }}><Search size={32} /></div>
                  <span style={{ fontWeight: 600 }}>SEO First Architecture</span>
                </div>
              </div>
            </div>
            <div className="card glass fade-up" style={{ padding: '3rem' }}>
              <h3 style={{ marginBottom: '2rem' }}>What&apos;s Included</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Custom UI/UX Design (No Templates)',
                  'Full Mobile Responsiveness',
                  'SEO Metadata Configuration',
                  'High-Speed Performance Optimization',
                  'Contact Form & Lead Integration',
                  '1 Month Post-Launch Support'
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ color: 'var(--primary)' }}><Code size={18} /></div>
                    <span style={{ color: 'var(--text-muted)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--surface-low)', padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title fade-up">Our Process</h2>
          <div className="grid-3" style={{ marginTop: '4rem' }}>
            <div className="card fade-up">
              <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary-glow)', marginBottom: '1rem', display: 'block' }}>01</span>
              <h3>Discovery</h3>
              <p style={{ color: 'var(--text-muted)' }}>We deep-dive into your business goals and target audience in Indore and beyond.</p>
            </div>
            <div className="card fade-up">
              <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--secondary-glow)', marginBottom: '1rem', display: 'block' }}>02</span>
              <h3>Engineering</h3>
              <p style={{ color: 'var(--text-muted)' }}>Custom development using modern frameworks like Next.js for maximum performance.</p>
            </div>
            <div className="card fade-up">
              <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary-glow)', marginBottom: '1rem', display: 'block' }}>03</span>
              <h3>Optimization</h3>
              <p style={{ color: 'var(--text-muted)' }}>Rigorous testing for speed, SEO, and responsiveness before the final launch.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '8rem 0' }}>
        <div className="container fade-up">
          <div 
            className="card glass" 
            style={{ 
              textAlign: 'center', 
              padding: '5rem 2rem', 
              background: 'linear-gradient(135deg, var(--primary-glow), var(--secondary-glow))' 
            }}
          >
            <h2 style={{ marginBottom: '1.5rem' }}>Ready to build your digital presence?</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', marginInline: 'auto' }}>
              Partner with the leading web development services in Indore today.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact?service=web-development" className="btn btn-primary" style={{ padding: '1.25rem 3rem' }}>Start Project Now</Link>
              <Link href="/" className="btn btn-outline" style={{ padding: '1.25rem 3rem' }}>Back to Home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
