import { NextResponse } from "next/server";
import { me } from "@/lib/me";

export async function GET() {
  return NextResponse.json(me);
}
