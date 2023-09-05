import { NextResponse } from "next/server"

export async function GET(request, {params}) {
  return NextResponse.json({
  message: `obteniendo: GET ${params.id}`
  })
}
export async function PUT(request, {params}) {
  return NextResponse.json({
    message: `actualizando: PUT ${params.id}`
  })
}
export async function DELETE(request, {params}) {
  return NextResponse.json({
    message: `eliminando: DELETE ${params.id}`
  })
}

 