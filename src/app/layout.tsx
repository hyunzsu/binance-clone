import type { Metadata } from 'next';
import { ibmPlexSans } from '@/styles/fonts';
import '@/styles/globals.css';
import ReactQueryClientProvider from './config/ReactQueryClientProvider';
import RecoilProvider from './config/RecoilProvider';

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
    <html lang='en'>
      <body className={`${ibmPlexSans.variable} font-sans antialiased`}>
        <RecoilProvider>
          <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        </RecoilProvider>
      </body>
    </html>
  );
}
