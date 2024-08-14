import Footer from '@/components/Footer'
import React from 'react'
import Navbar from '../Navbar'
import ParentProvider from '../ParentProvider'

export default function SharedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='min-h-screen '>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
