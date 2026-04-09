import Link from 'next/link';
import PortfolioGrid from '@/components/PortfolioGrid';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Our Work | Software Development Portfolio — Codverse Tech India',
  description:
    'Explore our software development portfolio. Codverse Tech builds high-performance web apps, business automation systems, and custom software for clients in India, US, and UK.',
  alternates: {
    canonical: 'https://www.codverse.in/portfolio',
  },
};

export default function PortfolioPage() {
  // Generate ItemList Schema for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Codverse Tech Portfolio',
    'description': 'Software development projects by Codverse Tech, India',
    'itemListElement': projects.map((project, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': project.name,
      'url': `https://www.codverse.in${project.link}`,
      'description': project.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
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
            Our Work
          </span>
          <h1>Software Development Portfolio — Codverse Tech</h1>
          <p style={{ maxWidth: '800px', marginInline: 'auto', marginBottom: '2rem' }}>
            Every project in our portfolio was built from scratch by the Codverse team — no templates, no page builders. 
            We&apos;ve delivered web development, automation, and full-stack web apps for clients across India.
          </p>
        </div>
      </header>

      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <PortfolioGrid projects={projects} />

          <div 
            style={{ 
              textAlign: 'center', 
              marginTop: '6rem', 
              padding: '4rem 2rem', 
              background: 'var(--surface-low)', 
              borderRadius: '24px',
              border: '1px solid var(--glass-border)',
              background: 'linear-gradient(135deg, var(--primary-glow), var(--secondary-glow))' 
            }} 
            className="fade-up"
          >
            <h2 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Like what you see?</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '3rem' }}>
              Let&apos;s build something exceptional for your business.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem' }}>
              Start a Project &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
