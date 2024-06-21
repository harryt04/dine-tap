// Home.tsx
'use client'
import React from 'react'
import { Typography } from '@mui/material'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import DarkModeSwitch from './components/darkModeSwitch'
import { useIsMobile } from './context-providers/IsMobileProvider'

const Home = () => {
  const isMobile = useIsMobile()

  if (isMobile === null) {
    return null
  }

  const logoSize = isMobile ? 60 : 75

  return (
    <div className="center">
      <div className="title-container">
        <Typography variant={isMobile ? 'h3' : 'h2'}>DineOn</Typography>
        <DarkModeSwitch />
      </div>
      <div className="spacer"></div>
    </div>
  )
}

export default Home
