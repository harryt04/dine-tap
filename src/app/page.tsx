'use client'
import React from 'react'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Footer } from './components/footer'
import { Landing } from './components/landing'
// import { useAuth } from './context/AuthContext'
// import { useRouter } from 'next/navigation'

const Home = () => {
  // const router = useRouter()
  // const { user, userLoading } = useAuth()
  // if (!userLoading && !user) {
  //   router.push('/login')
  // }

  return (
    <div className="center">
      <Landing />
      <Footer />
    </div>
  )
}

export default Home
