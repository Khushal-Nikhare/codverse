const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://codversesoftware_db_user:Bdgf4lwtdf4hDChx@cluster0.6vexu5c.mongodb.net/?appName=Cluster0";

const PostSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  excerpt: String,
  content: String,
  category: String,
  emoji: String,
  author: String,
  date: String,
  readTime: String,
  isPublished: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

const posts = [
  {
    slug: 'professional-website-leads-to-sales',
    title: "How a professional website turned our client's leads into sales",
    excerpt: 'Case study on how we redesigned a stagnant B2B platform and achieved a 40% increase in conversion rates within 3 months.',
    category: 'Business Growth',
    emoji: '📈',
    author: 'Khushal Nikhare',
    date: 'April 8, 2026',
    readTime: '5 min read',
    content: `## The Problem\n\nOur client, a B2B logistics firm based out of Indore...`
  },
  {
    slug: 'business-needs-more-than-social-media',
    title: 'Why your business needs more than just a social media page',
    excerpt: 'Algorithms change, but your own domain is permanent. Explore why a central digital hub is the foundation of long-term online growth.',
    category: 'Online Presence',
    emoji: '🌐',
    author: 'Engineering Team',
    date: 'April 2, 2026',
    readTime: '7 min read',
    content: `## The Algorithm Problem\n\nIn 2012, Facebook pages had an organic reach of nearly **16%**...`
  },
  {
    slug: '5-signs-ready-for-custom-website',
    title: '5 signs your business is ready for a custom website',
    excerpt: 'When templates start to feel restrictive, it is time to build a platform that fits your unique business logic and growth plans.',
    category: 'Digital Strategy',
    emoji: '🛡️',
    author: 'Tech Strategist',
    date: 'March 25, 2026',
    readTime: '6 min read',
    content: `## Template Sites Are a Great Start — But They Have a Ceiling...`
  }
];

async function migrate() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
    
    for (const post of posts) {
      const existing = await Post.findOne({ slug: post.slug });
      if (!existing) {
        await Post.create(post);
        console.log(`Imported: ${post.title}`);
      } else {
        console.log(`Skipped (already exists): ${post.title}`);
      }
    }
    
    console.log('Migration complete');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

migrate();
