import { NextResponse } from "next/server";
import { connectionDb } from "@/utils/mongoose";

export async function GET() {
  return NextResponse.json({
    message: "obteniendo tareas..."
  })
}
export async function POST() {
  return NextResponse.json({
    message: "creando tareas..."
  })
}
