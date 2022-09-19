import React, { useState } from "react";
import Registration from "./pages/Register/register";
import LandingPage from "./pages/Landing/landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/login";
import Dashboard from "./pages/dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Signup from "./pages/Signup/signup";
import CommingSoon from "./pages/commingSoon/CommingSoon";

function App() {
  const [display, setDisplay] = useState(false);
  const handleSidebar = () => {
    setDisplay(!display);
  };
  
  return (
    <div>
      <Router>
        {display ? (
          <Sidebar handleSidebar={handleSidebar} />
        ) : (
          <Navbar handleSidebar={handleSidebar} />
        )}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/comming-soon" element={<CommingSoon/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
