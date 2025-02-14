import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useUser } from "./context/UserContext";
import MainFeed from './pages/MainFeed';
import Profile from './pages/Profile';
import Finance from './pages/Finance';
import Messaging from './pages/Messaging/Messaging';
import Chat from './pages/Messaging/Chat';
import GigSearch from './pages/GigSearch/GigSearch';
import JobApplication from './pages/GigSearch/JobApplication';
import ChooseAccount from './pages/FirstTimeUser/ChooseAccount';

const App = () => {
  const { userType, isFirstTimeUser } = useUser();

  console.log("App.js: userType =", userType);
  console.log("App.js: isFirstTimeUser =", isFirstTimeUser);

  if (isFirstTimeUser === null) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>
        {/* First-Time User Onboarding */}
        {isFirstTimeUser ? (
          <>
            <Route path="/choose-account" element={<ChooseAccount />} />
            <Route path="*" element={<Navigate to="/choose-account" replace />} />
          </>
        ) : userType === "gig-worker" ? (
          <Route path="*" element={<Navigate to="/gig-worker/dashboard" replace />} />
        ) : userType === "client" ? (
          <Route path="*" element={<Navigate to="/client/dashboard" replace />} />
        ) : (
          <>
            <Route path="/choose-account" element={<ChooseAccount />} />
            <Route path="/" element={<MainFeed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/messaging" element={<Messaging />} />
            <Route path="/chat/:id" element={<Chat />} />
            <Route path="/search" element={<GigSearch />} />
            <Route path="/search/job-application/:id" element={<JobApplication />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
