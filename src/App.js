import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainFeed from './pages/MainFeed';
import Profile from './pages/Profile';
import Finance from './pages/Finance';
import Messaging from './pages/Messaging/Messaging';
import Chat from './pages/Messaging/Chat';
import GigSearch from './pages/GigSearch/GigSearch';
import JobApplication from './pages/GigSearch/JobApplication';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainFeed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/search" element={<GigSearch />} />
        <Route path="/search/job-application/:id" element={<JobApplication />} />
      </Routes>
    </Router>
  );
};

export default App;
