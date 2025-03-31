import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Head from 'next/head';

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
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100&icon_names=favorite,home,search,settings"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`${inter.className} from-peach-light via-banana-light to-mango-light min-h-screen bg-gradient-to-br`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
