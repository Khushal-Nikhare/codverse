import Link from 'next/link';
import styles from './blog.module.css';

export const metadata = {
  title: 'Blog | Engineering Insights & Tech Resources',
  description: 'Practical guides on web engineering, automation, and scaling digital products from Codverse Tech.',
};

const posts = [
  {
    id: 1,
    title: 'How a professional website turned our client\'s leads into sales',
    excerpt: 'Case study on how we redesigned a stagnant B2B platform and achieved a 40% increase in conversion rates within 3 months.',
    category: 'Business Growth',
    author: 'Khushal Nikhare',
    date: 'April 8, 2026',
    readTime: '5 min read',
    image: '📈',
  },
  {
    id: 2,
    title: 'Why your business needs more than just a social media page',
    excerpt: 'Algorithms change, but your own domain is permanent. Explore why a central digital hub is the foundation of long-term online growth.',
    category: 'Online Presence',
    author: 'Engineering Team',
    date: 'April 2, 2026',
    readTime: '7 min read',
    image: '🌐',
  },
  {
    id: 3,
    title: '5 signs your business is ready for a custom website',
    excerpt: 'When templates start to feel restrictive, it is time to build a platform that fits your unique business logic and growth plans.',
    category: 'Digital Strategy',
    author: 'Tech Strategist',
    date: 'March 25, 2026',
    readTime: '6 min read',
    image: '🛡️',
  },
];

export default function BlogPage() {
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
              <span style={{ fontSize: '8rem' }}>{posts[0].image}</span>
            </div>
            <div className={styles.featuredContent}>
              <span className={styles.categoryTag}>{posts[0].category}</span>
              <h3>{posts[0].title}</h3>
              <p>{posts[0].excerpt}</p>
              <div className={styles.featuredFooter}>
                <div className={styles.author}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold', color: '#fff' }}>
                    {posts[0].author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <span style={{ display: 'block', fontWeight: 700, color: 'var(--text-headline)' }}>{posts[0].author}</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{posts[0].date} • {posts[0].readTime}</span>
                  </div>
                </div>
                <Link href={`/blog/${posts[0].id}`} className={styles.featuredBtn}>
                  Read Full Article →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <div className={styles.categoryFilters}>
          {['All', 'Business Growth', 'Online Presence', 'Digital Strategy', 'Case Studies'].map((cat, i) => (
            <button key={cat} className={`${styles.filterBtn} ${i === 0 ? styles.active : ''}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div id="posts" className={styles.blogGrid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.blogCard}>
              <div className={styles.cardImage}>
                <span className={styles.categoryTag}>{post.category}</span>
                <span style={{ fontSize: '4.5rem' }}>{post.image}</span>
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
                  <Link href={`/blog/${post.id}`} className={styles.readMore}>
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
          <div className={styles.stripForm}>
            <input type="email" placeholder="Your work email" className={styles.stripInput} />
            <button className={styles.stripBtn}>Subscribe Now</button>
          </div>
        </section>
      </div>
    </div>
  );
}
