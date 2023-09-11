import { NextResponse } from "next/server";

export async function GET(request, {params}) {
  return NextResponse.json({message: `obteniendo tarea: ${params.id}`});
}

export async function DELETE(request, {params}) {
  return NextResponse.json({message: `eliminando tarea: ${params.id}`});
}

export async function PUT(request, {params}) {
  return NextResponse.json({message: `actualizando tarea: ${params.id}`});
}