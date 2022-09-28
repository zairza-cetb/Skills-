import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Registration from "./pages/Register/register";
import LandingPage from "./pages/Landing/landing";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/login";
import Dashboard from "./pages/dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Signup from "./pages/Signup/signup";

import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

import { checkUserSession } from "./store/user/user.action";
import { PrivateRoute } from "./components/PrivateRoute/privateRoute";
import ComingSoon from "./pages/comingSoon/ComingSoon";
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./pages/Profile";
import MentorRegistration from "./pages/Mentor/MentorRegistration";
import { Mentor } from "./components/Mentor/Mentor";
function App() {

  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const handleSidebar = () => {
    setDisplay(!display);
  };
  useEffect(() => {
    dispatch(checkUserSession());
  }, [])

  return (
    <>
      {display ? (
        <Sidebar handleSidebar={handleSidebar} />
      ) : (
        <Navbar handleSidebar={handleSidebar} />
      )}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/coming-soon" element={<PrivateRoute><ComingSoon /></PrivateRoute>} />
        <Route path="/me" element={<PrivateRoute><Profile /></PrivateRoute>} />
        {/* <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} /> */}
        <Route path="/mentor" element={<Mentor/>}>
          <Route path="register" element={<MentorRegistration/>}/>
          <Route path="admin" element={<AdminDashboard/>}/>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
