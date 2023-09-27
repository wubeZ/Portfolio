import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wubshet Zeleke',
  description: 'Full-stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
      <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={` ${inter.className} transition-colors ease-linear`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
