import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { Typography, Button, Container, Box } from '@mui/material';

const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h1" gutterBottom>
          Welcome to ChoreMaster
        </Typography>

        <Typography variant="body1" paragraph>
          {user ? `Logged in as ${user.name}` : 'You are not logged in.'}
        </Typography>

        <Button variant="contained" color="primary" component={RouterLink} to="/parent">
          Parent Dashboard
        </Button>

        <Button variant="contained" color="secondary" component={RouterLink} to="/child" sx={{ ml: 2 }}>
          Child Dashboard
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
