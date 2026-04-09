import Link from 'next/link';
import { ArrowRight, Link as LinkIcon, Users } from 'lucide-react';

export const metadata = {
  title: 'Software Services India — Codverse Tech',
  description:
    'Codverse Tech provides premium software solutions including Web Engineering, Automation, and App Development.',
  alternates: {
    canonical: 'https://www.codverse.in/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <header className="hero">
        <div className="container fade-up">
          <span
            className="micro-label"
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              fontWeight: 700,
              color: 'var(--secondary)',
              marginBottom: '1rem',
              display: 'block',
            }}
          >
            Service Tiers
          </span>
          <h1>Software Services India</h1>
          <p>Transparent pricing for high-performance engineering and automation.</p>
        </div>
      </header>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="grid-3">
            <div className="pricing-card fade-up">
              <h3>Starter Website</h3>
              <div className="price">₹5k – ₹10k</div>
              <ul className="features-list">
                <li>5-Page Responsive Website</li>
                <li>Modern UI/UX Design</li>
                <li>SEO Optimization</li>
                <li>Contact Form Integration</li>
                <li>Fast Loading Speeds</li>
              </ul>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Link href="/services/web-development" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  View Full Details <ArrowRight size={16} />
                </Link>
                <Link href="/contact?service=starter-website" className="btn btn-outline">Choose Starter</Link>
              </div>
            </div>

            <div className="pricing-card fade-up" style={{ borderColor: 'var(--primary)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
              <h3>Automation Setup</h3>
              <div className="price">₹8k – ₹20k</div>
              <ul className="features-list">
                <li>Custom CRM Setup</li>
                <li>Email & SMS automations</li>
                <li>Lead generation flows</li>
                <li>Third-party API integrations</li>
                <li>Analytics Dashboard connection</li>
              </ul>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Link href="/services/automation" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  View Full Details <ArrowRight size={16} />
                </Link>
                <Link href="/contact?service=automation" className="btn btn-primary">Let&apos;s Automate</Link>
              </div>
            </div>

            <div className="pricing-card fade-up">
              <h3>Web App Development</h3>
              <div className="price">₹20k+</div>
              <ul className="features-list">
                <li>Custom Full-Stack Development</li>
                <li>Database Architecture</li>
                <li>User Authentication</li>
                <li>Admin Dashboard</li>
                <li>Scalable Infrastructure</li>
              </ul>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Link href="/services/web-app-development" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  View Full Details <ArrowRight size={16} />
                </Link>
                <Link href="/contact?service=web-app" className="btn btn-outline">Start Project</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <h2 className="section-title fade-up" style={{ fontSize: '1.5rem', marginBottom: '3rem' }}>Specialized Capabilities</h2>
          <div className="grid-2">
            <Link href="/services/api-integration" className="card glass fade-up" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none' }}>
              <div style={{ color: 'var(--primary)' }}><LinkIcon size={32} /></div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Third Party API Integration</h3>
                <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Securely connect your business stack with custom webhooks and data sync.</p>
              </div>
            </Link>
            <Link href="/services/crm-setup" className="card glass fade-up" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none' }}>
              <div style={{ color: 'var(--secondary)' }}><Users size={32} /></div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Custom CRM Setup</h3>
                <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Configure lead management flows and CRM pipelines tailored to your sales process.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section" style={{ background: 'var(--surface-low)', padding: '5rem 0' }}>
        <div className="container fade-up">
          <div
            className="card glass"
            style={{
              textAlign: 'center',
              borderColor: 'var(--secondary)',
              background: 'linear-gradient(135deg, var(--primary-glow), var(--secondary-glow))',
            }}
          >
            <h2 className="section-title" style={{ marginBottom: '1.5rem', color: 'var(--text-headline)' }}>
              Need a Bespoke Solution?
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              We handle complex requirements beyond standard tiers. Let&apos;s discuss your specific needs.
            </p>
            <Link
              href="/contact"
              className="btn btn-outline"
              style={{ borderColor: 'var(--secondary)', color: 'var(--secondary)', borderWidth: '2px' }}
            >
              Speak with our Experts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

