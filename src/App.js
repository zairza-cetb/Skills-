import React, { useState } from "react";
import Registration from "./pages/regPage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./pages/login";

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
          <Route path="/register" element={<Registration />} />
        </Routes>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
