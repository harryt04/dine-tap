'use client'
import React, { createContext, ReactNode, useContext } from 'react'
import featureFlags from '../../config/featureFlags'

const FeatureFlagsContext = createContext(featureFlags)

export const useFeatureFlags = () => useContext(FeatureFlagsContext)

export const FeatureFlagsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <FeatureFlagsContext.Provider value={featureFlags}>
      {children}
    </FeatureFlagsContext.Provider>
  )
}
