import type { Metadata } from 'next';
import { Lato, Montserrat } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/ScrollToTop';
import CursorIcon from '@/components/CursorIcon';

const lato = Lato({ 
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700']
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'GEP Paragliding',
  description: 'Experience the Ultimate Freedom',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          lato.variable,
          montserrat.variable
        )}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
        <Toaster />
        <ScrollToTop />
        <CursorIcon />
      </body>
    </html>
  );
}
