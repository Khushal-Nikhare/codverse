'use client';

import { motion } from 'framer-motion';

export default function HolographicPanel({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`holographic-panel ${className}`}
    >
      <div className="panel-content">
        {children}
      </div>
      <style jsx>{`
        .holographic-panel {
          position: relative;
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          padding: 2rem;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(0, 245, 255, 0.05);
        }
        .holographic-panel::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(0, 245, 255, 0.1) 0%, transparent 70%);
          pointer-events: none;
          animation: gravitational-lensing 10s linear infinite;
        }
        @keyframes gravitational-lensing {
          0% { transform: translate(-10%, -10%) rotate(0deg); }
          100% { transform: translate(10%, 10%) rotate(360deg); }
        }
        .panel-content {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </motion.div>
  );
}
