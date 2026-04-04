import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'SpiceGarden Case Study | Codverse Tech',
  description:
    'Case study of SpiceGarden, a premium Indian Fusion restaurant web application featuring glassmorphism UI and intelligent reservation systems.',
  alternates: {
    canonical: 'https://www.codverse.in/spicegarden.detail',
  },
};

export default function SpiceGardenDetailPage() {
  return (
    <>
      <header className={styles['project-hero']}>
        <div className="container fade-up">
          <Link href="/portfolio" className={styles['back-link']}>← Back to Portfolio</Link>
          <span className="micro-label" style={{ textTransform: 'uppercase', letterSpacing: '0.2rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '1rem', display: 'block' }}>
            Featured Case Study
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem' }}>SpiceGarden — Premium Indian Fusion Restaurant</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 3rem' }}>
            An extraordinary culinary destination where traditional Indian spices meet contemporary artistry and innovation.
          </p>
          <div className={`hero-image ${styles['screenshot-item']}`} style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <Image src="https://res.cloudinary.com/dr9gcw73m/image/upload/v1775324410/codverse/uploads/home_osn7jn.png

" alt="SpiceGarden Landing Page" width={1400} height={820} priority />
          </div>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="grid-3" style={{ alignItems: 'start' }}>
            <div style={{ gridColumn: 'span 2' }}>
              <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>The Vision</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                In a world of generic dining, SpiceGarden stands out by offering a <strong>sensory journey</strong>. Our platform translates the aroma and artistry of our kitchen into a digital format, ensuring that the guest&apos;s experience begins long before they walk through our doors.
              </p>

              <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Core Capabilities</h2>
              <div className={styles['feature-grid']}>
                <div className="card glass" style={{ padding: '2rem' }}>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>🍽️ Dynamic Fusion Menu</h3>
                  <p style={{ fontSize: '0.95rem' }}>Visually stunning, interactive menu allowing guests to explore dishes by category with real-time price updates.</p>
                </div>
                <div className="card glass" style={{ padding: '2rem' }}>
                  <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>📅 Intelligent Booking</h3>
                  <p style={{ fontSize: '0.95rem' }}>Multi-step reservation engine with real-time validation for precise guest preferences and table requests.</p>
                </div>
                <div className="card glass" style={{ padding: '2rem' }}>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>📊 Managerial Insights</h3>
                  <p style={{ fontSize: '0.95rem' }}>Secure backend portal to oversee reservations, inquiries, and seasonal menu updates instantly.</p>
                </div>
                <div className="card glass" style={{ padding: '2rem' }}>
                  <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>🛒 Interactive Cart</h3>
                  <p style={{ fontSize: '0.95rem' }}>Persistent ordering system that allows guests to build their ideal virtual meal with high engagement.</p>
                </div>
              </div>
            </div>

            <div className="card glass" style={{ padding: '2.5rem', position: 'sticky', top: '7rem' }}>
              <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>Tech Stack</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className={styles['tech-tag']}>HTML5</span>
                <span className={styles['tech-tag']}>ES6+ JavaScript</span>
                <span className={styles['tech-tag']}>Vanilla CSS3</span>
                <span className={styles['tech-tag']}>Glassmorphism</span>
                <span className={styles['tech-tag']}>CSS Grid</span>
                <span className={styles['tech-tag']}>Flexbox</span>
                <span className={styles['tech-tag']}>AOS Animations</span>
                <span className={styles['tech-tag']}>Local Storage API</span>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>Start Similar Project</Link>
              </div>
            </div>
          </div>

          <div className={styles['screenshot-gallery']}>
            <div className={`${styles['screenshot-item']} fade-up`}>
              <Image src="https://res.cloudinary.com/dr9gcw73m/image/upload/v1775324450/codverse/uploads/menu_iriltr.png" alt="Interactive Menu" width={1400} height={900} />
              <div className={styles.caption}><strong>Interactive Menu:</strong> Culinary art meets digital design with high-resolution imagery and transitions.</div>
            </div>
            <div className={`${styles['screenshot-item']} fade-up`}>
              <Image src="https://res.cloudinary.com/dr9gcw73m/image/upload/v1775324477/codverse/uploads/reservation_dgcaza.png

" alt="Booking Interface" width={1400} height={900} />
              <div className={styles.caption}><strong>Seamless Booking:</strong> Conversion-optimized form designed for maximum guest convenience and detail.</div>
            </div>
            <div className={`${styles['screenshot-item']} fade-up`} style={{ gridColumn: '1 / -1' }}>
              <Image src="https://res.cloudinary.com/dr9gcw73m/image/upload/v1775324327/codverse/uploads/admin_dashboard_lavjqx.png" alt="Admin Dashboard" width={1600} height={900} />
              <div className={styles.caption}><strong>Managerial Insights:</strong> Complete control over operations through a high-performance administrative interface.</div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ textAlign: 'center', padding: '5rem 0' }} className="fade-up">
        <h3>Ready to build your digital presence?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Let us transform your vision into a premium engineering reality.</p>
        <Link href="/contact" className="btn btn-primary">Get Started Now</Link>
      </div>
    </>
  );
}
