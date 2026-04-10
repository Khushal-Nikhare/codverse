'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  ExternalLink, 
  LayoutDashboard, 
  FileText, 
  Settings, 
  LogOut,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/posts');
      const data = await res.json();
      if (data.success) {
        setPosts(data.data);
      }
    } catch (err) {
      toast.error('Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    
    try {
      const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        toast.success('Post deleted');
        setPosts(posts.filter(p => p._id !== id));
      } else {
        toast.error('Delete failed');
      }
    } catch (err) {
      toast.error('Connection error');
    }
  };

  const handleLogout = async () => {
    // Basic logout by clearing cookie (can be more robust with an API route)
    document.cookie = "admin_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = '/admin/login';
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-[#0a0a0a]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-[#111111]/50 flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-3 text-[#ac8aff] font-bold text-xl tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#ac8aff] to-[#25d366] flex items-center justify-center text-white">
              C
            </div>
            Codverse CMS
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2 py-4">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 bg-[#ac8aff]/10 text-[#ac8aff] rounded-xl font-medium transition-all">
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
          <Link href="/admin/posts/create" className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-all">
            <Plus size={20} />
            New Post
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-all">
            <Settings size={20} />
            CMS Config
          </Link>
        </nav>

        <div className="p-4 border-t border-white/5">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-red-500 hover:bg-red-500/10 rounded-xl font-medium transition-all"
          >
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="p-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Content Engine</h1>
            <p className="text-zinc-500 mt-1">Manage and scale your knowledge base</p>
          </div>

          <Link 
            href="/admin/posts/create" 
            className="flex items-center gap-2 bg-[#ac8aff] text-white px-6 py-3 rounded-2xl font-bold hover:shadow-lg hover:shadow-[#ac8aff]/20 transition-all active:scale-95"
          >
            <Plus size={20} />
            Create New Article
          </Link>
        </header>

        <div className="px-8 pb-8">
          {/* Stats Bar */}
          <div className="grid grid-cols-4 gap-6 mb-10">
            <div className="bg-[#111111] border border-white/5 p-6 rounded-3xl">
              <span className="text-zinc-500 text-sm font-medium">Total Posts</span>
              <div className="text-3xl font-bold mt-2">{posts.length}</div>
            </div>
            <div className="bg-[#111111] border border-white/5 p-6 rounded-3xl">
              <span className="text-zinc-500 text-sm font-medium">Published</span>
              <div className="text-3xl font-bold mt-2 text-[#25d366]">
                {posts.filter(p => p.isPublished).length}
              </div>
            </div>
            <div className="bg-[#111111] border border-white/5 p-6 rounded-3xl">
              <span className="text-zinc-500 text-sm font-medium">Drafts</span>
              <div className="text-3xl font-bold mt-2 text-amber-500">
                {posts.filter(p => !p.isPublished).length}
              </div>
            </div>
            <div className="bg-[#111111] border border-white/5 p-6 rounded-3xl">
              <span className="text-zinc-500 text-sm font-medium">Avg. Read Time</span>
              <div className="text-3xl font-bold mt-2 text-[#ac8aff]">5.2m</div>
            </div>
          </div>

          {/* Search Table */}
          <div className="bg-[#111111] border border-white/5 rounded-3xl overflow-hidden">
            <div className="p-6 border-b border-white/5 flex items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full bg-[#1a1a1a] border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-[#ac8aff]/50 transition-all"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-white/5 text-zinc-400 text-sm uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Article</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold">Date</th>
                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {loading ? (
                    <tr>
                      <td colSpan="4" className="text-center py-20 text-zinc-500">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-8 h-8 border-2 border-[#ac8aff] border-t-transparent rounded-full animate-spin"></div>
                          Loading library...
                        </div>
                      </td>
                    </tr>
                  ) : filteredPosts.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-center py-20 text-zinc-500">
                        No articles found. Start by creating one.
                      </td>
                    </tr>
                  ) : (
                    filteredPosts.map((post) => (
                      <tr key={post._id} className="hover:bg-white/[0.02] transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-2xl overflow-hidden">
                              {post.image ? <img src={post.image} className="w-full h-full object-cover" /> : (post.emoji || '📄')}
                            </div>
                            <div>
                              <div className="font-bold text-white group-hover:text-[#ac8aff] transition-colors">{post.title}</div>
                              <div className="text-xs text-zinc-500 mt-0.5">{post.category} • {post.readTime}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {post.isPublished ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#25d366]/10 text-[#25d366] text-xs font-bold rounded-full">
                              <CheckCircle2 size={12} />
                              Published
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-bold rounded-full">
                              <Clock size={12} />
                              Draft
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-400">
                          {new Date(post.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Link 
                              href={`/admin/posts/edit/${post._id}`}
                              className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                              title="Edit"
                            >
                              <Edit2 size={18} />
                            </Link>
                            <button 
                              onClick={() => handleDelete(post._id)}
                              className="p-2 text-zinc-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                              title="Delete"
                            >
                              <Trash2 size={18} />
                            </button>
                            <a 
                              href={`/blog/${post.slug}`} 
                              target="_blank"
                              className="p-2 text-zinc-400 hover:text-[#25d366] hover:bg-[#25d366]/5 rounded-lg transition-all"
                              title="View"
                            >
                              <ExternalLink size={18} />
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
