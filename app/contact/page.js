import EnquiryForm from '@/components/EnquiryForm';
import { Suspense } from 'react';

export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Codverse Tech to discuss your next web development or business automation project.',
  alternates: {
    canonical: 'https://www.codverse.in/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <header className="hero">
        <div className="container fade-up">
          <span
            className="micro-label"
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              fontWeight: 700,
              color: 'var(--secondary)',
              marginBottom: '1rem',
              display: 'block',
            }}
          >
            Get in Touch
          </span>
          <h1>Project Inquiry</h1>
          <p>Let&apos;s discuss how we can engineer your next digital breakthrough.</p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="contact-wrapper fade-up">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Whether you need a new website, a custom automation flow, or a complex web app, we&apos;re ready to
                bring your ideas to life.
              </p>

              <div className="contact-details">
                <div><strong>Email:</strong> codverse.software@gmail.com</div>
                <div><strong>Phone:</strong> +91 72809 48182</div>
                <div><strong>Hours:</strong> Mon - Fri, 9am - 6pm</div>
              </div>
            </div>

            <div
              className="contact-form glass"
              style={{
                padding: '3.5rem',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--surface-low)',
                borderColor: 'var(--primary-glow)',
              }}
            >
              <Suspense fallback={null}>
                <EnquiryForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
