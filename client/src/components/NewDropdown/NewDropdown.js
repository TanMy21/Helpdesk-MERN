import "./new.dropdown.css";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const NewDropdown = () => {
  return (
    <div tabIndex="0" className="new-menu">
      <div className="new-dropdown-btn">
        <AiOutlinePlusSquare />
        New
        <AiOutlineDown />
      </div>
      <div className="new-menu-dropdown">
        <Link to="/new-ticket" className="dropdown-links">
          New Ticket
        </Link>
        <Link to="/error" className="dropdown-links">
          New Email
        </Link>
        <Link to="/error" className="dropdown-links">
          New Contact
        </Link>
        <Link to="/agents" className="dropdown-links">
          New Agent
        </Link>
      </div>
    </div>
  );
};

export default NewDropdown;
