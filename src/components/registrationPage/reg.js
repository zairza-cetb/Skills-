import React, { useState } from "react";
import img1 from "./images/textInput.png"
import img2 from "./images/youngWomanIFOLaptop.png"
import img3 from "./images/browserWindow.png"
import "./reg.scss"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';




const Registration = () => {
    const [profileImg, setProfileImg] = useState(img1)
    const [showPassword, setShowPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState(false)
    const [user,setUser]=useState({
        profile:"",
        name:"",
        email:"",
        reEnterPassword:"",
        password:"",
        reEnterPassword:"",
        branch:"",
        regno:"",
        member:"",
        domain:"",
        interest:""
    })

    const imageHandler = e => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfileImg(reader.result )
            }
        }
        reader.readAsDataURL(e.target.file[0])
    }

    const buttonHandler = e => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }
    const confirmButtonHandler = e => {
        e.preventDefault()
        setConfirmPassword(!confirmPassword)
    }

    const submitHandler=e=>{

    }
    return (
        <div className="page">
            <div className="regInput">
                <h1>Lets learn</h1>
                <p>Sign up to get all the goodies</p>
                {/* layer1 */}
                <div className="layer1">
                    {/* Enter profile photo */}
                    <div className="profilePic">
                        <img className="fileimg" src={profileImg} onClick={imageHandler} ></img>
                        <input type="file" />
                    </div>
                    {/* Name and phoneNumber input fields */}
                    <div className="layer11">
                        <div className="nameInput">
                            <p className="label">Name</p>
                            <div><input type="name" placeholder="Enter your Name" className="name"></input></div>
                        </div>
                        <div className="phoneInput">
                            <p className="label">Phone Number</p>
                            <div className="phonenum">
                                <input type="tel" placeholder="+91" className="phoneCode"></input>
                                <div><input type="tel" placeholder="PhoneNumber" className="phoneNumber"></input></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="layer2">
                    <div className="email e1">
                        <p>Email ID</p>
                        <div><input type="email" className="enterEmail" placeholder="Enter your Email" /></div>
                    </div>
                    <div className="email e2">
                        <p>Confirm Email ID</p>
                        <div><input type="email" className="enterEmail" placeholder="Confirm your Email" /></div>
                    </div>
                </div>
                <div className="layer3">
                    <div className="password p1">
                        <p>Password</p>
                        <div className="wrapfield">
                            <div><input type={showPassword?"text":"password"} className="enterPassword" placeholder="Enter password"/></div>
                            <button className="showbtn b1" onClick={buttonHandler}>{showPassword?<VisibilityOffIcon/>:<VisibilityIcon/>}</button>
                        </div>
                    </div>
                    <div className="password p2">
                        <p>Confirm Password</p>
                        <div className="wrapfield">
                            <div><input type={confirmPassword ? "text" : "password"} className="enterPassword" placeholder="Confirm password" /></div>
                            <button className="showbtn b2" onClick={confirmButtonHandler}>{confirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}</button>
                        </div>
                    </div>
                </div>
                <div className="layer4">
                    <div className="student">
                        <p>Branch</p>
                        <select className="branch">
                            <option className="branches">Select your Branch</option>
                            <option className="branches">Computer Science</option>
                            <option className="branches">Information Technology</option>
                            <option className="branches">Electrical</option>
                            <option className="branches">Instrumentation and Electronics</option>
                            <option className="branches">Mechanical</option>
                            <option className="branches">Civil</option>
                            <option className="branches">Biotechnology</option>
                        </select>
                    </div>
                    <div className="student r1">
                        <p>Regd No.</p>
                        <div><input type="text" className="regdNo" placeholder="Enter your redg no." /></div>
                    </div>
                </div>
                <div className="layer5">
                    <div className="membership">
                        <p>Are you a Zairza Member?</p>
                        <select className="member">
                            <option className="branches">Select your option</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div className="membership w1">
                        <p>If yes, in which wing?</p>
                        <div><input type="text" className="wing" placeholder="Enter your wing" /></div>
                    </div>
                </div>
                <div className="layer6">
                    <p>Interested Domain for Skills++ 2022</p>
                    <select className="domain">
                        <option className="domains">Select your domain</option>
                        <option className="domains">Web Development</option>
                        <option className="domains">IOT</option>
                        <option className="domains">UI/UX</option>
                        <option className="domains">Machine Learning</option>
                        <option className="domains">Competetive Coding</option>
                    </select>
                </div>
                <div className="layer7">
                    <div className="btn1"><button className="registerBtn" onClick={submitHandler}>Register</button></div>
                    <p>or</p>
                    <div className="btn2"><button className="google"><GoogleIcon /></button></div>
                    <div className="btn3"><button className="git"><GitHubIcon /></button></div>
                </div>
                <div className="layer8"><p>Already registered?<span>Login</span></p></div>
            </div>
            <div className="pics">
                <img className="img2" src={img2} />
                <img className="img3" src={img3} />
            </div>
        </div>
    )
}

export default Registration



