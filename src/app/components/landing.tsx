import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { useIsMobile } from '../context/IsMobileProvider'
import QrCodeIcon from '@mui/icons-material/QrCode'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import EventSeatIcon from '@mui/icons-material/EventSeat'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'

type DTFeature = {
  title: string
  description: string
  icon: ReactElement<any, any>
}

export const Landing = () => {
  const isMobile = useIsMobile()

  if (isMobile === null) {
    return null
  }

  const logoSize = isMobile ? 60 : 75

  const features: DTFeature[] = [
    {
      title: 'QR Code table menus',
      description:
        "Generate a QR code to print and place on each table, so customers can scan the code and view the menu on their phone. No need to print menus if there's a menu change, , and no need to worry about sanitizing menus between customers.",
      icon: <QrCodeIcon sx={{ fontSize: 75, color: '#4CAF50' }} />,
    },
    {
      title: 'Manage your menu items and prices',
      description:
        'Hide an item from the menu if you run out of inventory, or change the market price of an item.',
      icon: <RestaurantIcon sx={{ fontSize: 75, color: '#FF9800' }} />,
    },
    {
      title: 'Order from the digital menu',
      description:
        'Allow your users to order from the digital menu, and have the order sent directly to the kitchen. No more waiting around for the waiter to take your order, or potential mistakes in the order on the waiter’s part.',
      icon: <LocalMallIcon sx={{ fontSize: 75, color: '#3F51B5' }} />,
    },
    {
      title: 'Table reservations',
      description:
        'Manage your table configuration in your restaurant, and allow customers to reserve a table ahead of time. Short staffed? Limit the number of reservations for that day.',
      icon: <EventSeatIcon sx={{ fontSize: 75, color: '#E91E63' }} />,
    },
    {
      title: 'Order ahead of time',
      description:
        'If you want, allow customers to order ahead of time, so their food is ready when they arrive. Your table turnover rate will increase, and customers will be happier.',
      icon: <FastfoodIcon sx={{ fontSize: 75, color: '#9C27B0' }} />,
    },
    {
      title: 'Call wait staff',
      description:
        'Nothing is worse than waiting around for your waiter to finally notice you. Allow your customers to call a waiter to their table, without having to flag them down. This will increase customer satisfaction, and allow your wait staff to be more efficient.',
      icon: <NotificationsActiveIcon sx={{ fontSize: 75, color: '#F44336' }} />,
    },
  ]

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
        <Typography variant={isMobile ? 'h3' : 'h2'}>DineTap</Typography>
      </div>

      <div className="center landing-content">
        <Typography variant={isMobile ? 'h5' : 'h4'}>
          Digital restaurant menus as a service, for a digital age.
        </Typography>

        <div className="spacer"></div>
        <div className="feature-grid">
          {features.map((feature) => (
            <div className="feature" key={feature.title}>
              {feature.icon}
              <div>
                <Typography variant="h5">{feature.title}</Typography>
                <Typography variant="body1">{feature.description}</Typography>
              </div>
            </div>
          ))}
        </div>

        <div className="spacer"></div>
        <Typography variant={isMobile ? 'h4' : 'h3'}>Pricing</Typography>
        <div className="pricing-container"></div>
      </div>
    </>
  )
}
