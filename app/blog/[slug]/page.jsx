// import { getPostBySlug, getAllPosts } from '../../../lib/posts'; // Removing static imports
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import styles from '../blog.module.css';

export async function generateStaticParams() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/posts`);
    const data = await res.json();
    if (data.success) {
      return data.data.map((post) => ({
        slug: post.slug,
      }));
    }
  } catch (err) {
    console.error('Static params fetch error:', err);
  }
  return [];
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/posts/${slug}`);
  const data = await res.json();
  const post = data.success ? data.data : null;

  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: post.seo?.title || `${post.title} | Codverse Tech Blog`,
    description: post.seo?.description || post.excerpt,
  };
}

export default async function PostPage({ params }) {
  const { slug } = params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/posts/${slug}`, { cache: 'no-store' });
  const data = await res.json();
  const post = data.success ? data.data : null;
  
  if (!post) {
    return (
      <div className="container" style={{ padding: '8rem 0', textAlign: 'center', minHeight: '60vh' }}>
        <h1>Post not found</h1>
        <p style={{ color: 'var(--text-muted)', margin: '1rem 0 2rem' }}>The article you are looking for does not exist.</p>
        <Link href="/blog" className="btn btn-primary">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.blogPage}>
      <header className={styles.hero} style={{ padding: '8rem 0 4rem', minHeight: 'auto' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'left' }}>
           <Link href="/blog" style={{ color: '#ac8aff', textDecoration: 'none', fontWeight: 600, display: 'inline-block', marginBottom: '2rem' }}>
             ← Back to Blog
           </Link>
           <br/>
           <span className={styles.categoryTag} style={{ position: 'relative', top: 0, left: 0, marginBottom: '2rem', display: 'inline-block' }}>{post.category}</span>
           <h1 className={styles.heroHeadline} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', textAlign: 'left', marginTop: '1rem' }}>{post.title}</h1>
           <div className={styles.author} style={{ justifyContent: 'flex-start', marginTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold', color: '#fff' }}>
                {(post.author || 'CT').split(' ').map(n => n[0]).join('')}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', textAlign: 'left' }}>
                <span style={{ fontWeight: 700, color: 'var(--text-headline)' }}>{post.author || 'Engineering Team'}</span>
                <span style={{ fontSize: '0.875rem', color: '#adaaad' }}>{new Date(post.createdAt || Date.now()).toLocaleDateString()} • {post.readTime}</span>
              </div>
           </div>
        </div>
      </header>
      
      <div className="container" style={{ maxWidth: '800px', marginBottom: '8rem' }}>
        <div className="markdown-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
