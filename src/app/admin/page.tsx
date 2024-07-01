'use client'
import React from 'react'
import Header from '../components/header'
import { Typography } from '@mui/material'
import SignUpButton from '../components/signUpButton'
import { useAuth } from '../context/AuthContext'
import { useFeatureFlags } from '../context/FeatureFlagsProvider'
import PersistentDrawerLeft from '../components/navigation'
import RestaurantIcon from '@mui/icons-material/Restaurant'

const Admin = () => {
  const { userLoading } = useAuth()
  const { showAdmin } = useFeatureFlags()

  if (userLoading) return null
  if (!showAdmin) {
    return (
      <>
        <Header />

        <div className="spacer"></div>
        <div className="spacer"></div>

        <div className="center">
          <Typography variant="h5">
            If you are a restaurant owner and would like to subscribe, please do
            so here.
          </Typography>
          <div className="spacer"></div>
          <SignUpButton label="Join DineTap Waitlist" />
          <div className="spacer"></div>
          <div className="spacer"></div>
          <Typography variant="h6">
            If you are a restaurant guest, please scan the QR code at your table
            or ask your waiter for help.
          </Typography>
        </div>
      </>
    )
  } // end if (!showAdmin)

  const adminRoutes = [
    {
      label: 'Restaurants',
      icon: <RestaurantIcon />,
    },
  ]

  return (
    <>
      <PersistentDrawerLeft routes={adminRoutes}>
        <Typography variant="h5">Admin Page</Typography>
      </PersistentDrawerLeft>
    </>
  )
}

export default Admin
