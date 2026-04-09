import Link from 'next/link';
import { Users, Filter, BarChart, Settings, Mail, PhoneIncoming } from 'lucide-react';

export const metadata = {
  title: 'CRM Setup in India — Codverse Tech',
  description: 'Manage your leads effectively with professional custom CRM setup in India. We configure Hubspot, Zoho, and custom CRM systems to streamline your sales pipeline.',
  alternates: {
    canonical: 'https://www.codverse.in/services/crm-setup',
  },
};

export default function CrmSetupPage() {
  return (
    <>
      <header className="hero">
        <div className="container fade-up">
          <Link href="/services" style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'inline-block' }}>&larr; Back to Services</Link>
          <span className="micro-label" style={{ textTransform: 'uppercase', letterSpacing: '0.2rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '1rem', display: 'block' }}>
            Lead Management
          </span>
          <h1>Custom CRM Setup India</h1>
          <p style={{ maxWidth: '800px', marginInline: 'auto' }}>
            Take control of your growth with a high-performance custom CRM setup in India. 
            We build the infrastructure that converts visitors into life-long customers.
          </p>
        </div>
      </header>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="fade-up">
              <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Sales Pipeline Engineering</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Our <strong>custom CRM setup India</strong> services are focused on creating a frictionless sales 
                experience. We specialize in configuring platforms like Hubspot and Zoho, as well as building custom 
                CRM modules that integrate directly with your website. We ensure your lead scoring, email tracking, 
                and sales stage automation are all working in harmony to maximize your team&apos;s efficiency.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--primary)' }}><Filter size={32} /></div>
                  <span style={{ fontWeight: 600 }}>Lead Scoring Logic</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--secondary)' }}><BarChart size={32} /></div>
                  <span style={{ fontWeight: 600 }}>Revenue Dashboards</span>
                </div>
              </div>
            </div>
            <div className="card glass fade-up" style={{ padding: '3rem' }}>
              <h3 style={{ marginBottom: '2rem' }}>What We Deliver</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Hubspot & Zoho CRM Configuration',
                  'Custom Pipeline & Sequence Build',
                  'Website Lead Form Integration',
                  'Automated Email Nurture Flows',
                  'Sales Performance Analytics',
                  'Team Training & Documentation'
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ color: 'var(--primary)' }}><Users size={18} /></div>
                    <span style={{ color: 'var(--text-muted)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--surface-low)', padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title fade-up">Key CRM Features</h2>
          <div className="grid-3" style={{ marginTop: '4rem' }}>
            <div className="card fade-up">
              <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><Mail size={40} /></div>
              <h3>Automated Outreach</h3>
              <p style={{ color: 'var(--text-muted)' }}>Never miss a follow-up with perfectly timed email sequences and task reminders.</p>
            </div>
            <div className="card fade-up">
              <div style={{ color: 'var(--secondary)', marginBottom: '1rem' }}><PhoneIncoming size={40} /></div>
              <h3>Call & Log Activity</h3>
              <p style={{ color: 'var(--text-muted)' }}>Track every interaction to provide a personalized experience for every prospect.</p>
            </div>
            <div className="card fade-up">
              <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><Settings size={40} /></div>
              <h3>Deep Config</h3>
              <p style={{ color: 'var(--text-muted)' }}>Advanced logic setups including weighted lead scoring and segment automation.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '8rem 0' }}>
        <div className="container fade-up">
          <div 
            className="card glass" 
            style={{ 
              textAlign: 'center', 
              padding: '5rem 2rem', 
              background: 'linear-gradient(135deg, var(--primary-glow), var(--secondary-glow))' 
            }}
          >
            <h2 style={{ marginBottom: '1.5rem' }}>Stop losing leads in spreadsheets.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', marginInline: 'auto' }}>
              Scale your sales with a world-class custom CRM setup in India from Codverse Tech.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact?service=crm-setup" className="btn btn-primary" style={{ padding: '1.25rem 3rem' }}>Configure My CRM</Link>
              <Link href="/" className="btn btn-outline" style={{ padding: '1.25rem 3rem' }}>Back to Home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
