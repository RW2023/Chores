import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import RegistrationForm from '../forms/RegistrationForm';

const ParentPage = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h1">
          Parent Dashboard
        </Typography>
        {/* Insert Parent-specific components and logic here */}
      </Box>
      <RegistrationForm />
    </Container>
  );
};

export default ParentPage;

