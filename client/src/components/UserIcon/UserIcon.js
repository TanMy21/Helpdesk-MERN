import "./usericon.css";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
const UserIcon = () => {
  return (
    <div className="navbar-user-icon">
      <div className="action">
        <div className="profile">
          <FaUserCircle id="user-icon"/>
        </div>
        <div className="user-menu">
          <ul>
            <li>
              <a>Logout</a>
              <FiLogOut id="logout-icon"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserIcon;
