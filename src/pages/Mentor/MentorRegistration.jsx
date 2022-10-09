import React, { useEffect, useState } from "react";
import "./mentor.scss";
import registerImage from "../../Assets/images/registerImage.png";
import window from "../../Assets/images/browserWindow.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { registerUserStart } from "../../store/user/user.action";
import MultipleSelect from "../../components/Dropdown";
import { MultiSelectUnstyled } from "@mui/base/SelectUnstyled";
import UnstyledSelectsMultiple from "../../components/Dropdown";
import Multiselect from "../../components/MultiSelect";

const MentorRegistration = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [branch, setBranch] = useState([]);
  const [phoneNo, setPhoneNo] = useState("");
  const [user, setUser] = useState({
    name: currentUser?.name ? currentUser.name : "",
    enterEmail: currentUser?.email ? currentUser.email : "",
    enterRedgNo: "",
    enterWing: "",
  });
  const [selectedDomains, setSelectedDomains] = useState([]);
  const [err, setError] = useState(false);

  useEffect(() => {
    if (currentUser?.isRegisteredComplete) {
      nav("/mentor/me"); // navigate to /mentor/dashboard once mentorDashboard is created
    }
  });

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
      const { name, enterEmail, enterRedgNo } = user;
      if (
        name &&
        enterEmail &&
        enterRedgNo &&
        phoneNo &&
        branch &&
        selectedDomains
      ) {
        dispatch(
          registerUserStart({
            user: {
              email: user.enterEmail,
              name: user.name,
              phoneNumber: phoneNo,
              registrationNumber: enterRedgNo,
              zairzaMember: true,
              domain: selectedDomains,
              branch: branch,
              role: "mentor",
            },
          })
        );
      } else {
        alert("invalid");
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
  const handleBranch = (e) => {
    e.preventDefault();
    setBranch(e.target.value);
  };
  return (
    <div className="page">
      <div className="regPage mentorRegister">
        <h1>Mentor Onboarding</h1>
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
              <input type="text" value={"+91"} className="phoneCode" />
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
        <div className="layer7 selectdomain">
          <p>Interested Domain for Skills++ 2022</p>
          <Multiselect
            selectedItems={selectedDomains}
            addItem={(item) => setSelectedDomains(selectedDomains.concat(item))}
            setFilteredItems={(filtered) => setSelectedDomains(filtered)}
          />
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
      <ToastContainer />
    </div>
  );
};

export default MentorRegistration;
