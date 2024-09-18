import ParentProvider from '@/components/shared/ParentProvider'
import { lato, lora, poppins, quickSand, roboto } from '@/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Book Teller',
  description: 'Booking Engine',
  icons: '/favicon.ico'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <html lang="en">
        <link rel="shortcut icon" href="/favicon.ico" />
        <body
          className={`${quickSand.variable} ${lora.variable} ${lato.variable} ${roboto.variable} ${poppins.variable}`}
        >
          <ParentProvider>{children}</ParentProvider>
        </body>
      </html>
    </>
  )
}
