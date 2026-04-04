import Image from 'next/image';
import Link from 'next/link';
import styles from './signup.module.css';

export const metadata = {
  title: 'Sign Up',
  alternates: {
    canonical: 'https://www.codverse.in/signup',
  },
};

export default function SignupPage() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link href="/" className="logo">
            <Image src="https://res.cloudinary.com/dr9gcw73m/image/upload/v1775323445/codverse/uploads/logo_lwdiif.jpg" alt="Codverse Tech" id="site-logo" width={180} height={48} priority />
          </Link>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/login" className="btn btn-outline">Log In</Link></li>
          </ul>
        </div>
      </nav>

      <div className={styles['auth-wrapper']}>
        <div className={styles['auth-card']}>
          <div className={styles['auth-logo']}>
            <Image src="https://res.cloudinary.com/dr9gcw73m/image/upload/v1775323445/codverse/uploads/logo_lwdiif.jpg" alt="Codverse Tech Logo" width={200} height={60} />
          </div>
          <h2>Create Your Account</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Join Codverse Tech for innovative software solutions.
          </p>
          <form action="/dashboard">
            <div className={styles['form-group']}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" required placeholder="John Doe" />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" required placeholder="name@company.com" />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Create Account</button>
          </form>
          <p style={{ marginTop: '1.5rem' }}>
            Already have an account? <Link href="/login" style={{ color: 'var(--primary)' }}>Log In</Link>
          </p>
        </div>
      </div>

      <footer style={{ marginTop: '4rem' }}>
        <div className="container">
          <p>&copy; 2026 Codverse Tech. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
