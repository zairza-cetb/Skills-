import React from "react";
import "./Sidebar.scss";
import Skills from "../../Assets/icons/Skills.svg";
import { IoCloseSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOutStart } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";
const Sidebar = ({ handleSidebar }) => {
  const currentUser = useSelector(selectCurrentUser);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(currentUser);
  const userSignOut = async () => {
    dispatch(signOutStart());
  };
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div>
          <img src={Skills} alt="Skills logo" />
        </div>
        <div className="sidebar-icon">
          <IoCloseSharp size={30} onClick={handleSidebar} />
        </div>
      </div>
      <ul className="sidebar-list">
        {location.pathname == "/" && (
          <>
            <li>
              <a href="#domain" onClick={handleSidebar}>
                Domains
              </a>
            </li>
            <li>
              <a href="#why" onClick={handleSidebar}>
                Why skill++
              </a>
            </li>
            <li>
              <a href="#faq" onClick={handleSidebar}>
                Contact us
              </a>
            </li>
          </>
        )}

        {currentUser?.user.isRegisteredComplete && (
          <li>
            {currentUser.user.role == "member" ? (
              <button
                onClick={() => {
                  handleSidebar();
                  nav("/dashboard");
                }}
              >
                Dashboard
              </button>
            ) : (
              <button
                onClick={() => {
                  handleSidebar();
                  nav("/mentor/dashboard");
                }}
              >
                Mentor Dashboard
              </button>
            )}
          </li>
        )}
        {currentUser?.user.isRegisteredComplete && (
          <li>
            {currentUser.user.role == "member" && (
              <button
                onClick={() => {
                  handleSidebar();
                  nav("/me");
                }}
              >
                Profile
              </button>
            )}
          </li>
        )}
        <li>
          {currentUser ? (
            <button
              onClick={() => {
                handleSidebar();
                userSignOut();
              }}
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                handleSidebar();
                nav("/login");
              }}
            >
              Login
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
