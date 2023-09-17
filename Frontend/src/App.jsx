import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';

import HomePage from './pages/HomePage';
import ParentPage from './pages/ParentPage';
import ChildPage from './pages/ChildPage';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/parent" element={<ParentPage />} />
          <Route path="/child" element={<ChildPage />} />
          {/* Add more Routes here as needed */}
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
