import './globals.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/context/ThemeContext'
import ThemeToggle from '@/components/ThemeToggle'


export const metadata: Metadata = {
  title: 'Sujane Natasha Lopez – React/Next.js Portfolio',
  description: 'Frontend engineer (Angular → React/Next.js). Demos: hooks, context, state, forms, Suspense, API routes.',
  metadataBase: new URL('https://example.com'), // change after deploy (or remove)
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1220' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <header className="nav">
            <nav className="container flex items-center gap-4 py-3">
              <Link href="/" className="font-semibold hover:opacity-90">Home</Link>
              <Link href="/playground" className="hover:opacity-90">Playground</Link>
              <Link href="/api/me" prefetch={false} className="hover:opacity-90">API</Link>
              <div className="ml-auto">
                <ThemeToggle />
              </div>
            </nav>
          </header>

          <main className="container py-10">
            {children}
          </main>

          <footer className="container py-10 opacity-70 text-sm">
            Built with Next.js App Router • Hooks • Context • Zustand • Forms • Suspense • API routes • Server Actions
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
