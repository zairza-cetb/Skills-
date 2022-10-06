import React, { useEffect, useState } from "react";
import "./register.scss";
import registerImage from "../../Assets/images/registerImage.png";
import window from "../../Assets/images/browserWindow.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { registerUserStart } from "../../store/user/user.action";

const Registration = () => {
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [branch, setBranch] = useState([]);
  const [answer, setAnswer] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [user, setUser] = useState({
    name: currentUser?.name ? currentUser?.name : "",
    enterEmail: currentUser?.email ? currentUser?.email : "",
    enterRedgNo: "",
    enterWing: "",
    interestedDomain: "",
  });
  const [err, setError] = useState(false);

  useEffect(()=>{
    if(currentUser && currentUser?.isRegisteredComplete){
      nav("/me");
    }
  })

  const checkPhnNo = (e) => {
    if (!/\D/g.test(e.target.value) && e.target.value <= 9999999999) {
      setPhoneNo(e.target.value);
    } else {
      alert("Phone number is restricted to 10 digits or Invalid Input");
    }
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
      const {
        name,
        enterEmail,
        enterRedgNo,
        enterWing,
        interestedDomain,
      } = user;
      if (
        name &&
        enterEmail &&
        enterRedgNo &&
        phoneNo &&
        branch && interestedDomain
      ) {
        if (answer === "yes" && enterWing === "") {
          alert("Please give the wing details");
          return;
        }
        dispatch(
          registerUserStart({
            user: {
              email: user.enterEmail,
              name: user.name,
              phoneNumber: phoneNo,
              registrationNumber: enterRedgNo,
              zairzaMember: answer == "yes",
              domain: interestedDomain,
              branch: branch,
              wing:enterWing,
              role:"member"
            },
          })
        );

      } else {
        alert("Fill all Details");
      }
    } catch (err) {
      setError(true);
    }
  };
  const branches = [
    "Computer Science & Engineering",
    "Information Technology",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Electronics & Instrumentation Engineering",
    "Biotechnology",
    "Civil Engineering",
    "Textile Engineering",
    "Fashion & Apparel Technology",
    "Architecture",
    "Computer Science & Application",
    "Planning",
    "Mathematics & Humanities",
    "Physics",
    "Chemistry",
  ];
  const ans = [
    {
      name: "Yes",
      value: "yes",
    },
    {
      name: "No",
      value: "no",
    },
  ];
  const wings = [
    {
      name: "Software",
      value: "software",
    },
    {
      name: "Hardware",
      value: "hardware",
    },
    {
      name: "Design",
      value: "design",
    },
  ];
  const domains = [
    "Web Development",
    "App Development",
    "UI/UX",
    "Graphics Designing",
    "Competitive Coding",
    "AI/ML",
    "Game Development",
    "Embedded System & IOT",
    "ROS",
    "3D and Motion Graphics",
    "Cybersecurity",
    "Blockchain",
    "Devops",
  ];

  const handleWing = (e) => {
    console.log(e.target.value);
    if (e.target.value) {
      setUser({
        ...user,
        enterWing: e.target.value,
      });
    }
  };
  const ansHandle = (e) => {
    e.preventDefault();
    setAnswer(e.target.value);
  };

  const handleDomain = (e) => {
    e.preventDefault();
    setUser({ ...user, interestedDomain: e.target.value });
  };

  const handleBranch = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setBranch(e.target.value);
  };
  return (
    <div className="page">
      <div className="regPage">
        <h1>Let's learn</h1>
        <p>Sign up to get all the goodies</p>
        <div className="layer1">
          <p>Name</p>
          <input
            type="name"
            placeholder="Enter your Name"
            className="name"
            name="name"
            value={currentUser?.name || user.name}
            onChange={changeHandler}
            disabled={!!currentUser?.name}
          />
        </div>
        <div className="layer2">
          <p>Phone Number</p>
          <div className="phoneInput">
            <div>
              <input type="name" placeholder="+91" className="phoneCode" />
            </div>
            <div className="pc">
              <input
                type="name"
                placeholder="Phone Number"
                className="phoneNumber"
                onChange={checkPhnNo}
              />
            </div>
          </div>
        </div>
        <div className="layer3">
          <div className="email1">
            <p>Email ID</p>
            <input
              type="email"
              className="enterEmail"
              placeholder="Enter your Email"
              name="enterEmail"
              value={currentUser?.email}
              onChange={changeHandler}
              disabled={!!currentUser?.email}
            />
          </div>
        </div>

        <div className="layer5">
          <div className="student selectBranch">
            <p>Branch</p>
            <select
              className="branch option"
              name="selectBranch"
              value={user.selectBranch}
              onChange={handleBranch}
            >
              <option disabled selected="selected">
                Select your Branch{" "}
              </option>
              {branches.map((branch) => (
                <option value={branch}>{branch}</option>
              ))}
            </select>
          </div>
          <div className="student r1">
            <p>Regd No.</p>
            <input
              type="text"
              className="regdNo"
              placeholder="Enter your redg no."
              name="enterRedgNo"
              value={user.enterRedgNo}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="layer6">
          <div className="membership selectMember">
            <p>Are you a Zairza Member?</p>
            <select
              className="member option"
              onChange={ansHandle}
              name="selectOption"
              value={user.selectOption}
            >
              <option disabled selected="selected">
                Select your option
              </option>
              {ans.map((a) => (
                <option value={a.value}>{a.name}</option>
              ))}
            </select>
          </div>
          <div className="membership w1">
            <p>If yes, in which wing?</p>
            <select
              className="wing"
              onChange={handleWing}
              disabled={answer === "no" ? true : false}
            >
              <option disabled selected="selected">
                Enter your wing
              </option>
              {wings.map((wing) => (
                <option value={wing.value}>{wing.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="layer7 selectdomain">
          <p>Interested Domain for Skills++ 2022</p>
          <select
            className="domain option"
            name="selectDomain"
            value={user.selectDomain}
            onChange={handleDomain}
          >
            <option disabled selected="selected">
              Select your domain
            </option>
            {domains.map((domain) => (
              <option value={domain}>{domain}</option>
            ))}
          </select>
        </div>
        <div className="layer8">
          <div className="btn1">
            <button className="registerBtn" onClick={register}>
              Register
            </button>
          </div>
        </div>
        <div className="layer9">
          <p>
            Already registered?<span onClick={() => nav("/login")}>Login</span>
          </p>
        </div>
      </div>
      <div className="image">
        <img className="regImage" src={registerImage} alt={"registerImage"} />
        <img className="window" src={window} alt={"registerImage"} />
      </div>
    </div>
  );
};

export default Registration;
