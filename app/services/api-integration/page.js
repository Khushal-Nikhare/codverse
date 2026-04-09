import Link from 'next/link';
import { Share2, Link as LinkIcon, Lock, Zap, RefreshCw, Layers } from 'lucide-react';

export const metadata = {
  title: 'API Integration in India — Codverse Tech',
  description: 'Enable seamless communication between your tools with third party API integration services in India. We specialize in custom webhooks, data sync, and secure connections.',
  alternates: {
    canonical: 'https://www.codverse.in/services/api-integration',
  },
};

export default function ApiIntegrationPage() {
  return (
    <>
      <header className="hero">
        <div className="container fade-up">
          <Link href="/services" style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'inline-block' }}>&larr; Back to Services</Link>
          <span className="micro-label" style={{ textTransform: 'uppercase', letterSpacing: '0.2rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '1rem', display: 'block' }}>
            System Connectivity
          </span>
          <h1>Third Party API Integration Services India</h1>
          <p style={{ maxWidth: '800px', marginInline: 'auto' }}>
            Connect your fragmented tools into a unified powerhouse with expert third party API integration services in India. 
            We make your data flow where it matters.
          </p>
        </div>
      </header>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="fade-up">
              <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Bespoke Data Handshakes</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Our <strong>third party API integration services in India</strong> solve the problem of data silos. 
                Whether you need to sync your CRM with your custom web app, automate invoice generation via payment 
                gateways, or connect lead forms to internal communication tools, we provide secure and verified 
                integrations. We specialize in REST, GraphQL, and custom Webhook architectures to ensure 
                zero-latency data transfers.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--primary)' }}><Lock size={32} /></div>
                  <span style={{ fontWeight: 600 }}>Secure Endpoints</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--secondary)' }}><RefreshCw size={32} /></div>
                  <span style={{ fontWeight: 600 }}>Real-time Bi-sync</span>
                </div>
              </div>
            </div>
            <div className="card glass fade-up" style={{ padding: '3rem' }}>
              <h3 style={{ marginBottom: '2rem' }}>Integration Capabilities</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Payment Gateway Integrations (Stripe/Razorpay)',
                  'CRM & Lead Sync (Hubspot/Zoho/Salesforce)',
                  'Custom Webhook Architecture',
                  'Authentication & Security (OAuth/JWT)',
                  'Database-to-Cloud Data Mapping',
                  'Performance Monitoring & Logging'
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ color: 'var(--primary)' }}><LinkIcon size={18} /></div>
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
          <h2 className="section-title fade-up">Our Integration Process</h2>
          <div className="grid-3" style={{ marginTop: '4rem' }}>
            <div className="card fade-up">
              <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><Layers size={40} /></div>
              <h3>Audit</h3>
              <p style={{ color: 'var(--text-muted)' }}>We analyze the API documentation and authentication requirements of your stack.</p>
            </div>
            <div className="card fade-up">
              <div style={{ color: 'var(--secondary)', marginBottom: '1rem' }}><Zap size={40} /></div>
              <h3>Execution</h3>
              <p style={{ color: 'var(--text-muted)' }}>We develop the glue code to securely pass data between disparate systems.</p>
            </div>
            <div className="card fade-up">
              <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><Share2 size={40} /></div>
              <h3>Testing</h3>
              <p style={{ color: 'var(--text-muted)' }}>We stress-test the connection for edge cases and rate limits to ensure stability.</p>
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
            <h2 style={{ marginBottom: '1.5rem' }}>Make your tools talk to each other.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', marginInline: 'auto' }}>
              Capitalize on the best third party API integration services in India for a unified business experience.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact?service=api-integration" className="btn btn-primary" style={{ padding: '1.25rem 3rem' }}>Start Integrating</Link>
              <Link href="/" className="btn btn-outline" style={{ padding: '1.25rem 3rem' }}>Back to Home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
