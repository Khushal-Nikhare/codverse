"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './blog.module.css';

export default function BlogListClient({ allPosts, categories }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  // Featured post is always the first one, grid posts depend on filter
  const featuredPost = allPosts[0];
  const gridPosts = activeCategory === 'All' 
    ? allPosts 
    : allPosts.filter(p => p.category === activeCategory);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className={styles.blogPage}>
      {/* Hero Block */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Engineering Growth</span>
          <h1 className={styles.heroHeadline}>Build Better. Scale Faster.</h1>
          <p className={styles.heroSubtitle}>
            Practical field notes on web engineering, automation, and turning tech into a growth engine.
          </p>
          
          <div className={styles.trustBar}>
            <div className={styles.trustMetric}>
              <span className={styles.metricValue}>50+</span>
              <span className={styles.metricLabel}>Modern Builds</span>
            </div>
            <div className={styles.trustMetric}>
              <span className={styles.metricValue}>2.5k</span>
              <span className={styles.metricLabel}>Weekly Readers</span>
            </div>
            <div className={styles.trustMetric}>
              <span className={styles.metricValue}>150+</span>
              <span className={styles.metricLabel}>Automations</span>
            </div>
            <div className={styles.trustMetric}>
              <span className={styles.metricValue}>60%</span>
              <span className={styles.metricLabel}>Efficiency Gain</span>
            </div>
          </div>

          <Link href="#featured" className={styles.heroButton}>
            Start Reading →
          </Link>
        </div>
      </header>

      <div className="container">
        {/* Featured Article */}
        <section id="featured" className={styles.featuredSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Must Read</span>
            <h2>Featured Deep Dive</h2>
          </div>
          <div className={styles.featuredCard}>
            <div className={styles.featuredImage}>
              <span style={{ fontSize: '8rem' }}>{featuredPost.emoji}</span>
            </div>
            <div className={styles.featuredContent}>
              <span className={styles.categoryTag}>{featuredPost.category}</span>
              <h3>{featuredPost.title}</h3>
              <p>{featuredPost.excerpt}</p>
              <div className={styles.featuredFooter}>
                <div className={styles.author}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold', color: '#fff' }}>
                    {featuredPost.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <span style={{ display: 'block', fontWeight: 700, color: 'var(--text-headline)' }}>{featuredPost.author}</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{featuredPost.date} • {featuredPost.readTime}</span>
                  </div>
                </div>
                <Link href={`/blog/${featuredPost.slug}`} className={styles.featuredBtn}>
                  Read Full Article →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <div className={styles.categoryFilters}>
          {categories.map((cat) => (
            <button 
              key={cat} 
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div id="posts" className={styles.blogGrid}>
          {gridPosts.map((post) => (
            <article key={post.slug} className={styles.blogCard}>
              <div className={styles.cardImage}>
                <span className={styles.categoryTag}>{post.category}</span>
                <span style={{ fontSize: '4.5rem' }}>{post.emoji}</span>
              </div>
              <div className={styles.cardContent}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.author}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold', color: '#fff' }}>
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontWeight: 700, color: 'var(--text-headline)' }}>{post.author}</span>
                      <span style={{ fontSize: '0.75rem' }}>{post.date} • {post.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                    Read Article →
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {/* Coming Soon Card */}
          <article className={`${styles.blogCard} ${styles.comingSoonCard}`}>
            <div className={styles.cardImage}>
              <span style={{ fontSize: '4.5rem', opacity: 0.3 }}>⌛</span>
            </div>
            <div className={styles.cardContent}>
              <span className={styles.comingSoonBadge}>Dropping Next Week</span>
              <h3>The Blueprint for Scaling Service Agencies to $1M+ ARR</h3>
              <p>We are condensing 5 years of engineering operations into one actionable guide. Do not miss it.</p>
              <div className={styles.cardFooter} style={{ borderTop: 'none', paddingTop: 0 }}>
                <Link href="#newsletter" className={styles.notifyBtn}>
                  Notify Me →
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* Bold CTA consultation block */}
        <section className={styles.boldLeadPanel}>
          <div className={styles.panelContent}>
            <span className={styles.panelLabel}>Limited Availability</span>
            <h2>Ready to scale your business with custom tech?</h2>
            <p>Book a strategy call to audit your current stack and identify high-impact automation opportunities.</p>
            <div className={styles.panelActions}>
              <Link href="/contact" className={styles.panelBtnPrimary}>Book Free Strategy Call</Link>
              <Link href="/portfolio" className={styles.panelBtnSecondary}>View Our Private Case Studies</Link>
            </div>
          </div>
        </section>

        {/* Newsletter Strip */}
        <section id="newsletter" className={styles.newsletterStrip}>
          <div className={styles.stripLogo}>📩</div>
          <div className={styles.stripText}>
            <h4>Join 2,500+ growth-minded founders.</h4>
            <p>Weekly field notes on engineering and automation.</p>
          </div>
          <form className={styles.stripForm} onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Your work email" 
              className={styles.stripInput} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.stripBtn} disabled={status === 'loading'}>
              {status === 'loading' ? 'Loading...' : 'Subscribe Now'}
            </button>
          </form>
          {status === 'success' && <p style={{ color: '#25d366', marginTop: '1rem', width: '100%', textAlign: 'right' }}>Subscribed successfully!</p>}
          {status === 'error' && <p style={{ color: '#ff6b6b', marginTop: '1rem', width: '100%', textAlign: 'right' }}>An error occurred. Please try again.</p>}
        </section>
      </div>
    </div>
  );
}
