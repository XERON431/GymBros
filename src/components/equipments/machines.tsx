import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemText, Box } from "@mui/material";
import CustomModal from "../modals/Modal";
import AddExerciseForm from "../forms/AddExerciseForm";

interface Exercise {
  name: string;
  category: string;
  sets: number;
  reps: number;
}

interface Category {
  name: string;
  exercises: Exercise[];
}

const StrengthTrainingMachines: React.FC = () => {
  const [exerciseModalOpen, setExerciseModalOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    const response = await fetch('/api/exercises');
    const result = await response.json();
    if (result.success) {
      const fetchedCategories: Category[] = result.data.reduce((acc: Category[], exercise: Exercise) => {
        const categoryIndex = acc.findIndex((cat) => cat.name === exercise.category);
        if (categoryIndex !== -1) {
          acc[categoryIndex].exercises.push(exercise);
        } else {
          acc.push({ name: exercise.category, exercises: [exercise] });
        }
        return acc;
      }, []);
      setCategories(fetchedCategories);
    } else {
      console.error(result.error);
    }
  };

  const handleExerciseModalClose = () => {
    setExerciseModalOpen(false);
  };

  const handleExerciseClick = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setExerciseModalOpen(true);
  };

  const handleExerciseAdded = (newExercise: Exercise) => {
    const categoryIndex = categories.findIndex((cat) => cat.name === newExercise.category);
    if (categoryIndex !== -1) {
      const updatedCategories = [...categories];
      updatedCategories[categoryIndex].exercises.push(newExercise);
      setCategories(updatedCategories);
    } else {
      setCategories([...categories, { name: newExercise.category, exercises: [newExercise] }]);
    }
  };

  const toggleExpansion = (categoryName: string) => {
    if (expandedCategory === categoryName) {
      setExpandedCategory(null); 
    } else {
      setExpandedCategory(categoryName); 
    }
  };

  return (
    <div>
      <AddExerciseForm onExerciseAdded={handleExerciseAdded} />
      {categories.map((category, index) => (
        <Box key={index}>
          <Typography
            variant="h6"
            color={expandedCategory === category.name ? "primary" : "initial"}
            onClick={() => toggleExpansion(category.name)}
            style={{ cursor: "pointer", fontWeight: "bold" }}
          > 
            {category.name}
          </Typography>
          {expandedCategory === category.name && (
            <List>
              {category.exercises.map((exercise, index) => (
                <ListItem 
                  key={index} 
                  sx={{
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                    },
                  }}
                >
                  <ListItemText
                    primary={`${exercise.name} - Sets: ${exercise.sets}, Reps: ${exercise.reps}`}
                    primaryTypographyProps={{ color: "black" }}
                    onClick={() => handleExerciseClick(exercise)}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      ))}
      <CustomModal
        open={exerciseModalOpen}
        handleClose={handleExerciseModalClose}
        title={selectedExercise ? selectedExercise.name : ""}
        fullscreen={false} // or true, depending on your needs
      >
        {/* Optionally, you can add modal content here */}
        {selectedExercise && (
          <Box>
            <Typography variant="body1">
              Exercise Details: Sets - {selectedExercise.sets}, Reps - {selectedExercise.reps}
            </Typography>
          </Box>
        )}
      </CustomModal>
    </div>
  );
};

export default StrengthTrainingMachines;
