import React from "react";
import Registration from "./components/registrationPage/regPage";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
