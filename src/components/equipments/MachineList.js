import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Typography, Grid, CircularProgress } from '@mui/material';
import AddMachineForm from "../forms/AddMachineForm";

const MachineList = () => {
  const [machines, setMachines] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Flag for loading state

  useEffect(() => {
    const fetchMachines = async () => {
      try {
        const response = await fetch('/api/machines');
        const data = await response.json();
        if (data.success) {
          setMachines(data.data);
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Always set loading to false after fetching
      }
    };

    fetchMachines();
  }, []);

  const handleMachineAdded = (newMachine) => {
    setMachines((prevMachines) => [...prevMachines, newMachine]);
    console.log('New machine added:', newMachine);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {/* Pass the handleMachineAdded function as a prop to AddMachineForm */}
          <AddMachineForm onMachineAdded={handleMachineAdded} />
        </Grid>
        <Grid item xs={12} md={6}>
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: 20 }}>
              <CircularProgress color="secondary" />
              <Typography variant="body2" gutterBottom>Loading machines...</Typography>
            </div>
          ) : (
            machines.length === 0 ? (
              <Typography variant="body2" color="textSecondary" align="center">
                No machines found.
              </Typography>
            ) : (
              <List>
                {machines.map((machine, index) => (
                  <ListItem key={index} sx={{ color: 'black', bgcolor: 'white' }}>
                    <ListItemText primary={machine.name} secondary={`Category: ${machine.category}`} />
                  </ListItem>
                ))}
              </List>
            )
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default MachineList;