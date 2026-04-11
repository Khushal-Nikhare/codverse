'use client';

import { motion } from 'framer-motion';

export default function InterceptedTransmission({ quote, author, company }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="transmission-card"
    >
      <div className="transmission-header">
        <span className="protocol">SIGNAL_INTERCEPTED // DECODING...</span>
        <div className="blink-dot" />
      </div>
      <div className="transmission-body">
        <p className="quote">"{quote}"</p>
        <div className="author-line">
          <span className="author">{author}</span>
          <span className="divider">/</span>
          <span className="company">{company}</span>
        </div>
      </div>
      <div className="scan-line" />
      <style jsx>{`
        .transmission-card {
          background: rgba(0, 245, 255, 0.03);
          border: 1px solid rgba(0, 245, 255, 0.2);
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 600px;
          margin: 2rem auto;
          backdrop-filter: blur(4px);
        }
        .transmission-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .protocol {
          font-family: var(--font-technical);
          font-size: 0.7rem;
          color: var(--accent-cyan);
          letter-spacing: 0.2em;
        }
        .blink-dot {
          width: 6px;
          height: 6px;
          background: #ff0000;
          border-radius: 50%;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .transmission-body {
          position: relative;
          z-index: 1;
        }
        .quote {
          font-family: var(--font-body);
          font-size: 1.1rem;
          color: var(--text-stellar);
          line-height: 1.8;
          margin-bottom: 2rem;
          font-style: italic;
        }
        .author-line {
          font-family: var(--font-technical);
          font-size: 0.9rem;
          display: flex;
          gap: 0.5rem;
          color: var(--accent-cyan);
        }
        .divider {
          opacity: 0.5;
        }
        .company {
          color: var(--accent-amber);
        }
        .scan-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, transparent, var(--accent-cyan), transparent);
          opacity: 0.3;
          animation: scan 4s linear infinite;
        }
        @keyframes scan {
          0% { top: -2%; }
          100% { top: 102%; }
        }
      `}</style>
    </motion.div>
  );
}
