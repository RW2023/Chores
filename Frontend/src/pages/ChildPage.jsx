import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AuthContainer from '../containers/AuthContainer';
import '../index.css';
const ChildPage = () => {
  return (
    <>
      <Container>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h1">
            Child Dashboard
          </Typography>
          {/* Insert Child-specific components and logic here */}
        </Box>
      </Container>
      <AuthContainer />
    </>
  );
};

export default ChildPage;
