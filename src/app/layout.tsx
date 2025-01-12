import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppContextProvider } from '@/context/AppContext';
import { AuthContextProvider } from '@/context/AuthContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
  themeColor: '#0B0C14',
  colorScheme: 'dark',
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: 'Snowflake Optimization Platform',
    template: '%s | Snowflake Optimization Platform',
  },
  description: 'Gain deep visibility into Snowflake usage, optimize performance and automate savings with the click of a button.',
  keywords: ['Snowflake', 'optimization', 'cost management', 'analytics', 'data', 'performance'],
  authors: [{ name: 'Your Company Name' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Snowflake Optimization Platform',
    title: 'Snowflake Optimization Platform',
    description: 'Gain deep visibility into Snowflake usage, optimize performance and automate savings.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Snowflake Optimization Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snowflake Optimization Platform',
    description: 'Optimize your Snowflake performance and costs',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className={`${inter.className} bg-dark-bg min-h-screen`}>
        <AuthContextProvider>
          <AppContextProvider>
            {children}
          </AppContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
} 