import { IBM_Plex_Sans } from 'next/font/google';

// IBM Plex Sans 설정
export const ibmPlexSans = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex',
});
