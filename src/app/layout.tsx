import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main className='container'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
