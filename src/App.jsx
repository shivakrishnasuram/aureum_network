import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Home from './pages/Main';
import Main from './pages/Main';

import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import SidebarLayout from './components/SidebarLayout';
import Profile from './pages/Profile';
import Transactions from './pages/Transactions';
import About from './pages/About';


const App = () => {
  const location = useLocation();

  // Check if current path is part of dashboard
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!isDashboard && <Navbar />}

      <Routes>
        {/* Public Routes */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<RegisterForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />

        {/* Dashboard (Sidebar layout with nested pages) */}
        <Route path="/dashboard" element={<SidebarLayout />}>
          <Route path="main" element={<Main />} />
          <Route path="profile" element={<Profile />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
