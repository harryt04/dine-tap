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
        {t('pricingCardTotalPrice', { billingTerm: billingTerm })}
      </>
    )
  }

  return (
    <>
      <DarkModeSwitch />
      <Header />

      <div className="center landing-content">
        <Typography variant={isMobile ? 'h6' : 'h3'} className="landing-title">
          {t('landingTitle')}
        </Typography>

        <div className="spacer"></div>
        <div className="feature-grid">
          {features.map((feature) => (
            <Card className="feature" key={feature.title}>
              {feature.icon}
              <div>
                <Typography variant="h5" className="feature-title">
                  {feature.title}
                </Typography>
                <Typography variant={isMobile ? 'body2' : 'body1'}>
                  {feature.description}
                </Typography>
              </div>
            </Card>
          ))}
        </div>

        <div className="spacer"></div>
        <Typography variant={isMobile ? 'h3' : 'h2'}>
          {t('pricingTitle')}
        </Typography>

        <div className="spacer"></div>
        <Typography variant="h5">{t('freeForAllGuests')}</Typography>

        <div className="spacer"></div>

        <div className="billing-toggle-container">
          <Typography
            variant="h6"
            style={{
              color: billedAnnually ? theme.palette.text.disabled : 'inherit',
            }}
          >
            {t('billedMonthly')}
          </Typography>
          <DTThemedToggle
            checked={billedAnnually}
            onChange={() => setBilledAnnually(!billedAnnually)}
          />
          <div className="billed-annually-container">
            <Typography
              variant="h6"
              style={{
                color: !billedAnnually
                  ? theme.palette.text.disabled
                  : 'inherit',
              }}
            >
              {t('billedAnnually')}
            </Typography>

            <Typography
              variant={isMobile ? 'caption' : 'body1'}
              style={{
                color: !billedAnnually
                  ? theme.palette.text.disabled
                  : 'inherit',
              }}
            >
              {t('twoMonthsFree')}
            </Typography>
          </div>
        </div>

        <div className="pricing-container">
          <Card className="pricing-card free-card">
            <div className="pricing-card-title">
              <Typography variant="h4">{t('freeTierTitle')}</Typography>
              <Typography variant="h5">{t('freeTierPrice')}</Typography>
              <div className="spacer"></div>
              <Typography variant="h6">{t('freeTierDescription')}</Typography>
            </div>
            <div className="center">
              <SignUpButton label={t('joinWaitlist')} />
              <Typography variant="caption" sx={{ paddingTop: '1.5rem' }}>
                {t('riskFree')}
              </Typography>
            </div>
            <div className="free-spacer"></div>
            <Divider />
            <CardContent style={{ paddingBottom: 0 }}>
              <ul>
                <li>🏠 {t('freeFeature1')}</li>
                <li>👤 {t('freeFeature2')}</li>
                <li>{t('frontHouseFeatures')}</li>
                <ul>
                  <li>📋 {t('digitalRestaurantMenu')}</li>
                  <li>🎨 {t('flexibleMenus')}</li>
                  <li>📱 {t('qrCodeTableMenu')}</li>
                  <li>🛎️ {t('callWaitStaff')}</li>
                  <li>🪑 {t('freeTierTables')}</li>
                </ul>
              </ul>
            </CardContent>
          </Card>

          <Card className="pricing-card pro-card">
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
                {t('earlyAdopterPrice')}
                <span style={{ color: highLightColor }}>
                  {' '}
                  {pricingConfig.pro[billingTerm].discountPercentage}
                </span>
                .
              </Typography>
            </div>
            <div className="center">
              <SignUpButton label={t('reserveThisPrice')} />
              <br />
              <Typography variant="caption">{t('noContract')}</Typography>
            </div>
            <div className="spacer"></div>
            <Divider />
            <CardContent style={{ paddingBottom: 0 }}>
              <ul>
                <li>📞 {t('proTierSupport')}</li>
                <li>🏠 {t('proTierLocations')}</li>
                <li>👤 {t('proTierAdmins')}</li>
                <li>
                  {t('frontHouseFeatures')} <br />
                  {t('proTierFrontHouseFeatures')}
                </li>
                <ul>
                  <li>📱 {t('proTierDigitalMenuOrders')}</li>
                  <li>💳 {t('proTierPayments')}</li>
                  <li style={{ color: highLightColor }}>{t('flatRate')}</li>
                  <li>📅 {t('proTierReservations')}</li>
                  <li>🪑 {t('proTierTables')}</li>
                  <li>⏰ {t('proTierOrdersAhead')}</li>
                </ul>
              </ul>
            </CardContent>
          </Card>

          <Card className="pricing-card enterprise-card">
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
                {t('earlyAdopterPrice')}
                <span style={{ color: highLightColor }}>
                  {' '}
                  {pricingConfig.enterprise[billingTerm].discountPercentage}
                </span>
                .
              </Typography>
            </div>
            <div className="center">
              <SignUpButton label={t('reserveThisPrice')} />
              <br />
              <Typography variant="caption">{t('noContract')}</Typography>
            </div>
            <div className="spacer"></div>
            <Divider />
            <CardContent style={{ paddingBottom: 0 }}>
              <ul>
                <li>{t('enterpriseTierFeatures')}</li>
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
