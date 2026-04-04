'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const scriptUrl = 'https://script.google.com/macros/s/AKfycbync6BsZi1QX1zNr21LtpQFGRyoo5pPbuyxGJTP5eiGknNdYkLGClVZF4O9UVdGNCX0qg/exec';

const serviceCopy = {
  'starter-website': 'I am interested in the Starter Website package.',
  automation: 'I am interested in the Automation Setup package.',
  'web-app': 'I am interested in the Web App Development package.',
};

export default function EnquiryForm() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [result, setResult] = useState({ text: '', type: '' });

  useEffect(() => {
    const service = searchParams.get('service');
    if (service && serviceCopy[service]) {
      setFormState((prev) => ({
        ...prev,
        message: prev.message || serviceCopy[service],
      }));
    }
  }, [searchParams]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setResult({ text: '', type: '' });

    try {
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      setResult({ text: 'Success! Your message has been sent.', type: 'success' });
      setFormState({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setResult({ text: 'Error! Please try again later.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" style={{ color: 'var(--text-main)', fontFamily: "'Space Grotesk', sans-serif" }}>
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
          placeholder="John Doe"
          style={{ background: 'var(--bg-deep)', borderColor: 'var(--glass-border)', color: 'var(--text-main)' }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" style={{ color: 'var(--text-main)', fontFamily: "'Space Grotesk', sans-serif" }}>
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
          placeholder="john@example.com"
          style={{ background: 'var(--bg-deep)', borderColor: 'var(--glass-border)', color: 'var(--text-main)' }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone" style={{ color: 'var(--text-main)', fontFamily: "'Space Grotesk', sans-serif" }}>
          Mobile Number (Optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formState.phone}
          onChange={handleChange}
          placeholder="+91 12345 67890"
          style={{ background: 'var(--bg-deep)', borderColor: 'var(--glass-border)', color: 'var(--text-main)' }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message" style={{ color: 'var(--text-main)', fontFamily: "'Space Grotesk', sans-serif" }}>
          Description
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your project requirements..."
          style={{ background: 'var(--bg-deep)', borderColor: 'var(--glass-border)', color: 'var(--text-main)' }}
        ></textarea>
      </div>

      <div
        id="form-message"
        className={result.text ? 'visible' : ''}
        style={{
          display: result.text ? 'block' : 'none',
          backgroundColor: result.type === 'success' ? 'rgba(74, 222, 128, 0.2)' : 'rgba(248, 113, 113, 0.2)',
          color: result.type === 'success' ? '#22c55e' : '#ef4444',
        }}
      >
        {result.text}
      </div>

      <button
        type="submit"
        className={`btn btn-primary ${isSubmitting ? 'btn-loading' : ''}`}
        id="submit-btn"
        style={{ width: '100%', padding: '1.25rem' }}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="spinner"></span>
            Sending...
          </>
        ) : (
          'Initiate Project'
        )}
      </button>
    </form>
  );
}
