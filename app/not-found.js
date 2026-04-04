import Link from 'next/link';
import styles from './not-found.module.css';

export const metadata = {
  title: '404 Not Found',
  description: 'The page you were looking for could not be found on Codverse Tech.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className={styles['error-wrap']}>
      <section className={styles['error-card']}>
        <p
          className="micro-label"
          style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700, color: 'var(--secondary)', marginBottom: '1rem' }}
        >
          Page Not Found
        </p>
        <h1 className={styles['error-code']}>404</h1>
        <h2 style={{ marginBottom: '1rem' }}>We couldn&apos;t find that page.</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto' }}>
          The page may have been moved, renamed, or the link you followed is outdated. Use the navigation below to get back to the main site.
        </p>
        <div className={styles['error-actions']}>
          <Link href="/" className="btn btn-primary">Go Home</Link>
          <Link href="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
