import "./navbar.css";
import { HiOutlineSearch } from "react-icons/hi";
import { MdNotifications } from "react-icons/md";
import UserIcon from "../UserIcon/UserIcon";

const Navbar = ({ title }) => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="row d-flex">
          <div className="col navbar-page-title" id="title-text">
            {title}
          </div>
          <div
            className="col navbar-notification d-flex justify-content-end"
            id="title-text"
          >
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
