import Link from 'next/link';
import styles from './blog.module.css';

export const metadata = {
  title: 'Blog | Engineering Insights & Tech Resources',
  description: 'Practical guides on web engineering, automation, and scaling digital products from Codverse Tech.',
};

const posts = [
  {
    id: 1,
    title: 'How automation saved our client 40 hours/week',
    excerpt: 'Discover how we implemented custom automation workflows to eliminate manual data entry and repetitive tasks.',
    category: 'Automation',
    author: 'Codverse Engineering',
    date: 'April 5, 2026',
    readTime: '6 min read',
    image: '⚙️',
  },
  {
    id: 2,
    title: 'Next.js vs Remix in 2025: which to choose for your agency',
    excerpt: 'Detailed comparison of the two most popular React frameworks for building modern web applications.',
    category: 'Web Engineering',
    author: 'Tech Lead',
    date: 'March 28, 2026',
    readTime: '8 min read',
    image: '💻',
  },
  {
    id: 3,
    title: '5 signs your business is ready for a custom enterprise app',
    excerpt: 'When off-the-shelf software stops working, it is time to build something tailored to your unique workflows.',
    category: 'App Development',
    author: 'Product Strategist',
    date: 'March 15, 2026',
    readTime: '5 min read',
    image: '📱',
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
          {['All', 'Web Engineering', 'Automation', 'App Development', 'Case Studies', 'Business Growth'].map((cat, i) => (
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
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--primary-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>CT</div>
                    <span>{post.author}</span>
                  </div>
                  <span>{post.date}</span>
                </div>
                <div className={styles.cardFooter} style={{ marginTop: '1rem' }}>
                  <span>{post.readTime}</span>
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
