import { Button } from '@mui/material'
import React from 'react'

const SignUpButton = (props: {
  label: string
  variant?: 'contained' | 'outlined' | 'text'
  color?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'inherit'
    | 'success'
    | 'warning'
    | 'error'
}) => {
  const { label, variant, color } = props
  return (
    <Button
      variant={variant || 'contained'}
      color={color || 'primary'}
      href="https://docs.google.com/forms/d/e/1FAIpQLSdbnQ2rEdaF77scxMddKa48wENzeVMGMBXGxiiy__U0ztAqqA/viewform"
      target="_blank"
    >
      {label}
    </Button>
  )
}

export default SignUpButton
