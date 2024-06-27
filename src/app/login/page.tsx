'use client'
import React from 'react'
import { Container, Card, CardContent, Button, Typography } from '@mui/material'
import { useAuth } from '../context/AuthContext'
import Image from 'next/image'
import Header from '../components/header'
import '../styles/login.css'
import { useRouter } from 'next/navigation'
import { DarkModeSwitch } from '../components/darkModeSwitch'
import CustomGoogleIcon from '../components/googleIcon'

const Login: React.FC = () => {
  const router = useRouter()
  const { signInWithGoogle, user, signOut } = useAuth()

  if (!user || !user.uid) {
    return (
      <Container maxWidth="sm">
        <DarkModeSwitch />
        <Header />
        <div className="spacer"></div>
        <Card>
          <CardContent className="center">
            <div className="sign-in-container">
              <Typography variant="h6" gutterBottom>
                Please login to access the admin dashboard.
              </Typography>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                onClick={() => signInWithGoogle()}
                // onClick={() => signInWithGoogle('/')}
                startIcon={<CustomGoogleIcon size={'1.5rem'} />}
              >
                Sign in with Google
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    )
  }

  return (
    <>
      <DarkModeSwitch />
      <Header />
      <div className="spacer"></div>
      <Container maxWidth="sm">
        <Card>
          <CardContent className="center">
            <Typography variant="h5">You are signed in as</Typography>
            <div className="spacer"></div>
            <div className="user-header-container">
              <Image
                unoptimized
                src={user.photoURL || ''}
                alt={user.displayName || 'User'}
                width={50}
                height={50}
              />
              <Typography variant="body1">{user.displayName}</Typography>
            </div>

            <div className="login-container">
              <Typography variant="caption" className="email">
                {user.email}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => router.push('/admin')}
              >
                Continue to App
              </Button>
              <Button variant="contained" color="secondary" onClick={signOut}>
                Sign out
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default Login
