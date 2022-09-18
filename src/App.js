import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Registration from "./pages/Register/register";
import LandingPage from "./pages/Landing/landing";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/login";
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/Signup/signup";

import { checkUserSession, signOutStart } from "./store/user/user.action";
import { signOutUser } from "./utils/firebase/firebase.utils";

function App() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const handleSidebar = () => {
    setDisplay(!display);
  };

  // signOutUser();
  // useEffect(() => {
  //   dispatch(signOutStart());
  // });

  useEffect(() => {
    dispatch(checkUserSession());
  });

  return (
    <>
      {display ? (
        <Sidebar handleSidebar={handleSidebar} />
      ) : (
        <Navbar handleSidebar={handleSidebar} />
      )}
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
