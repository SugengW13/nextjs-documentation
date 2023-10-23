import React from "react";
import { Inter } from 'next/font/google'
import Providers from "@/app/providers";
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js Documentation</title>
      </head>

      <body className={inter.className}>
        <Providers>
          <main className='min-h-screen'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
