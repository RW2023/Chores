import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Redirect } from 'react-router-dom';
import ParentDashboard from './ParentDashboard'; // Import your ParentDashboard component
import ChildDashboard from './ChildDashboard'; // Import your ChildDashboard component

const DashboardContainer = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/login-or-register" />;
  }

  return (
    <div>
      {user.role === 'parent' ? <ParentDashboard /> : <ChildDashboard />}
    </div>
  );
};

export default DashboardContainer;
