import Footer from '@/components/Footer'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import Navbar from '../Navbar'

export default function SharedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <Script src="https://s.widgetwhats.com/wwwa.js" data-wwwa="23795" />
        {/* <script
          async
          src="https://s.widgetwhats.com/wwwa.js"
          data-wwwa="23795"
        ></script> */}
      <div className="min-h-screen relative ">
        <Navbar />
        {children}
        <Footer />

        {/* <div className="fixed bottom-20 right-20">
          <Link href={`https://wa.me/09064487778`}>
            <IoLogoWhatsapp size={60} color="green" />
          </Link>
        </div> */}
      </div>
    </>
  )
}
