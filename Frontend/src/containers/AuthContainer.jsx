import React, { useState } from 'react';
import LoginForm from '../forms/LoginForm';
import RegistrationForm from '../forms/RegistrationForm';
import { Button, Box } from '@mui/material';

const AuthContainer = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? <LoginForm /> : <RegistrationForm />}
      <Box display="flex" justifyContent="center" mt={3}>
        <Button variant="contained" color="primary" onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? 'Switch to Register' : 'Switch to Login'}
        </Button>
      </Box>
    </div>
  );
};

export default AuthContainer;
