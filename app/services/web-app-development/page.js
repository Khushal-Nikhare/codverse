import Link from 'next/link';
import { Layers, Database, Shield, Smartphone, Server, Smartphone as Mobile } from 'lucide-react';

export const metadata = {
  title: 'Web App Development in India — Codverse Tech',
  description: 'Looking for a reliable web app development company in Indore? Codverse Tech builds scalable, custom full-stack applications with advanced security and performance.',
  alternates: {
    canonical: 'https://www.codverse.in/services/web-app-development',
  },
};

export default function WebAppDevelopmentPage() {
  return (
    <>
      <header className="hero">
        <div className="container fade-up">
          <Link href="/services" style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'inline-block' }}>&larr; Back to Services</Link>
          <span className="micro-label" style={{ textTransform: 'uppercase', letterSpacing: '0.2rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '1rem', display: 'block' }}>
            Full-Stack Solutions
          </span>
          <h1>Web App Development Company Indore</h1>
          <p style={{ maxWidth: '800px', marginInline: 'auto' }}>
            Build complex, scalable, and secure applications with a leading web app development company in Indore. 
            We turn sophisticated business requirements into high-performance software.
          </p>
        </div>
      </header>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="fade-up">
              <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Enterprise-Grade Development</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                As a specialized <strong>web app development company in Indore</strong>, we focus on the ₹20k+ custom 
                enterprise market. Our applications are built for scale, featuring robust database architectures, 
                secure user authentication, and intuitive admin dashboards. Whether it&apos;s a multi-tenant SaaS 
                or a custom internal tool, our engineering ensures your application is fast, reliable, and future-proof.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--primary)' }}><Database size={32} /></div>
                  <span style={{ fontWeight: 600 }}>Scalable DB Arch</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--secondary)' }}><Shield size={32} /></div>
                  <span style={{ fontWeight: 600 }}>Secure Auth Flow</span>
                </div>
              </div>
            </div>
            <div className="card glass fade-up" style={{ padding: '3rem' }}>
              <h3 style={{ marginBottom: '2rem' }}>Technical Scope</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Custom Full-Stack Engineering',
                  'PostgreSQL / MongoDB Database Setup',
                  'JWT & OAuth Authentication',
                  'Internal Admin Dashboards',
                  'REST & GraphQL API Development',
                  'Cloud Deployment & CI/CD Setup'
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ color: 'var(--primary)' }}><Layers size={18} /></div>
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
          <h2 className="section-title fade-up">Our Tech Stack</h2>
          <div className="grid-3" style={{ marginTop: '4rem' }}>
            <div className="card fade-up">
              <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><Mobile size={40} /></div>
              <h3>Frontend</h3>
              <p style={{ color: 'var(--text-muted)' }}>Interactive, zero-latency interfaces built with React and Next.js.</p>
            </div>
            <div className="card fade-up">
              <div style={{ color: 'var(--secondary)', marginBottom: '1rem' }}><Server size={40} /></div>
              <h3>Backend</h3>
              <p style={{ color: 'var(--text-muted)' }}>High-performance server logic using Node.js or edge-computing environments.</p>
            </div>
            <div className="card fade-up">
              <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><Layers size={40} /></div>
              <h3>Infrastructure</h3>
              <p style={{ color: 'var(--text-muted)' }}>Automated scaling and secure hosting on Vercel or leading cloud providers.</p>
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
            <h2 style={{ marginBottom: '1.5rem' }}>Scale your application properly.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', marginInline: 'auto' }}>
              Consult the premier web app development company in Indore and build for the future.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact?service=web-app" className="btn btn-primary" style={{ padding: '1.25rem 3rem' }}>Start Development</Link>
              <Link href="/" className="btn btn-outline" style={{ padding: '1.25rem 3rem' }}>Back to Home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
