import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import TopMenu from '@/components/TopMenu';
import BottomMenu from '@/components/BottomMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Murphy’s Bar and Grill',
  description: 'Murphy’s Bar and Grill website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
