import React, { useState } from "react";
import "./Login.scss";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import {BsEyeSlash} from "react-icons/bs";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [passwordType, setPasswordType] = useState("password");


  const handlePasswordChange = (event) => {
    setLogin({ ...login, password: event.target.value })
  };


  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };


  const handleSubmitForLogin = (e) => {
    e.preventDefault();
    console.log(login);
  };

  return (
    <>
      <Navbar />
      <div className="login-page">
        <div className="login">
          <div className="login-text">
            <p className="login-text-p1">Lets learn</p>
            <p className="login-text-p2">Sign in to get all the goodies</p>
            <form className="login-form" onSubmit={handleSubmitForLogin}>
              <div className="login-form-input">
                <label className="login-text-p2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  required
                  value={login.email}
                  onChange={(e) =>
                    setLogin({ ...login, email: e.target.value })
                  }
                />
              </div>
              <div className="login-form-input">
                <label className="login-text-p2">Password</label>
                <input
                  placeholder="Password"
                  type={passwordType}
                  required
                  value={login.password}
                  onChange={handlePasswordChange}
                />
                <BsEye className="login-password-eye"  onClick={togglePassword}>
                {passwordType === "password" ? (
                 <BsEyeSlash className="login-password-eye" />
              ) : (
               <BsEye className="login-password-eye" />
              )}
                </BsEye>
              </div>
              <p className="login-text-p2">
                Don't remember passsword ? <span>Reset Password</span>
              </p>
              <div className="login-button-section">
                <button className="login-btn">Login</button>
                <p>or</p>
                <button className="google-btn">
                  <FcGoogle className="google-btn-icon" />
                </button>
                <button className="github-btn">
                  <BsGithub className="github-btn-icon" />
                </button>
              </div>
              <p className="login-text-p2">
                Not register yet ?
                <Link style={{ textDecoration: "none" }} to="/register">
                  <span>Register</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
