import React, { useState } from "react";
import { Box, Button, TextField, MenuItem } from "@mui/material";

const categories = [
  { value: "Upper Body", label: "Upper Body" },
  { value: "Lower Body", label: "Lower Body" },
  { value: "Core", label: "Core" },
  { value: "Full Body", label: "Full Body" }
];

const AddMachineForm = ({ onMachineAdded }) => {
  const [machineName, setMachineName] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!machineName || !category) return;

    const response = await fetch('/api/machines', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: machineName, category })
    });

    const result = await response.json();
    if (result.success) {
      onMachineAdded(result.data);
      setMachineName("");
      setCategory("");
    } else {
      console.error(result.error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Machine Name"
        value={machineName}
        onChange={(e) => setMachineName(e.target.value)}
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
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Machine
      </Button>
    </Box>
  );
};

export default AddMachineForm;
