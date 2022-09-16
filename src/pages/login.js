import React, { useState } from "react";
import "../css/regPage.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { FaAngleDown } from "react-icons/fa";
import registerImage from "../Assets/images/registerImage.png";
import window from "../Assets/images/browserWindow.png";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {signInWithGooglePopup } from "../utils/firebase/firebase.utils";

const Login = () => {
  const auth = getAuth();  
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    enterEmail: "",
    enterPassword: "",
  });
  const [err, setError] = useState(false);
  const buttonHandler = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = (e) => {
    e.preventDefault();
    try {
     signInWithEmailAndPassword(auth,user.enterEmail,user.enterPassword)
      .then((response) => {
        // console.log(user);  
        alert("Login successfull");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="page">
      <div className="regPage">
        <h1>Let's learn</h1>
        <p>Sign in to get all the goodies</p>

        <div className="layer3">
          <div className="email1">
            <p>Email ID</p>
            <input
              type="email"
              className="enterEmail"
              placeholder="Enter your Email"
              name="enterEmail"
              value={user.enterEmail}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="layer4">
          <div className="password">
            <p>Password</p>
            <div className="wrapfield">
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="enterPassword"
                  placeholder="Enter password"
                  name="enterPassword"
                  value={user.enterPassword}
                  onChange={changeHandler}
                />
              </div>
              <div className="shBtn">
                <button className="showbtn" onClick={buttonHandler}>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="layer9">
          <p>
            Don’t remember Password ?{" "}
            <span onClick={() => nav("/login")}>Reset Password</span>
          </p>
        </div>

        <div className="layer8">
          <div className="btn1">
            <button className="registerBtn" onClick={register}>
              Login
            </button>
          </div>
          <p>or</p>
          <div className="btn2">
            <button className="google" onClick={signInWithGooglePopup}>
              <GoogleIcon />
            </button>
          </div>
          <div className="btn3">
            <button className="git">
              <GitHubIcon />
            </button>
          </div>
        </div>
        <div className="layer9">
          <p>
            Not registered yet?
            <span onClick={() => nav("/register")}>Register</span>
          </p>
        </div>
      </div>
      <div className="image">
        <img className="regImage" src={registerImage} />
        <img className="window" src={window} />
      </div>
    </div>
  );
};

export default Login;
