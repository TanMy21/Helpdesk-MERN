import "./notification.dropdown.css";
import { MdNotifications } from "react-icons/md";

const Dropdown = () => {
  return (
    <div tabIndex="0" className="notification-menu">
      <MdNotifications id="user-dropdown-btn" />
      <div className="notification-menu-dropdown">
        <div className="notification-dropdown-header">
          <div id="dropdown-notifications-title">Notifications</div>
          <div id="dropdown-notifications-settings">Settings</div>
        </div>
        <div className="dropdown-notifications">No new notifications</div>
      </div>
    </div>
  );
};

export default Dropdown;
