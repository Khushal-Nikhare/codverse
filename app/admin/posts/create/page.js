'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Save, 
  Image as ImageIcon, 
  Eye, 
  Globe, 
  Clock, 
  FileText, 
  Settings, 
  Tag,
  Loader2
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';

export default function CreatePost() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'Engineering',
    emoji: '📄',
    image: '',
    readTime: '5 min read',
    isPublished: false,
    author: 'Codverse Team',
    seo: {
      title: '',
      description: '',
    }
  });

  useEffect(() => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
    setFormData(prev => ({ ...prev, slug }));
  }, [formData.title]);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const toastId = toast.loading('Uploading assets...');
    const formDataUpload = new FormData();
    formDataUpload.append('file', file);
    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formDataUpload });
      const data = await res.json();
      if (data.success) {
        setFormData(prev => ({ ...prev, image: data.url }));
        toast.success('Asset synchronized', { id: toastId });
      } else {
        toast.error('Upload failed: ' + data.error, { id: toastId });
      }
    } catch (err) {
      toast.error('Connection error', { id: toastId });
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Article published to ecosystem');
        router.push('/admin/dashboard');
      } else {
        toast.error(data.error || 'Failed to save');
      }
    } catch (err) {
      toast.error('Connection error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="sticky top-0 z-50 bg-[#111111]/80 backdrop-blur-xl border-b border-white/5 py-4 px-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button onClick={() => router.back()} className="p-2 hover:bg-white/5 rounded-full text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold tracking-tight">Construct New Article</h1>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsPreview(!isPreview)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${isPreview ? 'bg-[#ac8aff] text-white' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
          >
            <Eye size={18} />
            {isPreview ? 'Editor' : 'Preview'}
          </button>
          <button 
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-xl font-bold hover:bg-[#ac8aff] hover:text-white transition-all disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save size={18} />}
            Synchronize
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className={`lg:col-span-2 space-y-8 ${isPreview ? 'hidden' : 'block'}`}>
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Article Headline" 
              className="w-full bg-transparent text-5xl font-bold border-none focus:outline-none placeholder:text-zinc-800"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
            <div className="flex items-center gap-4 text-zinc-500 font-mono text-sm">
              <span className="text-[#ac8aff]">slug:</span>
              <span className="bg-white/5 px-2 py-1 rounded">/{formData.slug}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-zinc-400 mb-2">
              <FileText size={18} />
              <span className="text-sm font-semibold uppercase tracking-wider">Content Editor (Markdown)</span>
            </div>
            <textarea 
              placeholder="Start engineering your story..." 
              className="w-full min-h-[60vh] bg-[#111111] border border-white/5 rounded-3xl p-8 focus:outline-none focus:ring-2 focus:ring-[#ac8aff]/50 transition-all font-mono leading-relaxed"
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
            ></textarea>
          </div>
        </div>

        <div className={`lg:col-span-2 space-y-8 ${isPreview ? 'block' : 'hidden'}`}>
           <div className="bg-[#111111] border border-white/5 rounded-3xl p-12 min-h-[80vh]">
              <h1 className="text-5xl font-bold mb-8">{formData.title || 'Untitled Article'}</h1>
              <div className="prose prose-invert prose-purple max-w-none">
                <ReactMarkdown>{formData.content || '*No content yet*'}</ReactMarkdown>
              </div>
           </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-[#111111] border border-white/5 rounded-3xl p-6 space-y-6">
            <h3 className="font-bold flex items-center gap-2 border-b border-white/5 pb-4">
              <Settings size={18} className="text-[#ac8aff]" />
              Metadata & Strategy
            </h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-2">
                  <Tag size={12} /> Category
                </label>
                <select 
                  className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ac8aff]/50"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option>Engineering</option>
                  <option>Business Growth</option>
                  <option>Design</option>
                  <option>Digital Strategy</option>
                  <option>Automation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-2">
                  <Clock size={12} /> Read Time
                </label>
                <input 
                  type="text" 
                  className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ac8aff]/50"
                  value={formData.readTime}
                  onChange={(e) => setFormData({...formData, readTime: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                  <ImageIcon size={12} /> Cover Image
                  <input type="file" className="hidden" onChange={handleUpload} disabled={uploading} />
                </label>
                <div className="relative group">
                  <input 
                    type="text" 
                    className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ac8aff]/50 pr-10"
                    placeholder="https://cloudinary.com/..."
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                  />
                  {formData.image && (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded bg-zinc-800 overflow-hidden border border-white/10">
                      <img src={formData.image} className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
                {uploading && <div className="text-[10px] text-[#ac8aff] font-mono animate-pulse">TRANSMITTING...</div>}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-sm font-bold">Publish State</span>
                <button 
                  onClick={() => setFormData({...formData, isPublished: !formData.isPublished})}
                  className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${formData.isPublished ? 'bg-[#25d366]' : 'bg-zinc-700'}`}
                >
                  <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${formData.isPublished ? 'translate-x-7' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#111111] border border-white/5 rounded-3xl p-6 space-y-4">
            <h3 className="font-bold flex items-center gap-2 border-b border-white/5 pb-4">
              <Globe size={18} className="text-[#25d366]" />
              SEO Engine
            </h3>
            <div className="space-y-4">
               <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Meta Title</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3 focus:outline-none text-sm"
                    value={formData.seo.title}
                    onChange={(e) => setFormData({...formData, seo: {...formData.seo, title: e.target.value}})}
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Meta Description</label>
                  <textarea 
                    className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3 focus:outline-none text-sm h-24"
                    value={formData.seo.description}
                    onChange={(e) => setFormData({...formData, seo: {...formData.seo, description: e.target.value}})}
                  ></textarea>
               </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
