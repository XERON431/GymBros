import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import connectDB from '../../../utils/db';
import Machine from '../../../models/Machines'; // Make sure to import your Machine model

export async function GET() {
  await connectDB();
  try {
    const machines = await Machine.find({});
    return NextResponse.json({ success: true, data: machines });
  } catch (error) {
    const err = error as Error;
    return NextResponse.json({ success: false, error: err.message });
  }
}

export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const body = await req.json();
    const machine = new Machine(body);
    await machine.save();
    return NextResponse.json({ success: true, data: machine });
  } catch (error) {
    const err = error as Error;
    return NextResponse.json({ success: false, error: err.message });
  }
}
