import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Registration from "./pages/Register/register";
import LandingPage from "./pages/Landing/landing";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/login";
import Dashboard from "./pages/dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Signup from "./pages/Signup/signup";

import { checkUserSession, signOutStart } from "./store/user/user.action";
import { signOutUser } from "./utils/firebase/firebase.utils";
import { PrivateRoute } from "./components/PrivateRoute/privateRoute";
import { selectCurrentUser } from "./store/user/user.selector";
import ComingSoon from "./pages/comingSoon/ComingSoon";

function App() {
  
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const handleSidebar = () => {
    setDisplay(!display);
  };
  useEffect(()=>{
    dispatch(checkUserSession());
  },[])

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
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<PrivateRoute><Registration /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
        <Route path="/coming-soon" element={<PrivateRoute><ComingSoon/></PrivateRoute>}/>
  
      </Routes>
      <Footer />
    </>
  );
}

export default App;
