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
import { useSelector, useDispatch } from "react-redux";
import { getAgents } from "../../features/agents/agentSlice";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import moment from "moment";

const Ticket = ({
  ticketId,
  ticketStatus,
  ticketSubject,
  ticketSource,
  ticketUserName,
  ticketPriority,
  ticketDateTime,
  ticketAssigned,
  organizationName,
  checked,
  onChange,
  checkBoxName,
}) => {
  const dispatch = useDispatch();

  const { agents } = useSelector((state) => state.agents);

  const [ticketMetaPriority, setTicketMetaPriority] = useState(ticketPriority);
  const [ticketMetaStatus, setTicketMetaStatus] = useState(ticketStatus);

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

  useEffect(() => {
    dispatch(getAgents());
  }, [dispatch]);

  return (
    <div className="ticket">
      <div className="ticket-checkbox">
        <input
          type="checkbox"
          id="ticket-checkbox"
          name={checkBoxName}
          checked={checked}
          onChange={onChange}
        />
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
          <Link
            to={`/ticket-page/${ticketId}`}
            className="text-decoration-none"
          >
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
            <p>
              Created <Moment fromNow>{ticketDateTime}</Moment>
            </p>
          </div>
        </div>
      </div>
      <div className="ticket-meta">
        <div className="ticket-priority-assign">
          <div
            className={classNames({
              "priority-square-low": ticketMetaPriority === "Low",
              "priority-square-medium": ticketMetaPriority === "Medium",
              "priority-square-high": ticketMetaPriority === "High",
              "priority-square-urgent": ticketMetaPriority === "Urgent",
            })}
          >
            <FaSquare />
          </div>
          <div>
            <select
              name="priority"
              id="ticket-priority"
              className="custom-select"
              value={ticketMetaPriority}
              onChange={(e) => setTicketMetaPriority(e.target.value)}
            >
              <option value="Low">
                {ticketPriority === "Low" ? ticketPriority : `Low`}
              </option>
              <option value="Medium">
                {ticketPriority === "Medium" ? ticketPriority : `Medium`}
              </option>
              <option value="High">
                {ticketPriority === "High" ? ticketPriority : `High`}
              </option>
              <option value="Urgent">
                {ticketPriority === "Urgent" ? ticketPriority : `Urgent`}
              </option>
            </select>
          </div>
        </div>
        <div className="ticket-group-assign">
          <div>
            <HiOutlineUserAdd id="assign-agent" />
          </div>
          <div>
            <select name="assign-agent" id="select-agent" value={ticketAssigned}>
              {typeof agents === typeof [] && (
                <>
                  {agents.map((agent, index) => (
                    <option key={agent.name} value={agent.name}>
                      {agent.name}
                    </option>
                  ))}
                </>
              )}
            </select>
          </div>
        </div>
        <div className="ticket-status-assign">
          <div
            className={classNames({
              "status-icon-open": ticketMetaStatus === "Open",
              "status-icon-pending": ticketMetaStatus === "Pending",
              "status-icon-resolved": ticketMetaStatus === "Resolved",
              "status-icon-closed": ticketMetaStatus === "Closed",
            })}
          >
            <GrStatusGoodSmall id="status-icon" />
          </div>
          <div>
            <select
              name="status"
              id="ticket-status"
              value={ticketMetaStatus}
              onChange={(e) => setTicketMetaStatus(e.target.value)}
            >
              <option value="Open">
                {ticketStatus === "Open" ? ticketStatus : `Open`}
              </option>
              <option value="Pending">
                {ticketStatus === "Pending" ? ticketStatus : `Pending`}
              </option>
              <option value="Resolved">
                {ticketStatus === "Resolved" ? ticketStatus : `Resolved`}
              </option>
              <option value="Closed">
                {ticketStatus === "Closed" ? ticketStatus : `Closed`}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
