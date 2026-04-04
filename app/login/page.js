import Image from 'next/image';
import Link from 'next/link';
import styles from './login.module.css';

export const metadata = {
  title: 'Login',
  alternates: {
    canonical: 'https://www.codverse.in/login',
  },
};

export default function LoginPage() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link href="/" className="logo">
            <Image src="/assets/logo.jpg" alt="Codverse Tech" id="site-logo" width={180} height={48} priority />
          </Link>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/signup" className="btn btn-outline">Sign Up</Link></li>
          </ul>
        </div>
      </nav>

      <div className={styles['auth-wrapper']}>
        <div className={styles['auth-card']}>
          <div className={styles['auth-logo']}>
            <Image src="/assets/logo.jpg" alt="Codverse Tech Logo" width={200} height={60} />
          </div>
          <h2>Welcome Back</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Log in to access your Codverse Tech Dashboard</p>
          <form action="/dashboard">
            <div className={styles['form-group']}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" required placeholder="name@company.com" />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Log In</button>
          </form>
          <p style={{ marginTop: '1.5rem' }}>
            Don&apos;t have an account? <Link href="/signup" style={{ color: 'var(--primary)' }}>Sign up</Link>
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
