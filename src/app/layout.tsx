// RootLayout.js
import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import './styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { IsMobileProvider } from './context/IsMobileProvider'
import ThemeProvider from './context/CustomThemeProvider'
import { AuthProvider } from './context/AuthContext'
import TranslationsProvider from './context/TranslationsProvider'
import { FeatureFlagsProvider } from './context/FeatureFlagsProvider'

export const metadata: Metadata = {
  title: 'DineTap',
  description: 'Restaurant menus as a service',
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
          <FeatureFlagsProvider>
            <TranslationsProvider>
              <ThemeProvider>
                <IsMobileProvider>
                  <AuthProvider>
                    <body>{children}</body>
                  </AuthProvider>
                </IsMobileProvider>
              </ThemeProvider>
            </TranslationsProvider>
          </FeatureFlagsProvider>
        </AppRouterCacheProvider>

        {isProduction && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </html>
    </>
  )
}
