import type { Metadata } from 'next';
import { Outfit, IBM_Plex_Mono, Fraunces } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'buildd - Dispatch missions, not tasks',
  description: 'Set objectives. Agents break them into tasks, connect to your tools via MCP, and ship outcomes while you sleep.',
  themeColor: '#1a1816',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${ibmPlexMono.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
