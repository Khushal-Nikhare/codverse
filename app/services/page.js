import Link from 'next/link';

export const metadata = {
  title: 'Services',
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
          <h1>Tailored Solutions</h1>
          <p>Transparent pricing for high-performance engineering and automation.</p>
        </div>
      </header>

      <section>
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
              <Link href="/contact?service=starter-website" className="btn btn-outline">Choose Starter</Link>
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
              <Link href="/contact?service=automation" className="btn btn-primary">Let&apos;s Automate</Link>
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
              <Link href="/contact?service=web-app" className="btn btn-outline">Start Project</Link>
            </div>
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
