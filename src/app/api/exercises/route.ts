import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import connectDB from '../../../utils/db';
import Exercise from '../../../models/Exercise';

export async function GET() {
  await connectDB();
  try {
    const exercises = await Exercise.find({});
    return NextResponse.json({ success: true, data: exercises });
  } catch (error) {
    const err = error as Error;
    return NextResponse.json({ success: false, error: err.message });
  }
}

export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const body = await req.json();
    const exercise = new Exercise(body);
    console.log(exercise)
    await exercise.save();
    return NextResponse.json({ success: true, data: exercise });
  } catch (error) {
    const err = error as Error;
    return NextResponse.json({ success: false, error: err.message });
  }
}
