import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export const Footer = () => {
  return (
    <Box
      component="footer"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      bgcolor="background.paper"
    >
      <Typography variant="caption" color="textSecondary" align="center">
        DineTap &copy; 2024
      </Typography>
    </Box>
  )
}
