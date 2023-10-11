import { NextResponse } from "next/server";
export async function GET() {
  // query database
  // extract params
  // comunicate with other services

  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  return NextResponse.json(data);

  // return new Response("Hello World!");
  // return NextResponse.json("Hello World!");
  // return NextResponse.json({
  //   message: "Obteniendo datos!"
  // });
}

export async function POST(request) {
  const {nombre, apellido} = await request.json(); // informacion que envia el cliente en su consulta http
  return NextResponse.json({message: "creando datos"});
}
export function PUT() {
  return NextResponse.json({message: "actualizando datos"});
}
export function DELETE() {
  return NextResponse.json({message: "eliminando datos"});
}