import { Fraunces, Manrope, Space_Mono } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';
import { siteConfig } from '@/data/cakes';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: `${siteConfig.name} | Custom Cakes & Bakery`,
  description: siteConfig.description,
  metadataBase: new URL('https://www.halifaxcustomcakery.com'),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: 'website',
    url: 'https://www.halifaxcustomcakery.com',
  },
};

export const viewport = {
  themeColor: '#FBF3E7',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${spaceMono.variable}`}>
      <body className="bg-cream text-espresso font-body antialiased">
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFab />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
