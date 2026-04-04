import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Teal Dental Clinic Case Study | Codverse Tech',
  description:
    'Case study of Teal Dental Clinic, a modern full-stack patient management and medical portfolio for Dr. Alisha Singh.',
  alternates: {
    canonical: 'https://www.codverse.in/doctor.detail',
  },
};

export default function DoctorDetailPage() {
  return (
    <>
      <header className={styles['project-hero']}>
        <div className="container fade-up">
          <Link href="/portfolio" className={styles['back-link']}>← Back to Portfolio</Link>
          <span className="micro-label" style={{ textTransform: 'uppercase', letterSpacing: '0.2rem', fontWeight: 700, color: '#008080', marginBottom: '1rem', display: 'block' }}>
            Medical Case Study
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem' }}>Teal Dental Clinic — Digital Patient Management</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 3rem' }}>
            A modern medical interface for <span className={styles['highlight-text']}>Dr. Alisha Singh</span>, blending professional healthcare services with sophisticated clinic administration.
          </p>
          <div className={`hero-image ${styles['screenshot-item']}`} style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <Image src="https://res.cloudinary.com/dr9gcw73m/image/upload/v1775324169/codverse/uploads/home_tg6uxp.png" alt="Teal Dental Clinic Home Page" width={1400} height={820} priority />
          </div>
        </div>
      </header>

      <section className={styles.content}>
        <div className="container">
          <div className="grid-3" style={{ alignItems: 'start' }}>
            <div style={{ gridColumn: 'span 2' }}>
              <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>The Project Overview</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Teal Dental Clinic is a high-performance patient management system designed to streamline medical workflows. It bridges the gap between patient accessibility and administrative precision through a unified, secure platform.
              </p>

              <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Patient Portal Features</h2>
              <div className={styles['feature-grid']} style={{ marginBottom: '4rem' }}>
                <div className="card glass" style={{ padding: '2rem' }}>
                  <h3 style={{ color: '#008080', marginBottom: '1rem' }}>📅 Seamless Booking</h3>
                  <p style={{ fontSize: '0.95rem' }}>An intuitive scheduling system that allows patients to secure appointments in real-time with automatic validation.</p>
                </div>
                <div className="card glass" style={{ padding: '2rem' }}>
                  <h3 style={{ color: '#008080', marginBottom: '1rem' }}>📂 Medical Records</h3>
                  <p style={{ fontSize: '0.95rem' }}>A secure look-up portal where patients can access their treatment history and digital prescriptions using a unique ID.</p>
                </div>
              </div>

              <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Administrative Power</h2>
              <div className={styles['feature-grid']}>
                <div className="card glass" style={{ padding: '2rem' }}>
                  <h3 style={{ color: '#ac8aff', marginBottom: '1rem' }}>📊 Advanced Analytics</h3>
                  <p style={{ fontSize: '0.95rem' }}>Data visualization using Recharts to track patient demographics, revenue trends, and clinic growth.</p>
                </div>
                <div className="card glass" style={{ padding: '2rem' }}>
                  <h3 style={{ color: '#ac8aff', marginBottom: '1rem' }}>🔐 Management Console</h3>
                  <p style={{ fontSize: '0.95rem' }}>Full CRUD operations for appointments, patient databases, and digital prescription management.</p>
                </div>
              </div>
            </div>

            <div className="card glass" style={{ padding: '2.5rem', position: 'sticky', top: '7rem' }}>
              <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>Technical Stack</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className={styles['tech-tag']}>React 19</span>
                <span className={styles['tech-tag']}>Vite</span>
                <span className={styles['tech-tag']}>Framer Motion</span>
                <span className={styles['tech-tag']}>Recharts</span>
                <span className={styles['tech-tag']}>Lucide React</span>
                <span className={styles['tech-tag']}>Vanilla CSS</span>
                <span className={styles['tech-tag']}>Responsive Design</span>
                <span className={styles['tech-tag']}>Local Persistence</span>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%', borderColor: '#008080', background: 'linear-gradient(135deg, #008080, #004d4d)' }}>
                  Consult for Your Clinic
                </Link>
              </div>
            </div>
          </div>

          <div className={styles['screenshot-gallery']}>
            <div className={`${styles['screenshot-item']} fade-up`}>
              <Image src="https://res.cloudinary.com/dr9gcw73m/image/upload/v1775324204/codverse/uploads/booking_ls45y5.png" alt="Appointment Booking Interface" width={1400} height={900} />
              <div className={styles.caption}><strong>Patient Booking:</strong> A clean, conversion-focused interface for scheduling dental procedures.</div>
            </div>
            <div className={`${styles['screenshot-item']} fade-up`}>
              <Image src="https://res.cloudinary.com/dr9gcw73m/image/upload/v1775324002/codverse/uploads/admin_dashboard_sdoolm.png

" alt="Administrative Dashboard" width={1400} height={900} />
              <div className={styles.caption}><strong>Admin Overview:</strong> Real-time statistics and operational tracking for medical staff.</div>
            </div>
            <div className={`${styles['screenshot-item']} fade-up`}>
              <Image src="https://res.cloudinary.com/dr9gcw73m/image/upload/v1775323839/codverse/uploads/admin_analytics_v4g5ew.png" alt="Clinic Analytics Hub" width={1400} height={900} />
              <div className={styles.caption}><strong>Performance Analytics:</strong> Deep-dive data visualization into clinic growth and patient trends.</div>
            </div>
            <div className={`${styles['screenshot-item']} fade-up`}>
              <Image src="https://res.cloudinary.com/dr9gcw73m/image/upload/v1775324258/codverse/uploads/records_a08ffc.png" alt="Medical Records Search" width={1400} height={900} />
              <div className={styles.caption}><strong>Records Search:</strong> Secure and efficient retrieval of patient histories and prescriptions.</div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ textAlign: 'center', padding: '5rem 0' }} className="fade-up">
        <h3>Building for the Medical Industry?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>We specialize in creating secure, efficient, and professional platforms for healthcare providers.</p>
        <Link href="/contact" className="btn btn-outline">Start Your Journey</Link>
      </div>
    </>
  );
}
