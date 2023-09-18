import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import RegistrationForm from '../forms/RegistrationForm';
import { Button, Box } from '@mui/material';

const AuthContainer = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? <LoginForm /> : <RegistrationForm />}
      <Box display="flex" justifyContent="center" mt={3}>
        <Button variant="contained" color="primary" onClick={() => setShowLogin(!showLogin)} style={{ marginRight: '10px' }}>
          {showLogin ? 'Switch to Register' : 'Switch to Login'}
        </Button>
        <Button component={Link} to="/" variant="contained" color="secondary">
          Home
        </Button>
      </Box>
    </div>
  );
};

export default AuthContainer;
