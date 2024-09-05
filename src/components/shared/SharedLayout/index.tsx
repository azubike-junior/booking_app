import Footer from '@/components/Footer'
import Head from 'next/head'
import React from 'react'
import Navbar from '../Navbar'

export default function SharedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        {/* <Script src="https://s.widgetwhats.com/wwwa.js" data-wwwa="23795" /> */}
        <script
          async
          src="https://s.widgetwhats.com/wwwa.js"
          data-wwwa="23795"
        ></script>
      </Head>
      <div className="min-h-screen ">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}
