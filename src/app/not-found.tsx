import React from 'react'
import Header from './components/header'
import { Container } from '@mui/material'

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="spacer"></div>
      <div className="center">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </>
  )
}

export default NotFound
