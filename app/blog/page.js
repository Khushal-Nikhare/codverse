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
          <span className={styles.heroLabel}>The Codverse Blog</span>
          <h1 className={styles.heroHeadline}>Stories, Ideas & Deep Dives</h1>
          <p className={styles.heroSubtitle}>
            Explorations in web engineering, automation, and the art of building things.
          </p>
          <Link href="#posts" className={styles.heroButton}>
            Browse All Posts →
          </Link>
        </div>
      </header>

      <div className="container">
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
                <span style={{ fontSize: '4rem' }}>{post.image}</span>
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
        </div>

        {/* Mid-page Lead Capture */}
        <section className={styles.leadBanner}>
          <div className={styles.leadContent}>
            <h2>Free Consultation</h2>
            <p>Get a custom tech roadmap for your business. We&apos;ll analyze your current stack and identify growth opportunities.</p>
            <div className={styles.subscribeBox} style={{ maxWidth: '600px' }}>
              <input type="email" placeholder="Your business email" className={styles.inputField} />
              <Link href="/contact" className="btn btn-primary" style={{ background: 'var(--text-headline)', color: 'var(--bg-deep)' }}>Book Free Call</Link>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className={styles.signupSection}>
          <h2>Stay Ahead of the Curve</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem' }}>Join 2,000+ founders and agencies getting expert tech insights every week.</p>
          <div className={styles.subscribeBox}>
            <input type="email" placeholder="Enter your email" className={styles.inputField} />
            <button className="btn btn-primary">Subscribe</button>
          </div>
          <p className={styles.trustLine}>No spam. Unsubscribe anytime.</p>
        </section>
      </div>
    </div>
  );
}
