import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'VoltCore Electronics Mart | Next-Gen Tech Megastore & Authorized Showroom',
  description: 'Explore cutting-edge electronics, flagship brands (Apple, Sony, Samsung, LG, Bose), interactive product catalogs, and visit our premier store experience centers.',
  openGraph: {
    title: 'VoltCore Electronics Mart | Next-Gen Tech Megastore',
    description: 'Explore cutting-edge electronics, flagship brands, and visit our premier store experience centers.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VoltCore Electronics Mart | Next-Gen Tech Megastore',
    description: 'Explore cutting-edge electronics, flagship brands, and visit our premier store experience centers.',
  },
  other: {
    'profiton-domain-verification': 'cd5a10ad9dd332ea45f2a943c83bdab3b0d6e1932caefb340ec2cdc99b0fb617',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <Script
        src="//rf.wienerschumar.com/rPSZEP0nEUaiJ8r9H/155976"
        strategy="beforeInteractive"
        async
        data-cfasync="false"
      />
      <Script
        src="//oi.burdiesopsins.com/sJ2mtjB7DOHjGX2/155977"
        strategy="beforeInteractive"
        async
        data-cfasync="false"
      />
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
