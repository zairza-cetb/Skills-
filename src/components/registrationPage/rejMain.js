import React, { useState } from "react";
import Registration from "../registrationPage/regPage";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom"

const Registration_Page = () => {

    return (
        <div>
            <Router>
            <Routes>
                <Route path="/register" element={<Registration />}/>
            </Routes>
            </Router>
            
        </div>
    )
}
export default Registration_Page