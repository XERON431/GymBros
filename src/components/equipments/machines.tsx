import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemText, Box, CircularProgress } from "@mui/material";
import CustomModal from "../modals/Modal";
import AddExerciseForm from "../forms/AddExerciseForm";

interface Exercise {
  name: string;
  category: string;
  sets: number;
  reps: number;
  day: string;
  date: string;
}

interface Category {
  name: string;
  exercises: Exercise[];
}

interface Day {
  day: string;
  date: string;
  categories: Category[];
}

const StrengthTrainingMachines: React.FC = () => {
  const [exerciseModalOpen, setExerciseModalOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [days, setDays] = useState<Day[]>([]);
  const [expandedDay, setExpandedDay] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch('/api/exercises');
        const result = await response.json();
        if (result.success) {
          const fetchedDays: Day[] = result.data.reduce((acc: Day[], exercise: Exercise) => {
            const dayIndex = acc.findIndex((day) => day.day === exercise.day && day.date === exercise.date);
            if (dayIndex !== -1) {
              const categoryIndex = acc[dayIndex].categories.findIndex((cat) => cat.name === exercise.category);
              if (categoryIndex !== -1) {
                acc[dayIndex].categories[categoryIndex].exercises.push(exercise);
              } else {
                acc[dayIndex].categories.push({ name: exercise.category, exercises: [exercise] });
              }
            } else {
              acc.push({ day: exercise.day, date: exercise.date, categories: [{ name: exercise.category, exercises: [exercise] }] });
            }
            return acc;
          }, []);
          setDays(fetchedDays);
        } else {
          console.error(result.error);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExercises();
  }, []);

  const handleExerciseModalClose = () => {
    setExerciseModalOpen(false);
  };

  const handleExerciseClick = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setExerciseModalOpen(true);
  };

  const handleExerciseAdded = (newExercise: Exercise) => {
    const dayIndex = days.findIndex((day) => day.day === newExercise.day && day.date === newExercise.date);
    if (dayIndex !== -1) {
      const categoryIndex = days[dayIndex].categories.findIndex((cat) => cat.name === newExercise.category);
      if (categoryIndex !== -1) {
        const updatedDays = [...days];
        updatedDays[dayIndex].categories[categoryIndex].exercises.push(newExercise);
        setDays(updatedDays);
      } else {
        const updatedDays = [...days];
        updatedDays[dayIndex].categories.push({ name: newExercise.category, exercises: [newExercise] });
        setDays(updatedDays);
      }
    } else {
      setDays([...days, { day: newExercise.day, date: newExercise.date, categories: [{ name: newExercise.category, exercises: [newExercise] }] }]);
    }
  };

  const toggleDayExpansion = (dayDate: string) => {
    if (expandedDay === dayDate) {
      setExpandedDay(null);
    } else {
      setExpandedDay(dayDate);
    }
  };

  const toggleCategoryExpansion = (categoryName: string) => {
    if (expandedCategory === categoryName) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryName);
    }
  };

  return (
    <div>
      <AddExerciseForm onExerciseAdded={handleExerciseAdded} />
      {isLoading ? (
        <div style={{ textAlign: 'center', padding: 20 }}>
          <CircularProgress color="secondary" />
          <Typography variant="body2" gutterBottom>Loading exercises...</Typography>
        </div>
      ) : (
        <>
          {days.map((day, index) => (
            <Box key={index}>
              <Typography
                variant="h6"
                color={expandedDay === `${day.day}-${day.date}` ? "primary" : "initial"}
                onClick={() => toggleDayExpansion(`${day.day}-${day.date}`)}
                style={{ cursor: "pointer", fontWeight: "bold" }}
              >
                {`${day.day}, ${new Date(day.date).toLocaleDateString()}`}
              </Typography>
              {expandedDay === `${day.day}-${day.date}` && (
                <>
                  {day.categories.map((category, index) => (
                    <Box key={index} ml={2}>
                      <Typography
                        variant="subtitle1"
                        color={expandedCategory === category.name ? "primary" : "initial"}
                        onClick={() => toggleCategoryExpansion(category.name)}
                        style={{ cursor: "pointer", fontWeight: "bold" }}
                      >
                        {category.name}
                      </Typography>
                      {expandedCategory === category.name && (
                        <List>
                          {category.exercises.map((exercise, index) => (
                            <ListItem key={index} sx={{ '&:hover': { backgroundColor: '#f0f0f0' } }}>
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
                </>
              )}
            </Box>
          ))}
        </>
      )}
      <CustomModal
        open={exerciseModalOpen}
        handleClose={handleExerciseModalClose}
        title={selectedExercise ? selectedExercise.name : ""}
        fullscreen={false} // or true, depending on your needs
      >
        {selectedExercise && (
          <Box>
            <Typography variant="body1">
              Exercise Details: Sets - {selectedExercise.sets}, Reps - {selectedExercise.reps}
            </Typography>
            {/* You can add more details or components here based on your requirements */}
          </Box>
        )}
      </CustomModal>
    </div>
  );
};

export default StrengthTrainingMachines;
