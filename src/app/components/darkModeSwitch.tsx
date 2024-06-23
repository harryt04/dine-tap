'use client'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import Box from '@mui/material/Box'
import { useThemeContext } from '../context/CustomThemeProvider'

export const DTThemedToggle = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      color: theme.palette.primary.main,
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.primary.main,
  },
}))

export const DarkModeSwitch = () => {
  const { theme, toggleDarkMode } = useThemeContext()
  return (
    <Box display="flex" justifyContent="center" alignItems="center" padding={2}>
      <Tooltip
        title={
          theme.palette.mode === 'dark'
            ? 'Switch to Light Mode'
            : 'Switch to Dark Mode'
        }
      >
        <IconButton onClick={toggleDarkMode} color="inherit">
          {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Tooltip>
      <DTThemedToggle
        checked={theme.palette.mode === 'dark'}
        onChange={toggleDarkMode}
      />
    </Box>
  )
}
