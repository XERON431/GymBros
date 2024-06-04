// src/pages/contact.tsx

import React from 'react';
import { Typography, Container, Grid, TextField, Button } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: '50px' }}> {/* Add padding from the top */}
      <Typography variant="h2" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Have questions or feedback? Get in touch with us!
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <TextField
            label="Name"
            variant="outlined"
            placeholder='Enter Name'
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: 'white' } }} // Set label color to white
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '& input': { color: 'white' },
                '&::placeholder': { color: 'white' }, // Placeholder color
              },
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: 'white' } }} // Set label color to white
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '& input': { color: 'white' },
                '&::placeholder': { color: 'white' }, // Placeholder color
              },
            }}
          />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={6}
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: 'white' } }} // Set label color to white
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '& input': { color: 'white' },
                '&::placeholder': { color: 'white' }, // Placeholder color
              },
            }}
          />
          <Button variant="contained" color="primary" fullWidth>
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
