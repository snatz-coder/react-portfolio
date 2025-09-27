'use client'
import { useTheme } from '@/context/ThemeContext'
export default function ContextDemo() {
  const { theme, toggle } = useTheme()
  return (
    <section className="card">
      <h2 className="text-xl font-semibold">Context: Theme</h2>
      <p className="opacity-80">Current theme: <b>{theme}</b></p>
      <button className="btn mt-3" onClick={toggle}>Toggle theme</button>
    </section>
  )
}
