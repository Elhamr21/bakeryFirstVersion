import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
});
const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Balkan Bäckerei - Traditionelle Balkan Bäckerei in Deutschland',
  description: 'Balkan Bäckerei – Traditionelle Balkan-Bäckerei in Deutschland mit 3 Standorten. Frisches Brot, Gebäck und authentische Rezepte täglich in Offenbach, Dreieich und Hanau.',
  keywords: ['Bäckerei', 'Balkan Bäckerei', 'frisches Brot', 'Gebäck', 'Offenbach', 'Dreieich', 'Hanau', 'traditionelle Rezepte', 'Burek', 'Somun'],
  authors: [{ name: 'Balkan Bäckerei' }],
  openGraph: {
    title: 'Balkan Bäckerei - Traditionelle Balkan Bäckerei',
    description: 'Frisches Brot, Gebäck und authentische Balkan-Rezepte täglich. Besuchen Sie uns in Offenbach, Dreieich oder Hanau.',
    type: 'website',
    locale: 'de_DE',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
