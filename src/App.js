import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Registration from "./pages/Register/register";
import LandingPage from "./pages/Landing/landing";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/login";
import Footer from "./components/Footer/Footer";
import Signup from "./pages/Signup/signup";

import { checkUserSession } from "./store/user/user.action";
import { PrivateRoute } from "./components/PrivateRoute/privateRoute";
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./pages/Profile";
import MentorRegistration from "./pages/Mentor/MentorRegistration";
import { Mentor } from "./components/Mentor/Mentor";
import MentorProfile from "./pages/MentorProfile";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/dashboard/Dashboard";
import ComingSoon from "./pages/comingSoon/ComingSoon";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
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
        {/* <Route path="/coming-soon" element={<PrivateRoute><ComingSoon /></PrivateRoute>} /> */}
        <Route path="/me" element={<PrivateRoute><Profile /></PrivateRoute>} />
        {/* <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} /> */}
        <Route path="/mentor" element={<Mentor/>}>
          <Route index element={<PrivateRoute><MentorProfile /></PrivateRoute>}/>
          <Route path="me" element={<PrivateRoute><MentorProfile /></PrivateRoute>} />
          <Route path="register" element={<PrivateRoute><MentorRegistration/></PrivateRoute>}/>
          {/* <Route path="dashboard" element={<ComingSoon />}/> */}
          <Route path="dashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
