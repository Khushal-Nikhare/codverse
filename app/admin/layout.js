import { Toaster } from 'react-hot-toast';

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Toaster position="top-right" />
      {children}
    </div>
  );
}
