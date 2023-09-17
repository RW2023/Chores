import React from 'react';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './theme';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';

import HomePage from './pages/HomePage';
import ParentPage from './pages/ParentPage';
import ChildPage from './pages/ChildPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/parent" element={<ParentPage />} />
            <Route path="/child" element={<ChildPage />} />
          </Routes>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
