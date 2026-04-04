import FadeUpObserver from '@/components/FadeUpObserver';
import SiteChrome from '@/components/SiteChrome';
import '../styles/globals.css';

export const metadata = {
  metadataBase: new URL('https://www.codverse.in'),
  title: {
    default: 'Codverse Tech | Premium Software Solutions',
    template: '%s | Codverse Tech',
  },
  description:
    'Codverse Tech helps businesses grow with high-end websites, intelligent automation, and custom software systems.',
  alternates: {
    canonical: 'https://www.codverse.in',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();",
          }}
        />
      </head>
      <body>
        <SiteChrome>
          <FadeUpObserver />
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
