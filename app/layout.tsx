import './globals.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata: Metadata = {
  title: 'React Portfolio – Your Name',
  description: 'A React/Next.js portfolio demonstrating modern React concepts.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <header className="nav">
            <nav className="container flex gap-4 py-3">
              <Link href="/" className="font-semibold">Home</Link>
              <Link href="/playground">Playground</Link>
              <Link href="/api/hello" prefetch={false}>API</Link>
            </nav>
          </header>
          <main className="container py-10">{children}</main>
          <footer className="container py-10 opacity-70 text-sm">
            Built with Next.js App Router • Hooks • Context • Zustand • Forms • Suspense • API routes • Server Actions
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
