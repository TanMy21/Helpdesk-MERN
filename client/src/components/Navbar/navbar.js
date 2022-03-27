import "./navbar.css";
import { GrSearch } from "react-icons/gr";
import Dropdown from "../Dropdown/Dropdown";
import NewDropdown from "../NewDropdown/NewDropdown";
import Notification from "../NotificationDropdown/NotificationDropdown";


const Navbar = ({ title }) => {



  return (
    <nav className="navbar page-navbar">
      <div className="navbar-content">
        <div className="navbar-page-title">{title}</div>
        <div className="navbar-icons">
          <ul className="navbar-icons-list">
            <li>
              <NewDropdown />
            </li>
            <li>
              <GrSearch />
            </li>
            <li>
              <Notification />
            </li>
            <li className="dropdown">
              <Dropdown />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
