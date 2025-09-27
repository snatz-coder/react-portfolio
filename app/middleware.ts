import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export function middleware(_req: NextRequest) {
  const res = NextResponse.next()
  res.headers.set('x-portfolio', 'true')
  return res
}
