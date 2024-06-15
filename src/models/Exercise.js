// models/Exercise.js
import mongoose from 'mongoose';

const ExerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  sets: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  day: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const Exercise = mongoose.models.Exercise || mongoose.model('Exercise', ExerciseSchema);
export default Exercise;
