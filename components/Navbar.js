'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

function ThemeIcon({ dark }) {
  if (dark) {
    return <Sun size={20} id="theme-icon" />;
  }

  return <Moon size={20} id="theme-icon" />;
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initialTheme);
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          <Image src="https://res.cloudinary.com/dr9gcw73m/image/upload/v1775323445/codverse/uploads/logo_lwdiif.jpg" alt="Codverse Tech" id="site-logo" width={180} height={48} priority style={{ width: 'auto' }} />
        </Link>
        <button className="hamburger" aria-label="Toggle Navigation" onClick={() => setMobileOpen((prev) => !prev)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className={`nav-links ${mobileOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={pathname === item.href ? 'active' : ''}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button className="theme-toggle" id="theme-toggle" aria-label="Toggle Dark Mode" onClick={toggleTheme}>
              <ThemeIcon dark={theme === 'dark'} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
