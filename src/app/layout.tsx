import clsx from 'clsx'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import SiteNav from '@/components/SiteNav'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SAR Training Game',
  description: 'Generate ideas for search and rescue trainings by mashing up different skills.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={clsx(inter.className, 'relative bg-fixed bg-center bg-cover bg-no-repeat')}
        style={{
          background:
            'linear-gradient(rgba(200, 200, 200, 0.9), rgba(200, 200, 200, 0.9)), url(images/topo_background.jpg)',
        }}>
        <header>
          <SiteNav />
        </header>
        <main className='max-w-7xl mx-auto'>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}
