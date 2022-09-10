import React, { useState } from "react";
import "../css/regPage.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { FaAngleDown } from "react-icons/fa";
import registerImage from "../Assets/images/registerImage.png"
import window from "../Assets/images/browserWindow.png"
import { useNavigate } from "react-router-dom";

const Login=()=>{

    const nav=useNavigate();
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [branch, setBranch] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [phoneNo, setPhoneNo]=useState("");
    const [regexp, setRegexp]=useState(/^[0-9\b]+$/);
    const [user, setUser] = useState({
        name: "",
        enterEmail:"",
        confirmEmail:"",
        enterPassword:"",
        confirmPassword:"",
        enterRedgNo:"",
        enterWing:"",
    })
    const [err, setError] = useState(false)
    const buttonHandler = e => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }
    const confirmButtonHandler = e => {
        e.preventDefault()
        setShowConfirmPassword(!showConfirmPassword)
    }
    const checkPhnNo=e=>{
        // const onlyDigits = e.target.value.test(!/\D/g);
        // setPhoneNo(onlyDigits)
        // if(onlyDigits>9999999999){
        //     alert("enter Valid phone number")
        // }
        // else{
        //     setPhoneNo(onlyDigits)
        // }
        if(!/\D/g.test(e.target.value) && e.target.value<=9999999999){
            setPhoneNo(e.target.value)
        }
        else{
            alert("Phone number is restricted to 10 digits or Invalid Input")
        }
    }
    const changeHandler = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const register = (e) => {
        e.preventDefault();
        try {
            const { name, enterEmail, confirmEmail, enterPassword, confirmPassword, enterRedgNo, enterWing} = user
            if (name && enterEmail && confirmEmail && enterPassword && confirmPassword && enterRedgNo  && phoneNo && branch && (enterEmail===confirmEmail) && (enterPassword===confirmPassword))
            {
                console.log(enterWing);
                if(answer==="yes"){
                    if(enterWing==='SOFTWARE' || enterWing==='HARDWARE' || enterWing==='DESIGN'){
                        alert("registration successful")
                    }
                    else{
                        alert("Enter valid wing: (SOFTWARE--or--HARDWARE--or--DESIGN)")
                    }
                }
                else if(answer==="no"){
                    if(enterWing)
                    alert("You cannot fill the field 'wing' since you are not a member")
                    else
                    alert("registration sucessful")
                }
            }
            else {
                alert("invalid")
            }
        }
        catch (err) {
            setError(true)
        }
    }
  
    const branchHandler = e => {
        setBranch(e.target.branches.value)
    }

    const ansHandle=e=>{
        e.preventDefault()
        setAnswer(e.target.value)
        console.log(answer)
    }

    return(
        <div className="page">
            <div className="regPage">
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
                    <p>Don’t remember Password ? <span onClick={() => nav("/login")}>Reset Password</span></p>
                </div>
                
                <div className="layer8">
                    <div className="btn1"><button className="registerBtn" onClick={register}>Register</button></div>
                    <p>or</p>
                    <div className="btn2"><button className="google"><GoogleIcon /></button></div>
                    <div className="btn3"><button className="git"><GitHubIcon /></button></div>
                </div>
                <div className="layer9">
                    <p>Not registered yet?<span onClick={() => nav("/register")}>Register</span></p>
                </div>
            </div>
            <div className="image">
                <img className="regImage" src={registerImage} />
                <img className="window" src={window}/>
            </div>
        </div>
    )
}

export default Login