import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Shtuka',
  description: 'Modern portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} from-peach-light via-banana-light to-mango-light min-h-screen bg-gradient-to-br`}
      >
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
