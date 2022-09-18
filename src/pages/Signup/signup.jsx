import React, { useState } from "react";
import "./signup.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { FaAngleDown } from "react-icons/fa";
import registerImage from "../../Assets/images/registerImage.png";
import window from "../../Assets/images/browserWindow.png";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const Signup = () => {
  const auth = getAuth();
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)
  const [user, setUser] = useState({
    enterEmail: "",
    enterPassword: "",
    enterConfirmPassword:""
  });
  const [err, setError] = useState("");
  const buttonHandler = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const confirmButtonHandler = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const signUp = (e) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(auth, user.enterEmail, user.enterPassword)
        .then((response) => {
          // console.log(user);
          alert("Login successfull");
          nav("/dashboard");
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
      <div className="logPage">
        <h1>Let's learn</h1>
        <p>Sign up to get all the goodies</p>

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
        <div className="layer4-login">
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
          <div className="password p2">
            <p>Confirm Password</p>
            <div className="wrapfield">
              <div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="enterPassword"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={changeHandler}
                />
              </div>
              <div className="shBtn">
                <button className="showbtn" onClick={confirmButtonHandler}>
                  {showConfirmPassword ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        

        <div className="layer9">
          <p>
            Already registered?<span onClick={() => nav("/login")}>Login</span>
          </p>
        </div>

        <div className="layer8">
          <div className="btn1">
            <button className="registerBtn" onClick={signUp}>
              Login
            </button>
          </div>
          <p>or</p>
          <div className="btn2">
            <button className="google" onClick={signInWithGooglePopup}>
              <GoogleIcon />
            </button>
          </div>
         
        </div>
      </div>
      <div className="image">
        <img className="regImage" src={registerImage} />
        <img className="window" src={window} />
      </div>
    </div>
  );
};

export default Signup;
