import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  excerpt: { type: String },
  image: { type: String },
  emoji: { type: String, default: '📄' },
  readTime: { type: String, default: '5 min read' },
  author: { type: String, default: 'Codverse Team' },
  isPublished: { type: Boolean, default: false },
  seo: {
    title: String,
    description: String,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
