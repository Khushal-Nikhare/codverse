import BlogListClient from './BlogListClient';
import { getAllPosts, getCategories } from '../../lib/posts';

export const metadata = {
  title: 'Blog | Engineering Insights & Tech Resources',
  description:
    'Practical guides on web engineering, automation, and scaling digital products from Codverse Tech.',
  alternates: {
    canonical: 'https://www.codverse.in/blog',
  },
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const categories = getCategories();

  return <BlogListClient allPosts={allPosts} categories={categories} />;
}
