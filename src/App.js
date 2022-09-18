import React, { useEffect, useState } from "react";
import Registration from "./pages/Register/register";
import LandingPage from "./pages/Landing/landing";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/login";
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/Signup/signup";
import { useDispatch } from "react-redux";
import { signOutStart } from "./store/user/user.action";

function App() {
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();
  const handleSidebar = () => {
    setDisplay(!display);
  };
  // useEffect(()=>{
  //   dispatch(signOutStart());
  // })

  return (
    <>
      {display ? (
        <Sidebar handleSidebar={handleSidebar} />
      ) : (
        <Navbar handleSidebar={handleSidebar} />
      )}
      <Routes>
        <Route path="/register" element={<Registration />} />
      </Routes>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
