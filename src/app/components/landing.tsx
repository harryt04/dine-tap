import {
  Card,
  CardContent,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import React, { ReactElement, useState } from 'react'
import { useIsMobile } from '../context/IsMobileProvider'
import QrCodeIcon from '@mui/icons-material/QrCode'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import EventSeatIcon from '@mui/icons-material/EventSeat'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import SignUpButton from './signUpButton'
import { DarkModeSwitch, DTThemedToggle } from './darkModeSwitch'
import '../styles/landing.css'
import Header from './header'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useThemeContext } from '../context/CustomThemeProvider'

type DineTapFeature = {
  title: string
  description: string
  icon: ReactElement<any, any>
}

export const Landing = () => {
  const { theme } = useThemeContext()
  const [billedAnnually, setBilledAnnually] = useState(false)
  const isMobile = useIsMobile()

  if (isMobile === null) {
    return null
  }

  const features: DineTapFeature[] = [
    {
      title: 'QR Code Table Menus',
      description:
        'Generate a QR code for each table, allowing customers to view the menu on their phones. No need to print menus for changes, and no more concerns about sanitizing menus between customers.',
      icon: <QrCodeIcon sx={{ fontSize: 75, color: '#4CAF50' }} />,
    },
    {
      title: 'Manage Menu Items and Prices',
      description: 'Easily hide out-of-stock items or update market prices.',
      icon: <RestaurantIcon sx={{ fontSize: 75, color: '#FF9800' }} />,
    },
    {
      title: 'Order from Digital Menu',
      description:
        'Customers can order directly from the digital menu, sending orders straight to the kitchen. This minimizes wait times and reduces order errors.',
      icon: <LocalMallIcon sx={{ fontSize: 75, color: '#3F51B5' }} />,
    },
    {
      title: 'Table Reservations',
      description:
        'Manage table configurations and allow customers to reserve tables in advance. Control reservation limits during staff shortages.',
      icon: <EventSeatIcon sx={{ fontSize: 75, color: '#E91E63' }} />,
    },
    {
      title: 'Order Ahead',
      description:
        'Enable customers to order ahead so their food is ready upon arrival. This improves table turnover rates and enhances customer satisfaction. You can collect payment up front or at the end of their visit.',
      icon: <FastfoodIcon sx={{ fontSize: 75, color: '#9C27B0' }} />,
    },
    {
      title: 'Call Wait Staff',
      description:
        'Allow customers to digitally call a waiter to their table, enhancing efficiency and customer satisfaction.',
      icon: <NotificationsActiveIcon sx={{ fontSize: 75, color: '#F44336' }} />,
    },
  ]

  const pricingConfig = {
    discountPercentage: '20%',
    pro: {
      monthly: {
        normalPrice: '$250',
        earlyPrice: '$50',
      },
      annually: {
        normalPrice: '$200',
        earlyPrice: '$40',
      },
    },
    enterprise: {
      monthly: { normalPrice: '$2,500', earlyPrice: '$500' },
      annually: { normalPrice: '$2,000', earlyPrice: '$400' },
    },
  }

  const billingTerm = billedAnnually ? 'annually' : 'monthly'

  const getPriceString = (price: 'pro' | 'enterprise') => {
    return `${
      pricingConfig[price][billingTerm].earlyPrice
    } / month, billed ${billingTerm}`
  }

  return (
    <>
      <Header />

      <div className="center landing-content">
        <DarkModeSwitch />
        <Typography variant={isMobile ? 'h5' : 'h4'}>
          Digital restaurant menus as a service for the digital age.
        </Typography>

        <div className="spacer"></div>
        <div className="feature-grid">
          {features.map((feature) => (
            <Card className="feature" key={feature.title}>
              {feature.icon}
              <div>
                <Typography variant="h5">{feature.title}</Typography>
                <Typography variant="body1">{feature.description}</Typography>
              </div>
            </Card>
          ))}
        </div>

        <div className="spacer"></div>
        <Typography variant={isMobile ? 'h3' : 'h2'}>Pricing</Typography>

        <div className="spacer"></div>
        <Typography variant="h5">
          DineTap is free for all restaurant guests.
        </Typography>

        <div className="spacer"></div>

        <div className="billing-toggle-container">
          <Typography
            variant="h6"
            style={{
              color: billedAnnually ? theme.palette.text.disabled : 'inherit',
            }}
          >
            Billed monthly
          </Typography>
          <DTThemedToggle
            checked={billedAnnually}
            onChange={() => setBilledAnnually(!billedAnnually)}
          />
          <Typography
            variant="h6"
            style={{
              color: !billedAnnually ? theme.palette.text.disabled : 'inherit',
            }}
          >
            Billed annually (save {pricingConfig.discountPercentage})
          </Typography>
        </div>

        <div className="pricing-container">
          <Card className="pricing-card free-card">
            <div className="pricing-card-title">
              <Typography variant="h4">Free - Coming Soon</Typography>
              <Typography variant="h5">$0</Typography>
              <Typography variant="caption">
                Ideal for small venues or food trucks. Kitchen features not
                included.
              </Typography>
            </div>
            <div className="center">
              <SignUpButton label="Join Waitlist" />
            </div>
            <div className="spacer"></div>
            <Divider />
            <CardContent style={{ paddingBottom: 0 }}>
              <ul>
                <li>🏠 1 restaurant/location</li>
                <li>👤 1 admin user</li>
                <li>Front house features:</li>
                <ul>
                  <li>📋 Digital restaurant menu</li>
                  <li>📱 QR code table menu</li>
                  <li>🛎️ Call waiter</li>
                </ul>
              </ul>
            </CardContent>
          </Card>

          <Card className="pricing-card">
            <div className="pricing-card-title">
              <Typography variant="h4">Pro - Coming Soon</Typography>
              <Typography variant="h5">
                <span
                  style={{
                    textDecoration: 'line-through',
                    marginRight: '10px',
                    color: theme.palette.text.disabled,
                  }}
                >
                  {`${billedAnnually ? pricingConfig.pro.annually.normalPrice : pricingConfig.pro.monthly.normalPrice}`}
                </span>
                {getPriceString('pro')}
              </Typography>
              <Typography variant="caption">
                Early adopter price. Limited time offer, 80% off.
              </Typography>
              <br />
              <Typography variant="caption">
                All plans have no minimum contract length and can be canceled at
                any time.
              </Typography>
            </div>
            <div className="center">
              <SignUpButton label="Join Waitlist" />
            </div>
            <div className="spacer"></div>
            <Divider />
            <CardContent style={{ paddingBottom: 0 }}>
              <ul>
                <li>📞 Phone, email, and chat customer support</li>
                <li>🏠 Up to 5 restaurants/locations</li>
                <li>👤 Up to 3 admin users per location</li>
                <li>
                  Front house features <br />
                  All Free tier features plus:
                </li>
                <ul>
                  <li>📱 Take orders from the digital menu</li>
                  <li>💳 Option to accept payments via DineTap</li>
                  <li>📅 Table reservations</li>
                  <li>🪑 Unlimited tables per location</li>
                  <li>⏰ Orders ahead of reservation time</li>
                </ul>
              </ul>
            </CardContent>
          </Card>

          <Card className="pricing-card">
            <div className="pricing-card-title">
              <Typography variant="h4">Enterprise - Coming Soon</Typography>
              <Typography variant="h5">
                <span
                  style={{
                    textDecoration: 'line-through',
                    marginRight: '10px',
                    color: theme.palette.text.disabled,
                  }}
                >
                  {`${billedAnnually ? pricingConfig.enterprise.annually.normalPrice : pricingConfig.enterprise.monthly.normalPrice}`}
                </span>
                {getPriceString('enterprise')}
              </Typography>
              <Typography variant="caption">
                Early adopter price. Limited time offer, 80% off.
              </Typography>
              <br />
              <Typography variant="caption">
                All plans have no minimum contract length and can be canceled at
                any time.
              </Typography>
            </div>
            <div className="center">
              <SignUpButton label="Join Waitlist" />
            </div>
            <div className="spacer"></div>
            <Divider />
            <CardContent style={{ paddingBottom: 0 }}>
              <ul>
                <li>All the features of the Pro tier plus:</li>
                <li>🏠 Unlimited restaurants/locations</li>
                <li>👤 Unlimited admin users</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
