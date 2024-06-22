import { Button } from '@mui/material'
import React from 'react'

const SignUpButton = (props: { label: string }) => {
  const { label } = props
  return (
    <Button
      variant="contained"
      color="primary"
      href="https://docs.google.com/forms/d/e/1FAIpQLSdbnQ2rEdaF77scxMddKa48wENzeVMGMBXGxiiy__U0ztAqqA/viewform"
      target="_blank"
    >
      {label}
    </Button>
  )
}

export default SignUpButton
