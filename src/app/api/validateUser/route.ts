import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const data = await request.json();
  } catch (error) {}
  return NextResponse.json({ data: "Hiteam" });
}
