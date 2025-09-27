'use client'

import { useCounterStore } from "@/store/counterStore"


export default function ZustandDemo() {
  const count = useCounterStore(s => s.count)
  const inc = useCounterStore(s => s.inc)
  const dec = useCounterStore(s => s.dec)
  return (
    <section className="card">
      <h2 className="text-xl font-semibold">Global state: Zustand</h2>
      <div className="flex items-center gap-3 mt-3">
        <button className="btn" onClick={dec}>-</button>
        <span>Count: <b>{count}</b></span>
        <button className="btn" onClick={inc}>+</button>
      </div>
    </section>
  )
}


