import Footer from '@/components/Footer'
import Script from 'next/script'
import React from 'react'
import Navbar from '../Navbar'

export default function SharedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script src="https://s.widgetwhats.com/wwwa.js" data-wwwa="23795" />
      <div className="min-h-screen relative ">
        <Navbar />
        {children}

        <Script
          id="script"
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></Script>
        <div
          className="elfsight-app-88645a73-887a-4718-890a-20f925c87145"
          data-elfsight-app-lazy
        ></div>
        <Footer />
      </div>
    </>
  )
}
