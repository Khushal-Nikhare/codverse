import Link from 'next/link';
import HomeModal from '@/components/HomeModal';
import { Monitor, Cpu, Smartphone, Rocket, Wallet, Lightbulb } from 'lucide-react';

export const metadata = {
  title: 'Codverse Tech | Software Development Company in India',
  description:
    'Codverse Tech builds high-performance websites, automation systems, and web apps for modern businesses. Affordable, fast, and reliable — based in Indore, India.',
  alternates: {
    canonical: 'https://www.codverse.in/',
  },
};

export default function HomePage() {
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
            Engineering Excellence
          </span>
          <h1>Software Development Company in India</h1>
          <p>We build high-performance software systems and intelligent automation tailored for modern agencies.</p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <Link href="/contact" className="btn btn-primary">Start Building Now</Link>
            <Link href="/portfolio" className="btn btn-outline">View Our Work</Link>
          </div>
        </div>
      </header>

      <section className="services-preview">
        <div className="container">
          <h2 className="section-title fade-up">Specialized Solutions</h2>
          <div className="grid-3">
            <div className="card glass fade-up">
              <div className="feature-icon" style={{ background: 'var(--primary-glow)' }}><Monitor size={24} /></div>
              <h3>Web Engineering</h3>
              <p>Scalable, high-performance web architectures that prioritize speed and user experience.</p>
            </div>
            <div className="card glass fade-up">
              <div className="feature-icon" style={{ background: 'var(--secondary-glow)' }}><Cpu size={24} /></div>
              <h3>Automation Engine</h3>
              <p>Deep workflow integrations that eliminate manual debt and maximize operational efficiency.</p>
            </div>
            <div className="card glass fade-up">
              <div className="feature-icon" style={{ background: 'var(--primary-glow)' }}><Smartphone size={24} /></div>
              <h3>Enterprise Apps</h3>
              <p>Sophisticated multi-tenant applications designed for complex business requirements.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }} className="fade-up">
            <Link href="/services" className="btn btn-outline">Explore All Services</Link>
          </div>
        </div>
      </section>

      <section className="why-us bg-light" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title fade-up">Why Choose Us</h2>
          <div className="grid-3">
            <div className="card fade-up" style={{ border: 'none', background: 'transparent', padding: '1rem' }}>
              <div className="feature-icon"><Rocket size={24} /></div>
              <h3>Fast Delivery</h3>
              <p>We build and launch your projects quickly without compromising on quality.</p>
            </div>
            <div className="card fade-up" style={{ border: 'none', background: 'transparent', padding: '1rem' }}>
              <div className="feature-icon"><Wallet size={24} /></div>
              <h3>Affordable Pricing</h3>
              <p>Premium quality software solutions that fit comfortably within your budget.</p>
            </div>
            <div className="card fade-up" style={{ border: 'none', background: 'transparent', padding: '1rem' }}>
              <div className="feature-icon"><Lightbulb size={24} /></div>
              <h3>Simple Solutions</h3>
              <p>We avoid unnecessary complexity. If there&apos;s a simpler way to do it, we find it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" style={{ background: 'var(--surface-low)', padding: '8rem 0' }}>
        <div className="container fade-up">
          <div
            className="card glass"
            style={{
              textAlign: 'center',
              padding: '5rem 2.5rem',
              borderColor: 'var(--primary)',
              background: 'linear-gradient(135deg, var(--primary-glow), var(--secondary-glow))',
            }}
          >
            <h2 className="section-title" style={{ marginBottom: '1.5rem', color: 'var(--text-headline)' }}>
              Ready to accelerate your growth?
            </h2>
            <p
              style={{
                fontSize: '1.25rem',
                marginBottom: '3rem',
                color: 'var(--text-muted)',
                maxWidth: '600px',
                marginInline: 'auto',
              }}
            >
              Join the next generation of tech-driven businesses with our premium engineering solutions.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', color: '#fff' }}>
              Build Your Vision Now
            </Link>
          </div>
        </div>
      </section>

      <HomeModal />
    </>
  );
}
