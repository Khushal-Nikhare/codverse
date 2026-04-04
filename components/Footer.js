import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <p>&copy; 2026 Codverse Tech. All rights reserved.</p>
      </div>
    </footer>
  );
}
