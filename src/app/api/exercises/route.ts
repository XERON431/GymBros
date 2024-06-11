// app/api/exercises/route.js
import { NextResponse } from 'next/server';
import connectDB from '../../../utils/db';
import Exercise from '../../../models/Exercise';

export async function GET() {
  await connectDB();
  try {
    const exercises = await Exercise.find({});
    return NextResponse.json({ success: true, data: exercises });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(req) {
  await connectDB();
  try {
    const body = await req.json();
    const exercise = new Exercise(body);
    await exercise.save();
    return NextResponse.json({ success: true, data: exercise });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
