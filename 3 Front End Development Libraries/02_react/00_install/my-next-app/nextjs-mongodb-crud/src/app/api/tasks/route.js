import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Task from "@/models/Task";
export async function GET() {
  connectDB();
  const tasks = await Task.find();
  return NextResponse.json(tasks);
}

export async function POST(request) {
  try {
    const data = await request.json();
    const newTask = new Task(data);
    const saveTask = await newTask.save();
    return NextResponse.json(saveTask);
  } catch (error) {
    return NextResponse.json(error.message, { status: 400 })
  }
}
