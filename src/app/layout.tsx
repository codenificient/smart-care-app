import BackgroundWrapper from '@/components/BackgroundWrapper'
import Sidebar from '@/components/Sidebar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter=Inter( { subsets: [ 'latin' ] } )

export const metadata: Metadata={
  title: 'Smart Care',
  description: 'System optimization and security application',
}

export default function RootLayout ( {
  children,
}: {
  children: React.ReactNode
} ) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundWrapper>
          <Sidebar />
          <main className="pl-20 min-h-screen">
            {children}
          </main>
        </BackgroundWrapper>
      </body>
    </html>
  )
}