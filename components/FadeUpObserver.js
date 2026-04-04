'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function FadeUpObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-up');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          instance.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
