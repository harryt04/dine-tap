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
        <p>
          {`The page you're trying to reach isn't available at this URL. Please
          check the URL for errors and try again.`}
        </p>
      </div>
    </>
  )
}

export default NotFound
