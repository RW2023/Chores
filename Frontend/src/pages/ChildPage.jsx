import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const ChildPage = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h1">
          Child Dashboard
        </Typography>
        {/* Insert Child-specific components and logic here */}
      </Box>
    </Container>
  );
};

export default ChildPage;
