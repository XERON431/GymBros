// src/pages/about.tsx

import React from 'react';
import { Typography, Container, Grid, Card, CardContent } from '@mui/material';

const About: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: '50px' }}>
      <Typography variant="h2" align="center" gutterBottom>
        About GymBroses
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Welcome to GymBros, your ultimate gym companion!
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body2" component="p">
                To empower individuals on their fitness journey by providing comprehensive workout assistance and guidance.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body2" component="p">
                To revolutionize the gym experience by leveraging cutting-edge technology and personalized training solutions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Our Values
              </Typography>
              <Typography variant="body2" component="p">
                - Commitment to excellence <br />
                - Customer-centric approach <br />
                - Continuous innovation <br />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
