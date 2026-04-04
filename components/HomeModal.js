'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomeModal() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('popupShown')) return;

    const timer = setTimeout(() => {
      setActive(true);
      sessionStorage.setItem('popupShown', 'true');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="cta-modal" className={`modal-overlay ${active ? 'active' : ''}`} onClick={() => setActive(false)}>
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <button id="close-modal-x" className="close-x" aria-label="Close Modal" onClick={() => setActive(false)}>
          &times;
        </button>
        <h2 className="modal-title">Ready to Elevate Your Business?</h2>
        <p className="modal-description">
          We specialize in engineering high-performance websites and intelligent automation tailored for your growth.
        </p>
        <div className="modal-actions">
          <Link href="/contact" className="btn btn-primary">Get Started</Link>
          <button id="close-modal" className="btn btn-outline" onClick={() => setActive(false)}>
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}
