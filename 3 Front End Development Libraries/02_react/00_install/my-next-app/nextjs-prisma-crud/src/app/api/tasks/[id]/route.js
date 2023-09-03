import { NextResponse } from "next/server";
import {prisma} from "@/libs/prisma";

export async function GET(request, {params}){
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id)
    }
  });

  return NextResponse.json(task)
}


export async function PUT(request, {params}){
 try {
  const data = await request.json();
  const task = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    // data: {
    //   title: params.title,
    //   description: params.description
    // }
    data: data
  });

  return NextResponse.json({task});
 } catch (error) {
  return NextResponse.json(error.meta.cause)
 }
}

export async function DELETE(request, {params}){
  try {
    const task = await prisma.task.delete({
      where: {
        id: Number(params.id)
      }
    });
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json(error.meta.cause)
  }
}