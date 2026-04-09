import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { FolderSearch, Mic, BarChart3, User } from 'lucide-react';

export const metadata = {
  title: 'HRMS.ai Case Study | Codverse Tech',
  description:
    'Case study of HRMS.ai, an intelligent recruitment ecosystem featuring Gemini-powered resume parsing and real-time AI voice interviews.',
  alternates: {
    canonical: 'https://www.codverse.in/hrms.detail',
  },
};

export default function HrmsDetailPage() {
  return (
    <>
      <header className={styles['project-hero']}>
        <div className="container fade-up">
          <Link href="/portfolio" className={styles['back-link']}>← Back to Portfolio</Link>
          <span className="micro-label" style={{ textTransform: 'uppercase', letterSpacing: '0.2rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '1rem', display: 'block' }}>
            Featured Case Study
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem' }}>HRMS.ai — The Intelligent Recruitment Ecosystem</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 3rem' }}>
            Empowering Modern Hiring with AI-Powered Precision and Real-Time Voice Analytics.
          </p>
          <div className={`hero-image ${styles['screenshot-item']}`} style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <Image src="https://res.cloudinary.com/dr9gcw73m/image/upload/v1775323807/codverse/uploads/landing_page_wejrpu.png" alt="HRMS.ai Landing Page" width={1400} height={820} priority />
          </div>
        </div>
      </header>

      <section className={styles.content}>
        <div className="container">
          <div className="grid-3" style={{ alignItems: 'start' }}>
            <div style={{ gridColumn: 'span 2' }}>
              <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>The Vision</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                In the rapidly evolving job market, traditional keyword-based screening is no longer enough. HRMS.ai provides <strong>contextual understanding</strong> of candidates&apos; skills and <strong>objective performance evaluation</strong> through AI-driven voice interactions. It&apos;s not just a tracker; it&apos;s a talent optimizer.
              </p>

              <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Core Capabilities</h2>
              <div className={styles['feature-grid']}>
                <div className="card glass" style={{ padding: '2rem' }}>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <FolderSearch size={22} /> AI Resume Parsing
                  </h3>
                  <p style={{ fontSize: '0.95rem' }}>Contextual analysis of documents (PDF/DOCX) against job descriptions with weighted Match Scores.</p>
                </div>
                <div className="card glass" style={{ padding: '2rem' }}>
                  <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Mic size={22} /> Voice Interview Room
                  </h3>
                  <p style={{ fontSize: '0.95rem' }}>Real-time, zero-latency voice interviews where AI acts as a professional recruiter with instant evaluation.</p>
                </div>
                <div className="card glass" style={{ padding: '2rem' }}>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <BarChart3 size={22} /> HR Analytics Hub
                  </h3>
                  <p style={{ fontSize: '0.95rem' }}>Centralized dashboard to track application status, candidate rankings, and interview performance metrics.</p>
                </div>
                <div className="card glass" style={{ padding: '2rem' }}>
                  <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <User size={22} /> Candidate Console
                  </h3>
                  <p style={{ fontSize: '0.95rem' }}>Personalized management for profiles, multiple resumes, and tailored job applications.</p>
                </div>
              </div>
            </div>

            <div className="card glass" style={{ padding: '2.5rem', position: 'sticky', top: '7rem' }}>
              <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>Tech Stack</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className={styles['tech-tag']}>Google Gemini Pro</span>
                <span className={styles['tech-tag']}>React (Vite)</span>
                <span className={styles['tech-tag']}>TailwindCSS</span>
                <span className={styles['tech-tag']}>Flask (Python)</span>
                <span className={styles['tech-tag']}>SQLite</span>
                <span className={styles['tech-tag']}>SQLAlchemy</span>
                <span className={styles['tech-tag']}>Speech-to-Text (STT)</span>
                <span className={styles['tech-tag']}>Text-to-Speech (TTS)</span>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>Start Similar Project</Link>
              </div>
            </div>
          </div>

          <div className={styles['screenshot-gallery']}>
            <div className={`${styles['screenshot-item']} fade-up`}>
              <Image src="https://res.cloudinary.com/dr9gcw73m/image/upload/v1775323780/codverse/uploads/hr_dashboard_tocxqp.png" alt="HR Admin Dashboard" width={1400} height={900} />
              <div className={styles.caption}><strong>HR Admin Dashboard:</strong> Complete visibility over the talent pool. Monitor candidate progress and review AI scores.</div>
            </div>
            <div className={`${styles['screenshot-item']} fade-up`}>
              <Image src="https://res.cloudinary.com/dr9gcw73m/image/upload/v1775323706/codverse/uploads/candidate_dashboard_qamdpi.png" alt="Candidate Console" width={1400} height={900} />
              <div className={styles.caption}><strong>Candidate Console:</strong> A personalized experience for job seekers to manage profiles and applications.</div>
            </div>
            <div className={`${styles['screenshot-item']} fade-up`} style={{ gridColumn: '1 / -1' }}>
              <Image src="https://res.cloudinary.com/dr9gcw73m/image/upload/v1775323575/codverse/uploads/ai_interview_room_zg1bje.png" alt="AI Interview Room" width={1600} height={900} />
              <div className={styles.caption}><strong>The AI Interview Room:</strong> The crown jewel. A professional, distraction-free environment for AI-led assessments.</div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ textAlign: 'center', padding: '5rem 0' }} className="fade-up">
        <h3>Want to see more of our work?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Explore our other engineering marvels and automation systems.</p>
        <Link href="/portfolio" className="btn btn-outline">Browse Portfolio</Link>
      </div>
    </>
  );
}
