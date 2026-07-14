import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    message: "Chat API will be implemented by Person 2.",
  });
}