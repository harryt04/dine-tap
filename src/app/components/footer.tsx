import React from 'react'
import { DarkModeSwitch } from './darkModeSwitch'
import SignUpButton from './signUpButton'

export const Footer = () => {
  return (
    <div className="footer-container">
      <SignUpButton />
      <DarkModeSwitch />
    </div>
  )
}
