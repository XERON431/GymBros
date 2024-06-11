// components/AddExerciseForm.js
import React, { useState } from "react";
import { Box, Button, TextField, MenuItem } from "@mui/material";

const categories = [
  { value: "Upper Body", label: "Upper Body" },
  { value: "Lower Body", label: "Lower Body" },
  { value: "Core", label: "Core" },
  { value: "Full Body", label: "Full Body" }
];

const AddExerciseForm = ({ onExerciseAdded }) => {
  const [exerciseName, setExerciseName] = useState("");
  const [category, setCategory] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!exerciseName || !category || !sets || !reps) return;

    const response = await fetch('/api/exercises', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: exerciseName, category, sets: Number(sets), reps: Number(reps) })
    });

    const result = await response.json();
    if (result.success) {
      onExerciseAdded(result.data);
      setExerciseName("");
      setCategory("");
      setSets("");
      setReps("");
    } else {
      console.error(result.error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Exercise Name"
        value={exerciseName}
        onChange={(e) => setExerciseName(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Category"
        select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        fullWidth
        margin="normal"
      >
        {categories.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        required
        type="number"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        required
        type="number"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Exercise
      </Button>
    </Box>
  );
};

export default AddExerciseForm;
