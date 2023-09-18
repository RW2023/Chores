import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const AuthContainer = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? <LoginForm /> : <RegistrationForm />}
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default AuthContainer;
