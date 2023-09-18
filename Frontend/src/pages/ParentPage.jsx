import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AuthContainer from '../containers/AuthContainer';

const ParentPage = () => {
  return (
    <>
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h1">
          Parent Dashboard
        </Typography>
        {/* Insert Parent-specific components and logic here */}
      </Box>
    </Container>
     <AuthContainer />
     </>
  );
};

export default ParentPage;

