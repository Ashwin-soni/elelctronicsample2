import type {Metadata} from 'next';
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
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
