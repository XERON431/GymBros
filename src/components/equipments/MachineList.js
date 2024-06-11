import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Typography, Grid } from '@mui/material';
import AddMachineForm from "../forms/AddMachineForm"

const MachineList= () => {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    fetchMachines();
  }, []);

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
    }
  };
  // Define a function to handle the addition of a new machine
  const handleMachineAdded = (newMachine) => {
    // Implement your logic here to handle the addition of a new machine
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
        {machines.length === 0 ? (
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
      )}
        </Grid>
      </Grid>
       
    </div>
  );
};

export default MachineList;
