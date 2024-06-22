// Home.tsx
'use client'
import React from 'react'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import DarkModeSwitch from './components/darkModeSwitch'
import { useIsMobile } from './context/IsMobileProvider'
import Image from 'next/image'
import { Typography } from '@mui/material'

const Home = () => {
  const isMobile = useIsMobile()

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
      <div className="spacer"></div>
      <DarkModeSwitch />
    </div>
  )
}

export default Home
