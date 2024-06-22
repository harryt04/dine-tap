// IsMobileProvider.tsx
'use client'
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

interface IsMobileContextType {
  isMobile: boolean | null
}

const IsMobileContext = createContext<IsMobileContextType | undefined>(
  undefined,
)

export const IsMobileProvider = ({ children }: { children: ReactNode }) => {
  const theme = useTheme()
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  const mediaQueryIsMobile = useMediaQuery(theme.breakpoints.down('sm'))

  useEffect(() => {
    const cachedIsMobile = localStorage.getItem('isMobile')
    if (cachedIsMobile !== null) {
      setIsMobile(JSON.parse(cachedIsMobile))
    } else {
      setIsMobile(mediaQueryIsMobile)
      localStorage.setItem('isMobile', JSON.stringify(mediaQueryIsMobile))
    }
  }, [mediaQueryIsMobile])

  useEffect(() => {
    if (isMobile !== mediaQueryIsMobile) {
      setIsMobile(mediaQueryIsMobile)
      localStorage.setItem('isMobile', JSON.stringify(mediaQueryIsMobile))
    }
  }, [mediaQueryIsMobile, isMobile])

  if (isMobile === null) {
    return null
  }

  return (
    <IsMobileContext.Provider value={{ isMobile }}>
      {children}
    </IsMobileContext.Provider>
  )
}

export const useIsMobile = (): boolean | null => {
  const context = useContext(IsMobileContext)
  if (context === undefined) {
    throw new Error('useIsMobile must be used within an IsMobileProvider')
  }
  return context.isMobile
}
