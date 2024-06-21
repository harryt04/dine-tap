// RootLayout.js
import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { IsMobileProvider } from './context-providers/IsMobileProvider'
import ThemeProvider from './context-providers/CustomThemeProvider'

export const metadata: Metadata = {
  title: 'Dine On',
  description: 'Randomly choose a restaurant near you',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      ></link>
      <link rel="manifest" href="/site.webmanifest"></link>
      <html lang="en">
        <AppRouterCacheProvider>
          <ThemeProvider>
            <IsMobileProvider>
              <body>{children}</body>

              {isProduction && (
                <>
                  <Analytics />
                  <SpeedInsights />
                </>
              )}
            </IsMobileProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </html>
    </>
  )
}
