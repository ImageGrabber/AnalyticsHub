import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {
  Clock,
  Home,
  Calendar,
  BarChart3,
  Settings,
} from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AnalyticsHub - Modern Dashboard',
  description: 'A comprehensive analytics and data visualization dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-background text-text'}>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="sidebar w-20 flex flex-col items-center py-6 gap-4 rounded-2xl m-4 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6">
              <Clock className="text-white w-6 h-6" />
            </div>
            <nav className="flex flex-col gap-4 flex-1">
              <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent">
                <Home className="w-6 h-6 text-white" />
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-accent/80">
                <Calendar className="w-6 h-6 text-accent" />
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-accent/80">
                <BarChart3 className="w-6 h-6 text-accent" />
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-accent/80 mt-auto">
                <Settings className="w-6 h-6 text-accent" />
              </button>
            </nav>
          </aside>
          {/* Main content */}
          <main className="flex-1 flex flex-col">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
} 