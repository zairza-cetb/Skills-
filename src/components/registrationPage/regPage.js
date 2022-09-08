import React, { useState } from "react";
import "./regPage.scss"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { FaAngleDown } from "react-icons/fa";
import registerImage from "../registrationPage/images/registerImage.png"
import window from "../registrationPage/images/browserWindow.png"

const Registration=()=>{

    const [showPassword, setShowPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState(false)
    const [branch, setBranch] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [phoneNo, setPhoneNo]=useState(0);
    const buttonHandler = e => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }
    const confirmButtonHandler = e => {
        e.preventDefault()
        setConfirmPassword(!confirmPassword)
    }
    const checkPhnNo=e=>{
        const onlyDigits = e.target.value.replace(/\D/g,"");
        if(onlyDigits>9999999999){
            alert("phone number should not exceed 10 digits")
        }
        else{
        setPhoneNo(onlyDigits);
        }
    }

    const branches = [
        {
            name: 'Computer Science',
            value: "cse"
        },
        {
            name: 'Information Technology',
            value: "it"
        },
        {
            name: 'Electrical',
            value: "ele"
        },
        {
            name: 'Instrumentation and Electronics',
            value: "ine"
        },
        {
            name: 'Mechanical',
            value: "mech"
        },
        {
            name: 'Civil',
            value: "civil"
        },
        {
            name: 'Biotechnology',
            value: "bt"
        },
        {
            name: 'Fashion Technology',
            value: "ft"
        },
        {
            name: 'Textile',
            value: "te"
        },
        {
            name: 'MCA',
            value: "mca"
        },
        {
            name: 'Mathematics and Humanities',
            value: "math"
        },
        {
            name: 'Intergrated MSc. Chemistry',
            value: "chem"
        },
        {
            name: 'Intergrated MSc. Physics',
            value: "phys"
        },
    ];
    const ans = [
        {
            name: 'Yes',
            value: "yes"
        },
        {
            name: 'No',
            value: "no"
        },
        
    ];
    const domains = [
        {
            name: 'Web Development',
            value: "web"
        },
        {
            name: 'IOT',
            value: "iot"
        },
        {
            name: 'UI/UX',
            value: "ui"
        },
        {
            name: 'Machine Learning',
            value: "ml"
        },
        {
            name: 'Competetive Coding',
            value: "cp"
        },
    ];
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
                <p>Sign up to get all the goodies</p>
                <div className="layer1">
                    <p>Name</p>
                    <input type="name" placeholder="Enter your Name" className="name" />
                </div>
                <div className="layer2">
                    <p>Phone Number</p>
                    <div className="phoneInput">
                        <div><input type="name" placeholder="+91" className="phoneCode" /></div>
                        <div className="pc"><input type="name" placeholder="Phone Number" className="phoneNumber" value={phoneNo} onChange={checkPhnNo} /></div>
                    </div>
                </div>
                <div className="layer3">
                    <div className="email1">
                        <p>Email ID</p>
                        <input type="email" className="enterEmail" placeholder="Enter your Email" />
                    </div>
                    <div className="email2 e2">
                        <p>Confirm Email ID</p>
                        <input type="email" className="enterEmail" placeholder="Confirm your Email" />
                    </div>
                </div>
                <div className="layer4">
                    <div className="password">
                        <p>Password</p>
                        <div className="wrapfield">
                            <div><input type={showPassword ? "text" : "password"} className="enterPassword" placeholder="Enter password" /></div>
                            <div className="shBtn"><button className="showbtn" onClick={buttonHandler}>{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}</button></div>
                        </div>
                    </div>
                    <div className="password p2">
                        <p>Confirm Password</p>
                        <div className="wrapfield">
                            <div><input type={confirmPassword ? "text" : "password"} className="enterPassword" placeholder="Confirm password" /></div>
                            <div className="shBtn"><button className="showbtn" onClick={confirmButtonHandler}>{confirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}</button></div>
                        </div>
                    </div>
                </div>
                <div className="layer5">
                    <div className="student selectBranch">
                        <p>Branch</p>
                        <select className="branch option">
                            <option disabled selected="selected">Select your Branch </option>
                            {branches.map((branch) => (
                                <option value={branch.value}>{branch.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="student r1">
                        <p>Regd No.</p>
                        <input type="text" className="regdNo" placeholder="Enter your redg no." />
                    </div>
                </div>
                <div className="layer6">
                    <div className="membership selectMember">
                        <p>Are you a Zairza Member?</p>
                        <select className="member option" onChange={ansHandle}>
                        <option disabled selected="selected">Select your option</option>
                            {ans.map((a) => (
                                <option value={a.value}>{a.name}</option>
                            ))}
                        </select>
                    </div>
                        <div className="membership w1">
                        <p>If yes, in which wing?</p>
                        <input type="text" className="wing" placeholder="Enter your wing" disabled={answer==="no"?true:false} />
                    </div>
                </div>
                <div className="layer7 selectdomain">
                    <p>Interested Domain for Skills++ 2022</p>
                    <select className="domain option">
                        <option disabled selected="selected">Select your domain</option>
                        {domains.map((domain) => (
                                <option value={domain.value}>{domain.name}</option>
                            ))}
                    </select>
                </div>
                <div className="layer8">
                    <div className="btn1"><button className="registerBtn" >Register</button></div>
                    <p>or</p>
                    <div className="btn2"><button className="google"><GoogleIcon /></button></div>
                    <div className="btn3"><button className="git"><GitHubIcon /></button></div>
                </div>
                <div className="layer9">
                    <p>Already registered?<span>Login</span></p>
                </div>
            </div>
            <div className="image">
                <img className="regImage" src={registerImage} />
                <img className="window" src={window}/>
            </div>
        </div>
    )
}

export default Registration