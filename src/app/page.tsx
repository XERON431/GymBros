import React from 'react';
import { Typography, Container, Box, List, ListItem, ListItemText } from '@mui/material';

const Home: React.FC = () => {
  // Dummy data for the list of gym machines
  const gymMachines = ['Treadmill', 'Elliptical Trainer', 'Stationary Bike', 'Rowing Machine', 'Barbell', 'Dumbbells', 'Leg Press Machine'];

  // Dummy motivational quote
  const motivationalQuote = "The only bad workout is the one that didn't happen.";

  return (
    <Container maxWidth="md" sx={{ paddingTop: '50px' }}>
      {/* Motivational quote box */}
      <Box bgcolor="primary.main" color="white" p={2} mb={4} textAlign="center">
        <Typography variant="h5" color="white">{motivationalQuote}</Typography> {/* Change text color to black */}
      </Box>

      {/* List of gym machines box */}
      <Box bgcolor="background.paper" p={2} borderRadius={8}>
        <Typography variant="h6" gutterBottom color="black">List of Gym Machines</Typography> {/* Change text color to black */}
        <List>
          {gymMachines.map((machine, index) => (
            <ListItem key={index}>
              <ListItemText primary={machine} primaryTypographyProps={{ color: 'black' }} /> {/* Change text color to black */}
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Home;
