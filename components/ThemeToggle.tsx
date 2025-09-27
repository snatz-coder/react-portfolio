'use client'

import { useTheme } from '@/context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const next = theme === 'dark' ? 'Light' : 'Dark'

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-xl border border-sky-400/60 px-3 py-1 text-sm hover:bg-sky-400/10 transition"
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      {theme === 'dark' ? '🌞' : '🌙'} {next}
    </button>
  )
}
