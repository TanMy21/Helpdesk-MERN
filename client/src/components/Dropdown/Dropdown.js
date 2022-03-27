import jwtDecode from "jwt-decode";
import "./dropdown.css";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Dropdown = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const jwtUser = jwtDecode(jwt);
      setUser(jwtUser);
    } catch (error) {}
  }, []);

  return (
    <div tabIndex="0" className="menu">
      <FaUserCircle id="user-dropdown-btn" />
      <div className="menu-dropdown">
        <div className="dropdown-username-email">
          <div id="dropdown-username">
            <div id="user-firstname">{user.firstname}</div>
            <div id="user-lastname">{user.lastname}</div>
          </div>
          <div id="dropdown-email">{user.email}</div>
        </div>
        <Link to="/" id="dropdown-logout">
          Logout{" "}
          <span id="dropdown-icon">
            <MdLogout />
          </span>
        </Link>
        <Link to="/settings" id="dropdown-settings">
          Settings{" "}
          <span id="dropdown-icon">
            <IoSettingsOutline />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
