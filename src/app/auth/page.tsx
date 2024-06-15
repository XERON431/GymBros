"use client";

import { getProviders, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Button, Container, Typography } from '@mui/material';

const SignInPage = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const loadProviders = async () => {
      const response = await getProviders();
      setProviders(response ?? []);
    };

    loadProviders();
  }, []);

  const handleClick = (() => {
    console.log(providers)
  })

  return (
    <Container maxWidth="xs" sx={{ paddingTop: '100px' }}>
      <Typography variant="h5" align="center" gutterBottom>
        Sign In
      </Typography>
      <button onClick={handleClick}>get providers</button>
      {providers.map((provider) => (
        <div key={provider.name}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => signIn(provider.id)}
            fullWidth
          >
            Sign in with {provider.name}
          </Button>
        </div>
      ))}
    </Container>
  );
};

export default SignInPage;
