import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Dashboard API will be implemented by Person 3.",
  });
}