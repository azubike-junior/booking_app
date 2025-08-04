import ParentProvider from '@/components/shared/ParentProvider'
import { lato, lora, poppins, quickSand, roboto} from '@/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
// import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './globals.css'
import localFont from 'next/font/local'


export const metadata: Metadata = {
  title: "Send Money Home, Instantly | Fast. Secure. Affordable. Anywhere in Africa.",
  description: 'Sendora',
  icons: '/favicon.ico'
}

const Geist = localFont({
  src: [
    {
      path: '../../public/Geist/Geist-Light.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/Geist/Geist-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/Geist/Geist-Semibold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/Geist/Geist-Bold.ttf',
      weight: '800',
      style: 'normal',
    },
     {
      path: '../../public/Geist/Geist-ExtraBold.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-geist', 
})

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable:'--font-inter'
})

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
          className={`${inter.className} ${Geist.className}`}
        >
          <ParentProvider>{children}</ParentProvider>
        </body>
      </html>
    </>
  )
}
