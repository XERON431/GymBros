// app/api/machines/route.js
import { NextResponse } from 'next/server';
import connectDB from '../../../utils/db';
import Machine from '../../../models/Machines'; // Make sure to import your Machine model

export async function GET() {
  await connectDB();
  try {
    const machines = await Machine.find({});
    return NextResponse.json({ success: true, data: machines });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(req) {
  await connectDB();
  try {
    const body = await req.json();
    const machine = new Machine(body);
    await machine.save();
    return NextResponse.json({ success: true, data: machine });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
