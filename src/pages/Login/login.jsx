import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./login.scss"
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { FaAngleDown } from "react-icons/fa";
import registerImage from "../../Assets/images/registerImage.png";
import window from "../../Assets/images/browserWindow.png";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

const Login = () => {
  const auth = getAuth();  
  const nav = useNavigate();
  const dispatch = useDispatch();
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
  const signIn = (e) => {
    e.preventDefault();
    try {
      dispatch(emailSignInStart(user.enterEmail, user.enterPassword));
    } catch (err) {
      setError(true);
    }
}

const signInWithGoogle = async () => {
  console.log("google");
  dispatch(googleSignInStart());
};



    return(
        <div className="page">
            <div className="logPage">
                <h1>Let's learn</h1>
                <p>Sign in to get all the goodies</p>
                
                <div className="layer3">
                    <div className="email1">
                        <p>Email ID</p>
                        <input type="email" className="enterEmail" placeholder="Enter your Email" name="enterEmail" value={user.enterEmail} onChange={changeHandler}/>
                    </div>
                   
                </div>
                <div className="layer4">
                    <div className="password">
                        <p>Password</p>
                        <div className="wrapfield">
                            <div><input type={showPassword ? "text" : "password"} className="enterPassword" placeholder="Enter password" name="enterPassword" value={user.enterPassword} onChange={changeHandler}/></div>
                            <div className="shBtn"><button className="showbtn" onClick={buttonHandler}>{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}</button></div>

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
            <button className="registerBtn" onClick={signIn}>
              Login
            </button>
          </div>
          <p>or</p>
          <div className="btn2">
            <button className="google" onClick={signInWithGoogle}>
              <GoogleIcon />
            </button>
          </div>
          
        </div>
        <div className="layer9">
          <p>
            Not registered yet?
            <span onClick={() => nav("/signup")}>Register</span>
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
