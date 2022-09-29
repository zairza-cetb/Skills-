import React from "react";
import Skills from "../../Assets/icons/Skills.svg";
import "./Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import { signOutStart } from "../../store/user/user.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { toast } from "react-toastify";
const Navbar = ({ handleSidebar }) => {
  const currentUser = useSelector(selectCurrentUser);
  const domain = currentUser ? currentUser.domain : "";
  const nav = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const userSignOut = async () => {
    dispatch(signOutStart());
    toast.success("Logout successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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

          {currentUser?.user.isRegisteredComplete && (
            <li>
              {currentUser.user.role == "member" ? (
                <button onClick={() => nav("/dashboard")}>Dashboard</button>
              ) : (
                <button onClick={() => nav("/mentor/dashboard")}>
                  Mentor Dashboard
                </button>
              )}
            </li>
          )}

          <li>
            {currentUser ? (
              <button onClick={userSignOut}>Logout</button>
            ) : location.pathname=="/login" ? <></> : (
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
              {currentUser.user.role == "member" ? (
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
