'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function StatOrb({ number, label, delay = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(number.replace(/[^0-9.]/g, ''));
    if (isNaN(end)) return;
    
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, type: 'spring' }}
      className="stat-orb floating"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="orb-content">
        <div className="orb-number">
          {count}{number.replace(/[0-9.]/g, '')}
        </div>
        <div className="orb-label">{label}</div>
      </div>
      <div className="orb-ripple" />
      <style jsx>{`
        .stat-orb {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 1px solid var(--glass-border);
          background: radial-gradient(circle at 30% 30%, rgba(0, 245, 255, 0.1), transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          backdrop-filter: blur(8px);
        }
        .orb-content {
          text-align: center;
          z-index: 2;
        }
        .orb-number {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--accent-cyan);
          text-shadow: 0 0 20px rgba(0, 245, 255, 0.5);
        }
        .orb-label {
          font-family: var(--font-technical);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-top: 0.5rem;
        }
        .orb-ripple {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          border: 1px solid var(--accent-cyan);
          opacity: 0.2;
          animation: ripple 4s linear infinite;
        }
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </motion.div>
  );
}
