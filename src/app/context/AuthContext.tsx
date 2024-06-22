'use client'
import React, { createContext, useContext, ReactNode, useState } from 'react'
import { auth, signInWithPopup, signOut } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { User } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { useRouter } from 'next/navigation'

type AuthProvider = 'google' | 'apple' | ''

interface AuthContextType {
  user: User | null | undefined
  signInWithGoogle: (redirectUri?: string) => Promise<void>
  signOut: () => Promise<void>
  authProvider?: AuthProvider
  userLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authProvider, setAuthProvider] = useState<AuthProvider>()
  const [user, userLoading] = useAuthState(auth)
  const router = useRouter()

  const signInWithGoogle = async (redirectUri?: string) => {
    try {
      // Force the Google sign-in process to prompt the user to select an account
      const customProvider = new GoogleAuthProvider()
      customProvider.setCustomParameters({ prompt: 'select_account' })
      await signInWithPopup(auth, customProvider)
      setAuthProvider('google')
      if (redirectUri) {
        router.push(redirectUri)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const signOutUser = async () => {
    try {
      await signOut(auth)
      // Clear the session storage to ensure the user is fully signed out
      window.sessionStorage.clear()
      setAuthProvider('')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        signOut: signOutUser,
        authProvider,
        userLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
