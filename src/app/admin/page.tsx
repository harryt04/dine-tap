'use client'
import React from 'react'
import Header from '../components/header'
import { Typography } from '@mui/material'
import SignUpButton from '../components/signUpButton'
import { useAuth } from '../context/AuthContext'

const Admin = () => {
  const { userLoading } = useAuth()

  if (userLoading) return null
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
        <SignUpButton label="Join Waitlist" />
      </div>
    </>
  )
}

export default Admin
