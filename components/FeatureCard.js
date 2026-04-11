'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className="feature-card-wrapper"
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="feature-card"
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', damping: 10, stiffness: 100 }}
      >
        <div className="card-glow" />
        <div className="icon-container">
          <Icon size={40} className="feature-icon" />
          <div className="orbit-ring" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </motion.div>
      <style jsx>{`
        .feature-card-wrapper {
          width: 100%;
          height: 100%;
        }
        .feature-card {
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          padding: 3rem 2rem;
          text-align: center;
          position: relative;
          transform-style: preserve-3d;
          transition: border-color 0.3s;
          height: 100%;
        }
        .feature-card:hover {
          border-color: var(--accent-cyan);
        }
        .card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(0, 245, 255, 0.1), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .feature-card:hover .card-glow {
          opacity: 1;
        }
        .icon-container {
          position: relative;
          width: 80px;
          height: 80px;
          margin: 0 auto 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateZ(20px);
        }
        .feature-icon {
          color: var(--accent-cyan);
          filter: drop-shadow(0 0 10px rgba(0, 245, 255, 0.5));
          z-index: 2;
        }
        .orbit-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px dashed rgba(0, 245, 255, 0.3);
          border-radius: 50%;
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        h3 {
          font-family: var(--font-display);
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-stellar);
          transform: translateZ(30px);
        }
        p {
          font-family: var(--font-body);
          color: var(--text-muted);
          line-height: 1.6;
          transform: translateZ(10px);
        }
      `}</style>
    </motion.div>
  );
}
