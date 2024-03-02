import { UnifrakturMaguntia as FontFraktur } from 'next/font/google';

import { GeistMono as FontMono } from 'geist/font/mono';
import { GeistSans as FontSans } from 'geist/font/sans';

export const fontSans = FontSans;
export const fontMono = FontMono;

export const fontFraktur = FontFraktur({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-fraktur',
});
