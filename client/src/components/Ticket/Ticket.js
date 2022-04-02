import { BsTelephone } from "react-icons/bs";
import { MdForum } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { TiSocialTwitter } from "react-icons/ti";
import { BsDot } from "react-icons/bs";
import { FaSquare } from "react-icons/fa";
import { HiOutlineUserAdd } from "react-icons/hi";
import { GrStatusGoodSmall } from "react-icons/gr";
import "./ticket.css";
import { Link } from "react-router-dom";
import classNames from "classnames";


const Ticket = ({
  ticketId,
  ticketStatus,
  ticketSubject,
  ticketSource,
  ticketUserName,
}) => {


  const sourceIcon = () => {
    if (ticketSource === "Phone") {
      return <BsTelephone />;
    }
    if (ticketSource === "Forum") {
      return <MdForum />;
    }
    if (ticketSource === "Email") {
      return <HiOutlineMail />;
    }
    if (ticketSource === "Social Media") {
      return <TiSocialTwitter />;
    }
  };

  return (
    <div className="ticket">
      <div className="ticket-checkbox">
        <input type="checkbox" id="ticket-checkbox" name="ticket1" value="" />
      </div>
      <div className="ticket-description">
        <div className="ticket-status">
          <p
            className={classNames({
              "tag-open": ticketStatus === "Open",
              "tag-pending": ticketStatus === "Pending",
              "tag-resolved": ticketStatus === "Resolved",
              "tag-closed": ticketStatus === "Closed",
            })}
          >
            {ticketStatus}
          </p>
        </div>
        <div className="ticket-subject">
          <Link to={`/ticket-page/${ticketId}`} className="text-decoration-none">
            <p id="ticket-subject">{ticketSubject}</p>
          </Link>
          <span id="ticket-no">#100</span>
        </div>
        <div className="ticket-info">
          <div className="ticket-channel-icon">{sourceIcon()}</div>
          <div className="ticket-user-name">
            <p>{ticketUserName}</p>
          </div>
          <div id="dot">
            <BsDot />
          </div>
          <div className="ticket-created">
            <p>Created sometime ago</p>
          </div>
        </div>
      </div>
      <div className="ticket-meta">
        <div className="ticket-priority-assign">
          <div>
            <FaSquare id="priority-square-icon" />
          </div>
          <div>
            <select
              name="priority"
              id="ticket-priority"
              className="custom-select"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>
        </div>
        <div className="ticket-group-assign">
          <div>
            <HiOutlineUserAdd id="assign-agent" />
          </div>
          <div>
            <select name="assign-agent" id="select-agent">
              <option value="agent 1">Agent 1</option>
              <option value="agent 2">Agent 2</option>
              <option value="agent 3">Agent 3</option>
              <option value="agent 4">Agent 4</option>
            </select>
          </div>
        </div>
        <div className="ticket-status-assign">
          <div>
            <GrStatusGoodSmall id="status-icon" />
          </div>
          <div>
            <select name="status" id="ticket-status">
              <option value="open">Open</option>
              <option value="pending">Pending</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
