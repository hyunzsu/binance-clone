import type { Metadata } from 'next';
import { ibmPlexSans } from '@/styles/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Binance Clone',
  description: 'Binance Clone by Next.js 15',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${ibmPlexSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
