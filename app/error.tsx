'use client'
export default function Error({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div className="card">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <p className="opacity-80">{error.message}</p>
      <button className="btn mt-4" onClick={() => reset()}>Try again</button>
    </div>
  )
}
