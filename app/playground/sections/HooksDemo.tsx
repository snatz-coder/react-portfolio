'use client'
import { useCallback, useEffect, useMemo, useState } from 'react'

function expensiveFib(n: number): number { return n <= 1 ? n : expensiveFib(n-1) + expensiveFib(n-2) }

export default function HooksDemo() {
  const [count, setCount] = useState(10)
  useEffect(() => { document.title = `Count: ${count}` }, [count])
  const fib = useMemo(() => expensiveFib(Math.min(count, 20)), [count])
  const inc = useCallback(() => setCount(c => c + 1), [])
  return (
    <section className="card">
      <h2 className="text-xl font-semibold">Hooks: useState/useEffect/useMemo/useCallback</h2>
      <div className="flex items-center gap-3 mt-3">
        <button className="btn" onClick={inc}>Increment</button>
        <span>Count: <b>{count}</b></span>
        <span>Fib(count): <code>{fib}</code></span>
      </div>
    </section>
  )
}
