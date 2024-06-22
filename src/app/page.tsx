'use client'
import React from 'react'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { useIsMobile } from './context/IsMobileProvider'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { Footer } from './components/footer'
import { useAuth } from './context/AuthContext'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()
  const isMobile = useIsMobile()
  const { user, userLoading } = useAuth()
  console.log('userLoading: ', userLoading)
  console.log('user: ', user)

  if (!userLoading && !user) {
    router.push('/login')
  }

  if (isMobile === null) {
    return null
  }

  const logoSize = isMobile ? 60 : 75

  return (
    <div className="center">
      <div className="header-container">
        <Image
          src="/android-chrome-512x512.png"
          width={logoSize}
          height={logoSize}
          unoptimized
          alt="logo"
          className="logo"
        />
        <Typography variant={isMobile ? 'h3' : 'h2'}>DineTap</Typography>
      </div>
      <Footer />
    </div>
  )
}

export default Home
