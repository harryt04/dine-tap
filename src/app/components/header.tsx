'use client'
import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { useIsMobile } from '../context/IsMobileProvider'

const Header = () => {
  const isMobile = useIsMobile()
  const logoSize = isMobile ? 60 : 75
  return (
    <>
      <div className="header-container">
        <Image
          src="/android-chrome-512x512.png"
          width={logoSize}
          height={logoSize}
          unoptimized
          alt="logo"
          className="logo"
        />
        <Typography variant={isMobile ? 'h2' : 'h1'}>DineTap</Typography>
      </div>
    </>
  )
}

export default Header
