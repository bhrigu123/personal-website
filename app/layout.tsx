import 'css/tailwind.css'
import 'pliny/search/algolia.css'

// 🎨 UPDATE THESE IMPORTS WHEN CHANGING FONTS IN tailwind.config.js
import { Roboto_Serif } from 'next/font/google' // For FONTS.content.name
import { JetBrains_Mono } from 'next/font/google' // For FONTS.code.name

import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'
import Script from 'next/script'
import type { Viewport } from 'next'

// Main content font (matches FONTS.content in tailwind.config.js)
const roboto_serif = Roboto_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-serif', // Must match FONTS.content.variable
})

// Code font (matches FONTS.code in tailwind.config.js)
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
  icons: [
    { rel: 'apple-touch-icon', sizes: '76x76', url: '/static/favicons/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/static/favicons/icon-32.jpg' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/static/favicons/icon-16.jpg' },
    { rel: 'manifest', url: '/static/favicons/site.webmanifest' },
    { rel: 'mask-icon', url: '/static/favicons/safari-pinned-tab.svg', color: '#5bbad5' },
  ],
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${roboto_serif.variable} ${jetbrainsMono.className} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <SectionContainer>
            <div className="flex h-screen flex-col justify-between font-sans">
              <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
                <Header />
                <main className="mb-auto">{children}</main>
              </SearchProvider>
              <Footer />
            </div>
          </SectionContainer>
        </ThemeProviders>
        <Script
          strategy="afterInteractive"
          src="https://cloud.umami.is/script.js"
          data-website-id={process.env.NEXT_UMAMI_ID}
        />
      </body>
    </html>
  )
}
