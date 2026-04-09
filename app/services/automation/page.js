import Link from 'next/link';
import { Cpu, Zap, Share2, Workflow, Database, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Automation in India — Codverse Tech',
  description: 'Scale your operations with professional business automation services in India. We specialize in custom CRM setups, API integrations, and intelligent workflows.',
  alternates: {
    canonical: 'https://www.codverse.in/services/automation',
  },
};

export default function AutomationPage() {
  return (
    <>
      <header className="hero">
        <div className="container fade-up">
          <Link href="/services" style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'inline-block' }}>&larr; Back to Services</Link>
          <span className="micro-label" style={{ textTransform: 'uppercase', letterSpacing: '0.2rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '1rem', display: 'block' }}>
            Operational Efficiency
          </span>
          <h1>Business Automation Services India</h1>
          <p style={{ maxWidth: '800px', marginInline: 'auto' }}>
            Eliminate manual debt and accelerate your growth with world-class business automation services in India. 
            We build intelligent systems that work while you sleep.
          </p>
        </div>
      </header>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="fade-up">
              <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Integrated Workflow Engineering</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Our <strong>business automation services in India</strong> are designed to bridge the gap between your tools. 
                We don&apos;t just install software; we engineer deep integrations that sync multi-tenant data, 
                automate lead nurture, and provide real-time reporting. From custom CRM logic to complex API handshakes, 
                we ensure your business infrastructure is autonomous and scalable.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--primary)' }}><Workflow size={32} /></div>
                  <span style={{ fontWeight: 600 }}>End-to-End Logic</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--secondary)' }}><Share2 size={32} /></div>
                  <span style={{ fontWeight: 600 }}>Zero-Latency Sync</span>
                </div>
              </div>
            </div>
            <div className="card glass fade-up" style={{ padding: '3rem' }}>
              <h3 style={{ marginBottom: '2rem' }}>Core Deliverables</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Custom CRM Configuration & Logic',
                  'Third-Party API Integrations',
                  'Automated Lead Generation Flows',
                  'Email & SMS Notification Systems',
                  'Real-Time Analytics Dashboards',
                  'Error-Handling & System Monitoring'
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ color: 'var(--primary)' }}><Zap size={18} /></div>
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
          <h2 className="section-title fade-up">Our Strategy</h2>
          <div className="grid-3" style={{ marginTop: '4rem' }}>
            <div className="card fade-up">
              <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><Database size={40} /></div>
              <h3>Data Mapping</h3>
              <p style={{ color: 'var(--text-muted)' }}>We map out every touchpoint and data silo in your current business stack.</p>
            </div>
            <div className="card fade-up">
              <div style={{ color: 'var(--secondary)', marginBottom: '1rem' }}><Cpu size={40} /></div>
              <h3>System Build</h3>
              <p style={{ color: 'var(--text-muted)' }}>We construct the automation logic using custom code or top-tier integration tools.</p>
            </div>
            <div className="card fade-up">
              <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><BarChart3 size={40} /></div>
              <h3>Validation</h3>
              <p style={{ color: 'var(--text-muted)' }}>Comprehensive testing ensures data integrity and system reliability across all flows.</p>
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
            <h2 style={{ marginBottom: '1.5rem' }}>Stop working for your tools.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', marginInline: 'auto' }}>
              Make your tools work for you with premier business automation services in India.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact?service=automation" className="btn btn-primary" style={{ padding: '1.25rem 3rem' }}>Automate My Business</Link>
              <Link href="/" className="btn btn-outline" style={{ padding: '1.25rem 3rem' }}>Back to Home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
