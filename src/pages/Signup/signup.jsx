import React, { useEffect, useState} from "react";
import "./signup.scss";
import { Visibility, VisibilityOff, Google } from "@mui/icons-material";
import registerImage from "../../Assets/images/registerImage.png";
import window from "../../Assets/images/browserWindow.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpStart, googleSignInStart } from "../../store/user/user.action";
import { selectCurrentUser, selectUserReducer } from "../../store/user/user.selector";
import { toast, ToastContainer } from "react-toastify";
import { PulseLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#FF6E20",
};

const Signup = () => {
  const currentUser = useSelector(selectCurrentUser) 
  const userReducer = useSelector(selectUserReducer)
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [user, setUser] = useState({
    enterEmail: "",
    enterPassword: "",
    enterConfirmPassword: "",
  });

  const [err, setError] = useState("");

  useEffect(()=>{
    if(currentUser?.user.isRegistered){
      nav('/dashboard')
    }else if(!currentUser?.user.isRegistered){
      nav('/register')
    }
  })

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
    if(user.enterPassword !== user.enterConfirmPassword){
      toast.error("Password doesn't match",{
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return;
    }
    try {
      dispatch(signUpStart(user.enterEmail, user.enterPassword));
    } catch (err) {
      setError(true);
    }
  };

  const signInWithGoogle = async () => {
    console.log("google");
    dispatch(googleSignInStart());
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
                  {showPassword ? <VisibilityOff /> : <Visibility />}
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
                  name="enterConfirmPassword"
                  value={user.enterConfirmPassword}
                  onChange={changeHandler}
                />
              </div>
              <div className="shBtn">
                <button className="showbtn" onClick={confirmButtonHandler}>
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
              {
                userReducer.isLoading ? <PulseLoader color={"#FF6E20"} loading={true} cssOverride={override} size={5} /> : "Sign Up"
              }
              
            </button>
          </div>
          <p>or</p>
          <div className="btn2">
            <button className="google" onClick={signInWithGoogle}>
              <Google />
            </button>
          </div>
        </div>
      </div>
      <div className="image">
        <img className="regImage" src={registerImage} />
        <img className="window" src={window} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
