'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Globe, 
  Search, 
  ArrowRight, 
  Shield, 
  ShoppingBag, 
  Truck, 
  CreditCard, 
  Activity, 
  BarChart3, 
  Mail 
} from 'lucide-react';

import Starfield from '@/components/Starfield';
import CustomCursor from '@/components/CustomCursor';
import StatOrb from '@/components/StatOrb';
import FeatureCard from '@/components/FeatureCard';
import HolographicPanel from '@/components/HolographicPanel';
import InterceptedTransmission from '@/components/InterceptedTransmission';
import IndustryGrid from '@/components/IndustryGrid';

export default function AntigravityHome() {
  const industries = [
    { name: 'Ecommerce Systems', icon: ShoppingBag },
    { name: 'Shipping & Logistics', icon: Truck },
    { name: 'Financial & Payment', icon: CreditCard },
    { name: 'Operations', icon: Activity },
    { name: 'Accounting & Tax', icon: BarChart3 },
    { name: 'Marketing', icon: Mail },
  ];

  return (
    <div className="antigravity-layout">
      <CustomCursor />
      <Starfield />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-content"
          >
            <h1 className="hero-title">
              ANTIGRAVITY <br />
              <span className="accent">COMMERCE PLATFORM</span>
            </h1>
            <div className="title-underline" />
            <p className="hero-subtitle">
              Propel your eCommerce architecture into the next dimension of connectivity. 
              Zero latency. Infinite scale. Orbital precision.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-beacon">
                <span>START MISSION</span>
                <div className="beacon-pulse" />
              </Link>
              <Link href="/portfolio" className="btn-ghost">
                EXPLORE ORBIT
              </Link>
            </div>
          </motion.div>
          
          {/* Floating UI Cards */}
          <div className="floating-ui-container">
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="ui-card glass pos-1"
            >
              <div className="card-header"><Activity size={12} /> LIVE_FEED</div>
              <div className="card-body">Processing 14.2k tx/s</div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="ui-card glass pos-2"
            >
              <div className="card-header"><Shield size={12} /> SECURE</div>
              <div className="card-body">99.99% Uptime</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <StatOrb number="15M+" label="Merchants Worldwide" delay={0.1} />
            <StatOrb number="1.7B+" label="Total API Calls" delay={0.3} />
            <StatOrb number="76%" label="Increased Retention" delay={0.5} />
            <StatOrb number="550+" label="Global Platforms" delay={0.7} />
          </div>
        </div>
        <div className="gravity-wave" />
      </section>

      <div className="gravity-horizon" />

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">THE CONNECTIVITY FRAMEWORK</h2>
          <div className="grid-3">
            <FeatureCard 
              icon={Globe} 
              title="Global Sync" 
              description="Unified data architecture that synchronizes across every marketplace and commerce engine in real-time."
            />
            <FeatureCard 
              icon={Rocket} 
              title="Instant Scaling" 
              description="Proprietary auto-node allocation system that scales your connectivity as your volume increases."
            />
            <FeatureCard 
              icon={Search} 
              title="Deep Visibility" 
              description="Holographic data visualization providing near-infinite detail on every transaction and consumer touchpoint."
            />
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="metrics-section">
        <div className="container">
          <HolographicPanel className="main-metric-panel">
            <div className="metric-header">
              <BarChart3 className="metric-icon" />
              <h2>SYSTEM GROWTH METRICS</h2>
            </div>
            <div className="metric-content">
              <p>Our neural connectivity engine processes multi-channel data with Zero-G efficiency, eliminating traditional friction in commerce networks.</p>
              <div className="fake-chart">
                {/* Visual representation of a chart using divs */}
                <div className="bar" style={{ height: '40%' }} />
                <div className="bar" style={{ height: '60%' }} />
                <div className="bar" style={{ height: '80%' }} />
                <div className="bar" style={{ height: '50%' }} />
                <div className="bar" style={{ height: '90%' }} />
              </div>
            </div>
          </HolographicPanel>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <InterceptedTransmission 
            quote="Antigravity has completely redefined how we manage our global retail network. The orbital visibility is unmatched."
            author="Sarah Chen"
            company="Mastercard Global"
          />
        </div>
      </section>

      {/* Industries Grid */}
      <section className="industries-section">
        <div className="container">
          <h2 className="section-title">UNIVERSAL INTEGRATIONS</h2>
          <IndustryGrid industries={industries} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="gravity-beacon-container"
          >
            <div className="planet-orb">
              <div className="planet-surface" />
              <div className="planet-rings" />
              <div className="planet-content">
                <h2>READY FOR <br /> LIFTOFF?</h2>
                <Link href="/contact" className="btn-primary">
                  GET STARTED TODAY
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mission-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col brand">
              <h3 className="logo">ANTIGRAVITY</h3>
              <p>Orbital Commerce Connectivity Framework v4.2.0</p>
            </div>
            <div className="footer-col log">
              <h4>MISSION LOG</h4>
              <Link href="/services">01_SERVICES</Link>
              <Link href="/portfolio">02_PORTFOLIO</Link>
              <Link href="/blog">03_TRANSMISSIONS</Link>
            </div>
            <div className="footer-col log">
              <h4>TELEMETRY</h4>
              <Link href="/contact">04_CONNECT</Link>
              <Link href="/about">05_MANIFESTO</Link>
              <Link href="/privacy">06_PROTOCOL</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 ANTIGRAVITY CONTROL. ALL SYSTEMS NOMINAL.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .antigravity-layout {
          background-color: var(--bg-deep);
          color: var(--text-stellar);
          overflow-x: hidden;
        }
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 5rem;
        }
        .hero-content {
          max-width: 800px;
          position: relative;
          z-index: 10;
        }
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 10vw, 6rem);
          line-height: 0.9;
          letter-spacing: -0.02em;
          margin-bottom: 2rem;
        }
        .hero-title .accent {
          color: var(--accent-cyan);
          background: linear-gradient(90deg, var(--accent-cyan), var(--accent-amber));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .title-underline {
          width: 200px;
          height: 4px;
          background: var(--accent-cyan);
          box-shadow: 0 0 20px var(--accent-cyan);
          margin-bottom: 2.5rem;
        }
        .hero-subtitle {
          font-family: var(--font-body);
          font-size: 1.25rem;
          color: var(--text-muted);
          max-width: 600px;
          margin-bottom: 3.5rem;
        }
        .hero-actions {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .btn-beacon {
          background: var(--accent-cyan);
          color: var(--bg-deep);
          padding: 1rem 2.5rem;
          font-family: var(--font-display);
          font-weight: 700;
          border-radius: var(--radius-full);
          position: relative;
          transition: all 0.3s ease;
        }
        .btn-beacon:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px var(--accent-cyan);
        }
        .beacon-pulse {
          position: absolute;
          inset: 0;
          border-radius: var(--radius-full);
          border: 2px solid var(--accent-cyan);
          animation: beacon-ripple 2s infinite;
        }
        @keyframes beacon-ripple {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .btn-ghost {
          font-family: var(--font-technical);
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 245, 255, 0.3);
          padding: 1rem 2.5rem;
          border-radius: var(--radius-full);
          transition: all 0.3s ease;
        }
        .btn-ghost:hover {
          background: rgba(0, 245, 255, 0.1);
          border-color: var(--accent-cyan);
        }
        .floating-ui-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .ui-card {
          position: absolute;
          padding: 1rem;
          border-radius: var(--radius-md);
          font-family: var(--font-technical);
          font-size: 0.75rem;
          min-width: 180px;
        }
        .ui-card.pos-1 { top: 20%; right: 10%; }
        .ui-card.pos-2 { bottom: 30%; right: 20%; }
        .card-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          color: var(--accent-cyan);
          margin-bottom: 0.5rem;
        }

        .stats-section {
          padding: 8rem 0;
          position: relative;
        }
        .stats-grid {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 3rem;
        }
        .gravity-wave {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 150%;
          height: 200px;
          background: radial-gradient(ellipse at bottom, rgba(0, 245, 255, 0.1), transparent 70%);
          pointer-events: none;
        }

        .gravity-horizon {
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent-cyan), transparent);
          width: 100%;
          opacity: 0.3;
          margin: 4rem 0;
        }

        .section-title {
          text-align: center;
          font-family: var(--font-display);
          font-size: 2.5rem;
          margin-bottom: 5rem;
          letter-spacing: 0.2em;
        }

        .metrics-section {
          padding: 10rem 0;
        }
        .metric-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        .metric-icon {
          color: var(--accent-cyan);
          width: 48px;
          height: 48px;
        }
        .fake-chart {
          display: flex;
          align-items: flex-end;
          gap: 1rem;
          height: 200px;
          margin-top: 3rem;
          padding: 1rem;
          border-bottom: 1px solid var(--glass-border);
          border-left: 1px solid var(--glass-border);
        }
        .bar {
          flex: 1;
          background: linear-gradient(to top, var(--accent-cyan), transparent);
          border-radius: 4px 4px 0 0;
        }

        .cta-section {
          padding: 12rem 0;
          display: flex;
          justify-content: center;
        }
        .planet-orb {
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: #000;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 0 100px rgba(0, 245, 255, 0.2);
        }
        .planet-surface {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 30% 30%, rgba(0, 245, 255, 0.2), transparent);
          animation: pulse 4s infinite ease-in-out;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .planet-rings {
          position: absolute;
          width: 140%;
          height: 140%;
          border: 1px solid rgba(0, 245, 255, 0.1);
          border-radius: 50%;
          transform: rotateX(70deg);
        }
        .planet-content {
          text-align: center;
          z-index: 10;
        }
        .planet-content h2 {
          font-family: var(--font-display);
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        .mission-footer {
          padding: 8rem 0 4rem;
          background: rgba(5, 13, 26, 0.8);
          border-top: 1px solid var(--glass-border);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 6rem;
        }
        .footer-col h4 {
          font-family: var(--font-display);
          font-size: 0.9rem;
          color: var(--accent-cyan);
          margin-bottom: 2rem;
        }
        .footer-col.log {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-col.log a {
          font-family: var(--font-technical);
          font-size: 0.8rem;
          color: var(--text-muted);
          transition: color 0.3s;
        }
        .footer-col.log a:hover {
          color: var(--accent-cyan);
        }
        .footer-bottom {
          border-top: 1px solid rgba(240, 248, 255, 0.1);
          padding-top: 2rem;
          text-align: center;
          font-family: var(--font-technical);
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 3.5rem; }
          .stats-grid { flex-direction: column; align-items: center; }
          .planet-orb { width: 300px; height: 300px; }
        }
      `}</style>
    </div>
  );
}
