import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SiteNav from '@/components/SiteNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SAR Training Game',
  description: 'Generate ideas for search and rescue trainings by mashing up different skills.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <SiteNav />
        </header>
        <main className="max-w-7xl mx-auto">
          {children}
        </main>
        <footer>
        </footer>
      </body>
    </html>
  )
}
