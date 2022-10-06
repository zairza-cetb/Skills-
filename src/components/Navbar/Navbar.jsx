import React from "react";
import Skills from "../../Assets/icons/Skills.svg";
import "./Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { signOutStart } from "../../store/user/user.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
const Navbar = ({ handleSidebar }) => {
  const currentUser = useSelector(selectCurrentUser);
  const nav = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const userSignOut = async () => {
    dispatch(signOutStart());
    nav("/")
  };

  return (
    <div className="navbar">
      <div>
        <img
          className="skillsLogo"
          src={Skills}
          alt="Skills logo"
          onClick={() => nav("/")}
        />
      </div>
      <div className="navlist">
        <ul>
          {location.pathname == "/" && (
            <>
              <li>
                <a href="#domain">Domains</a>
              </li>
              <li>
                <a href="#why">Why skill++</a>
              </li>
              <li>
                <a href="#faq">Contact us</a>
              </li>
            </>
          )}

          {/* {currentUser?.isRegisteredComplete && (
            <li>
              {currentUser.role == "member" ? (
                <button onClick={() => nav("/dashboard")}>Dashboard</button>
              ) : (
                <button onClick={() => nav("/mentor/dashboard")}>
                  Mentor Dashboard
                </button>
              )}
            </li>
          )} */}

          <li>
            {currentUser?.isRegisteredComplete && (
              <FaUser
                size={25}
                color={"#3370f6"}
                onClick={() =>
                  currentUser.role == "member"
                    ? nav("/me")
                    : nav("/mentor/me")
                }
              />
            )}
          </li>
          <li>
            {currentUser ? (
              <button onClick={userSignOut}>Logout</button>
            ) : location.pathname == "/login" ? (
              <></>
            ) : (
              <button onClick={() => nav("/login")}>Login</button>
            )}
          </li>
        </ul>
      </div>
      {/* {location.pathname == "/" ? ( */}
      <div className="menubar-icon">
        <GiHamburgerMenu size={25} onClick={handleSidebar} />
      </div>
      {/* ) : (
        currentUser && (
          <ul>
            <li>
              {currentUser.role == "member" ? (
                <button onClick={()=>nav('/dashboard')}>Dashboard</button>
              ) : (
                <button onClick={()=>nav('/mentor/dashboard')}>Mentor Dashboard</button>
              )}
            </li>

            <li>
              <button onClick={userSignOut}>Logout</button>
            </li>
          </ul>
        )
      )} */}
    </div>
  );
};

export default Navbar;
