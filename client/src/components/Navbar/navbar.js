import "./navbar.css";
import { HiOutlineSearch } from "react-icons/hi";
import { MdNotifications } from "react-icons/md";
import UserIcon from "../UserIcon/UserIcon";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="row d-flex">
          <div className="col navbar-page-title" id="title-text">
            TITLE
          </div>
          <div
            className="col navbar-notfication d-flex justify-content-end"
            id="title-text"
          >
            <HiOutlineSearch id="navbar-icons" />
            <MdNotifications id="navbar-icons" />
            <UserIcon id="navbar-icons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
