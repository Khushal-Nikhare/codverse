'use client';

import { motion } from 'framer-motion';

export default function IndustryGrid({ industries }) {
  return (
    <div className="industry-grid">
      {industries.map((industry, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="industry-item"
        >
          <motion.div
            whileHover={{ y: -10 }}
            className="icon-orb"
          >
            <industry.icon size={32} />
            <div className="orbit-ring" />
          </motion.div>
          <span className="label">{industry.name}</span>
        </motion.div>
      ))}
      <style jsx>{`
        .industry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }
        .industry-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .icon-orb {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(0, 245, 255, 0.05);
          border: 1px solid rgba(0, 245, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: var(--accent-cyan);
          transition: all 0.3s ease;
        }
        .industry-item:hover .icon-orb {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 20px rgba(0, 245, 255, 0.3);
          color: white;
        }
        .orbit-ring {
          position: absolute;
          width: 110%;
          height: 110%;
          border: 1px solid rgba(255, 184, 0, 0.2);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .industry-item:hover .orbit-ring {
          opacity: 1;
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .label {
          font-family: var(--font-technical);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          text-align: center;
        }
      `}</style>
    </div>
  );
}
