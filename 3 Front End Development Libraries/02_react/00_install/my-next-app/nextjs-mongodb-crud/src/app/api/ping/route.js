import { NextResponse } from "next/server";
import { connectionDb } from "@/utils/mongoose";
export async function GET() {
  connectionDb();
  return NextResponse.json(
    {mesage: "Hello World!"}
  )
}