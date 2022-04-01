import jwtDecode from "jwt-decode";
import "./dropdown.css";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

const Dropdown = () => {
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const jwtUser = jwtDecode(jwt);
      setUserData(jwtUser);
    } catch (error) {}
  }, []);

  const userLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div tabIndex="0" className="menu">
      <FaUserCircle id="user-dropdown-btn" />
      <div className="menu-dropdown">
        <div className="dropdown-username-email">
          <div id="dropdown-username">
            <div id="user-firstname">{userData.firstname}</div>
            <div id="user-lastname">{userData.lastname}</div>
          </div>
          <div id="dropdown-email">{userData.email}</div>
        </div>
        <Link to="/" id="dropdown-logout" onClick={userLogout}>
          Logout
          <span id="dropdown-icon">
            <MdLogout />
          </span>
        </Link>
        <Link to="/settings" id="dropdown-settings">
          Settings
          <span id="dropdown-icon">
            <IoSettingsOutline />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
