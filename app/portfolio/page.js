import Link from 'next/link';

export const metadata = {
  title: 'Portfolio',
  description:
    'View recent projects and case studies by Codverse Tech, from high-performance landing pages to complex enterprise automations.',
  alternates: {
    canonical: 'https://www.codverse.in/portfolio',
  },
};

export default function PortfolioPage() {
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
            Our Work
          </span>
          <h1>Showcase of Excellence</h1>
          <p>A curated collection of high-performance digital products and automated systems.</p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="grid-3">
            <Link href="/hrms.detail" className="card portfolio-card glass fade-up" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}>
              <div
                className="portfolio-img"
                style={{
                  background:
                    "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dr9gcw73m/image/upload/v1775323807/codverse/uploads/landing_page_wejrpu.png')",
                  backgroundSize: 'cover',
                  height: '320px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '2rem',
                }}
              >
                <span
                  style={{
                    color: '#fff',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    background: 'var(--secondary)',
                    padding: '0.4rem 1rem',
                    borderRadius: '4px',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  AI Engineering
                </span>
              </div>
              <div className="portfolio-content" style={{ padding: '2.5rem', textAlign: 'left' }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>HRMS.ai Ecosystem</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Intelligent recruitment platform with Gemini-powered resume analysis and real-time AI voice interviews.
                </p>
                <div style={{ marginTop: '1.5rem' }}>
                  <span className="btn btn-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>View Case Study</span>
                </div>
              </div>
            </Link>

            <Link href="/spicegarden.detail" className="card portfolio-card glass fade-up" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}>
              <div
                className="portfolio-img"
                style={{
                  background:
                    "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dr9gcw73m/image/upload/v1775324410/codverse/uploads/home_osn7jn.png')",
                  backgroundSize: 'cover',
                  height: '320px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '2rem',
                }}
              >
                <span
                  style={{
                    color: '#fff',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    background: 'var(--primary)',
                    padding: '0.4rem 1rem',
                    borderRadius: '4px',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  Premium Commerce
                </span>
              </div>
              <div className="portfolio-content" style={{ padding: '2.5rem', textAlign: 'left' }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>SpiceGarden Fusion</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  High-end restaurant platform featuring glassmorphism UI, interactive menus, and reservation engines.
                </p>
                <div style={{ marginTop: '1.5rem' }}>
                  <span className="btn btn-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>View Case Study</span>
                </div>
              </div>
            </Link>

            <Link href="/doctor.detail" className="card portfolio-card glass fade-up" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}>
              <div
                className="portfolio-img"
                style={{
                  background:
                    "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dr9gcw73m/image/upload/v1775324169/codverse/uploads/home_tg6uxp.png')",
                  backgroundSize: 'cover',
                  height: '320px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '2rem',
                }}
              >
                <span
                  style={{
                    color: '#fff',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    background: '#008080',
                    padding: '0.4rem 1rem',
                    borderRadius: '4px',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  Medical Tech
                </span>
              </div>
              <div className="portfolio-content" style={{ padding: '2.5rem', textAlign: 'left' }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Teal Dental Clinic</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Full-stack patient management system with interactive booking and advanced administrative analytics.
                </p>
                <div style={{ marginTop: '1.5rem' }}>
                  <span className="btn btn-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>View Case Study</span>
                </div>
              </div>
            </Link>
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }} className="fade-up">
            <h3 style={{ marginBottom: '1rem' }}>Ready to be our next success story?</h3>
            <Link href="/contact" className="btn btn-primary">Start a Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}
