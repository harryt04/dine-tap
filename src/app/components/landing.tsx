import { Card, CardContent, Divider, Typography } from '@mui/material'
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
import { useThemeContext } from '../context/CustomThemeProvider'
import { useTranslation } from 'react-i18next'

type DineTapFeature = {
  title: string
  description: string
  icon: ReactElement<any, any>
}

export const Landing = () => {
  const { t } = useTranslation()
  const { theme } = useThemeContext()
  const [billedAnnually, setBilledAnnually] = useState(false)
  const isMobile = useIsMobile()

  const test = t('test')
  console.log('test: ', test)

  if (isMobile === null) {
    return null
  }

  const features: DineTapFeature[] = [
    {
      title: t('feature1Title'),
      description: t('feature1Description'),
      icon: <QrCodeIcon sx={{ fontSize: 75, color: '#4CAF50' }} />,
    },
    {
      title: t('feature2Title'),
      description: t('feature2Description'),
      icon: <RestaurantIcon sx={{ fontSize: 75, color: '#FF9800' }} />,
    },
    {
      title: t('feature3Title'),
      description: t('feature3Description'),
      icon: <LocalMallIcon sx={{ fontSize: 75, color: '#3F51B5' }} />,
    },
    {
      title: t('feature4Title'),
      description: t('feature4Description'),
      icon: <EventSeatIcon sx={{ fontSize: 75, color: '#E91E63' }} />,
    },
    {
      title: t('feature5Title'),
      description: t('feature5Description'),
      icon: <FastfoodIcon sx={{ fontSize: 75, color: '#9C27B0' }} />,
    },
    {
      title: t('feature6Title'),
      description: t('feature6Description'),
      icon: <NotificationsActiveIcon sx={{ fontSize: 75, color: '#E53935' }} />,
    },
  ]

  const pricingConfig = {
    pro: {
      monthly: {
        discountPercentage: '50%',
        normalPrice: '$100',
        earlyPrice: '$50',
      },
      annually: {
        discountPercentage: '50%',
        normalPrice: '$1000',
        earlyPrice: '$500',
      },
    },
    enterprise: {
      monthly: {
        discountPercentage: '25%',
        normalPrice: '$300',
        earlyPrice: '$225',
      },
      annually: {
        discountPercentage: '25%',
        normalPrice: '$3,000',
        earlyPrice: '$2,250',
      },
    },
  }

  const billingTerm = billedAnnually ? 'annually' : 'monthly'
  const highLightColor =
    theme.palette.mode === 'dark'
      ? theme.palette.primary.main
      : theme.palette.primary.dark

  const getPriceJsx = (price: 'pro' | 'enterprise') => {
    return (
      <>
        <span
          style={{
            color: highLightColor,
          }}
        >
          {pricingConfig[price][billingTerm].earlyPrice}
        </span>
        {`, ${t('billed')} ${billingTerm}`}
      </>
    )
  }

  return (
    <>
      <Header />

      <div className="center landing-content">
        <DarkModeSwitch />
        <Typography variant={isMobile ? 'h5' : 'h4'}>
          {t('landingTitle')}
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
        <Typography variant={isMobile ? 'h3' : 'h2'}>
          {t('pricingTitle')}
        </Typography>

        <div className="spacer"></div>
        <Typography variant="h5">
          {t('DineTap is free for all restaurant guests.')}
        </Typography>

        <div className="spacer"></div>

        <div className="billing-toggle-container">
          <Typography
            variant="h6"
            style={{
              color: billedAnnually ? theme.palette.text.disabled : 'inherit',
            }}
          >
            {t('Billed monthly')}
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
            {t('Billed annually (two months free)')}
          </Typography>
        </div>

        <div className="pricing-container">
          <Card className="pricing-card free-card">
            <div className="pricing-card-title">
              <Typography variant="h4">{t('freeTierTitle')}</Typography>
              <Typography variant="h5">{t('freeTierPrice')}</Typography>
              <Typography variant="caption">
                {t('freeTierDescription')}
              </Typography>
            </div>
            <div className="center">
              <SignUpButton label={t('joinWaitlist')} />
            </div>
            <div className="spacer"></div>
            <Divider />
            <CardContent style={{ paddingBottom: 0 }}>
              <ul>
                <li>🏠 1 restaurant/location</li>
                <li>👤 1 admin user</li>
                <li>{t('Front house features:')}</li>
                <ul>
                  <li>📋 {t('Digital restaurant menu')}</li>
                  <li>📱 {t('QR code table menu')}</li>
                  <li>🛎️ {t('Call waiter')}</li>
                </ul>
              </ul>
            </CardContent>
          </Card>

          <Card className="pricing-card">
            <div className="pricing-card-title">
              <Typography variant="h4">{t('proTierTitle')}</Typography>
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
                {getPriceJsx('pro')}
              </Typography>
              <div className="spacer"></div>
              <Typography variant="h6">
                {t('earlyAdopterPrice', {
                  percentage: pricingConfig.pro[billingTerm].discountPercentage,
                })}
              </Typography>
              <br />
              <Typography variant="caption">{t('noContract')}</Typography>
            </div>
            <div className="center">
              <SignUpButton label={t('joinWaitlist')} />
            </div>
            <div className="spacer"></div>
            <Divider />
            <CardContent style={{ paddingBottom: 0 }}>
              <ul>
                <li>📞 {t('proTierSupport')}</li>
                <li>🏠 {t('proTierLocations')}</li>
                <li>👤 {t('proTierAdmins')}</li>
                <li>
                  {t('proTierFrontHouse')} <br />
                  {t('proTierFrontHouseFeatures')}
                </li>
                <ul>
                  <li>📱 {t('proTierDigitalMenuOrders')}</li>
                  <li>💳 {t('proTierPayments')}</li>
                  <li>📅 {t('proTierReservations')}</li>
                  <li>🪑 {t('proTierTables')}</li>
                  <li>⏰ {t('proTierOrdersAhead')}</li>
                </ul>
              </ul>
            </CardContent>
          </Card>

          <Card className="pricing-card">
            <div className="pricing-card-title">
              <Typography variant="h4">{t('enterpriseTierTitle')}</Typography>
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
                {getPriceJsx('enterprise')}
              </Typography>
              <div className="spacer"></div>
              <Typography variant="h6">
                {t('earlyAdopterPrice', {
                  percentage:
                    pricingConfig.enterprise[billingTerm].discountPercentage,
                })}
              </Typography>
              <br />
              <Typography variant="caption">{t('noContract')}</Typography>
            </div>
            <div className="center">
              <SignUpButton label={t('joinWaitlist')} />
            </div>
            <div className="spacer"></div>
            <Divider />
            <CardContent style={{ paddingBottom: 0 }}>
              <ul>
                <li>All the features of the Pro tier plus:</li>
                <li>🏠 {t('enterpriseTierLocations')}</li>
                <li>👤 {t('enterpriseTierAdmins')}</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
