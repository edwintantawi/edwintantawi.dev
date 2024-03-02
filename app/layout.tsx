import * as React from 'react';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { fontFraktur, fontMono, fontSans } from '~/lib/fonts';
import { cn } from '~/lib/utils';

import '~/app/styles.css';

const fontVariables = [
  fontSans.variable,
  fontMono.variable,
  fontFraktur.variable,
];

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={cn(fontVariables)}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
