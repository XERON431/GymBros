"use client";
import React from "react";
import {
  Typography,
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import StrengthTrainingMachines from "@/components/equipments/machines";

const Home: React.FC = () => {
  

  // Dummy motivational quote
  const motivationalQuote =
    "The only bad workout is the one that didn't happen.";

  return (
    <Container maxWidth="md" sx={{ paddingTop: "50px" }}>
      {/* Motivational quote box */}
      <Box bgcolor="primary.main" color="white" p={2} mb={4} textAlign="center">
        <Typography variant="h5" color="white">
          {motivationalQuote}
        </Typography>{" "}
        {/* Change text color to black */}
      </Box>

      {/* List of gym machines box */}
      <Box bgcolor="background.paper" p={2} borderRadius={8}>
        {/* Styled Typography as heading */}
        <Typography
          variant="h4"
          gutterBottom
          color="primary"
          fontWeight="bold"
          sx={{ marginBottom: 2 }}
        >
          List of Gym Machines
        </Typography>
        {/* List of gym machines */}
        <StrengthTrainingMachines />
      </Box>
    </Container>
  );
};

export default Home;
