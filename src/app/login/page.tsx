'use client'
import React from 'react'
import { Container, Card, CardContent, Button, Typography } from '@mui/material'
import { AuthProvider, useAuth } from '../context/AuthContext'
import Image from 'next/image'
import GoogleIcon from '@mui/icons-material/Google'

const Login: React.FC = () => {
  const { signInWithGoogle, user, signOut } = useAuth()

  if (!user || !user.uid) {
    return (
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Sign in with Google
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={signInWithGoogle}
              startIcon={<GoogleIcon />}
            >
              Sign in with Google
            </Button>
          </CardContent>
        </Card>
      </Container>
    )
  }

  console.log('user.photoURL: ', user.photoURL)
  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h5">You are signed in as</Typography>
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
            <Button variant="contained" color="primary" onClick={signOut}>
              Sign out
            </Button>
          </div>
        </CardContent>
      </Card>
    </Container>
  )
}

const LoginPage: React.FC = () => (
  <AuthProvider>
    <Login />
  </AuthProvider>
)

export default LoginPage
