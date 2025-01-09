import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainFeed from './pages/MainFeed';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainFeed />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
