'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';
import Navbar from './Navbar';
import WhatsAppButton from './WhatsAppButton';

const noDefaultChromeRoutes = new Set(['/dashboard', '/login', '/signup']);

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const hideDefaultChrome = noDefaultChromeRoutes.has(pathname);

  return (
    <>
      {!hideDefaultChrome && <Navbar />}
      {children}
      {!hideDefaultChrome && <Footer />}
      {!hideDefaultChrome && <WhatsAppButton />}
    </>
  );
}
