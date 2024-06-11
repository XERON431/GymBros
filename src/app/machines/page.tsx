"use client";
import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic

// Import AddMachineForm dynamically to make it client-side only
// const AddMachineForm = dynamic(() => import('../../components/forms/AddMachineForm'), { ssr: false });
// const MachineList = dynamic(() => import('../../components/equipments/MachineList'), { ssr: false });
import MachineList from '../../components/equipments/MachineList';

const Machines: React.FC = () => {
  
  

  return (
    <Container maxWidth="lg" sx={{ paddingTop: '50px' }}>
      <Typography variant="h2" align="center" gutterBottom>
        Machines
      </Typography>
      <Box bgcolor="background.paper" p={2} borderRadius={8}>
      <MachineList />
      </Box>
    </Container>
  );
};

export default Machines;
