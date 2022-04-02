import "./ticket.page.css";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/Navbar/navbar";
import ActionBar from "../../components/ActionBar/ActionBar";
import { BsTelephone } from "react-icons/bs";
import { getTicket, reset } from "../../features/tickets/ticketSlice";
import classNames from "classnames";

const TicketPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { ticketId } = useParams();

  const { user } = useSelector((state) => state.auth);
  const { ticket, isSuccess } = useSelector((state) => state.tickets);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    return () => {
      // dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  useEffect(() => {
    dispatch(getTicket(ticketId));
  }, [ticketId]);

  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="main-container">
          <Navbar title={"All Tickets > 2"} titleLink="all-tickets" />
          <ActionBar>
            <div className="ticket-page-actionbar-btns-container"></div>
          </ActionBar>
          <div className="main-content">
            <div className="ticket-content">
              <div className="ticket-details-container">
                <div
                  className={classNames("ticket-details-status", {
                    "ticket-page-tag-open": ticket.status === "Open",
                    "ticket-page-tag-pending": ticket.status === "Pending",
                    "ticket-page-tag-resolved": ticket.status === "Resolved",
                    "ticket-page-tag-closed": ticket.status === "Closed",
                  })}
                >
                  {ticket.status}
                </div>
                <div className="ticket-details">
                  <div className="ticket-header">
                    <div className="ticket-header-icon">
                      <BsTelephone id="ticket-header-icon" />
                    </div>
                    <div className="ticket-header-subject-created-at">
                      <div className="ticket-header-subject">
                        {ticket.subject}
                      </div>
                      <div className="ticket-header-created-at">
                        {ticket.createdAt}
                      </div>
                    </div>
                  </div>
                  <div className="ticket-content-container">
                    <div className="ticket-content-header-container">
                      <div className="ticket-content-user-img">
                        <div className="ticket-user-icon-char">
                          {ticket.name}
                        </div>
                      </div>
                      <div className="ticket-content-header">
                        <div className="ticket-content-username">
                          <div className="ticket-username">{ticket.name}</div>
                          <div className="reported-via">
                            reported via &nbsp;<span>{ticket.source}</span>
                          </div>
                        </div>
                        <div className="ticket-content-created-at">
                          {ticket.createdAt}
                        </div>
                      </div>
                    </div>
                    <div className="ticket-content-description">
                      <p>{ticket.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="update-ticket-container">
                <div className="update-form-title">UPDATE TICKET</div>
                <div className="update-form">
                  <form>
                    <label htmlFor="update-form-tags">Tags</label>
                    <br />
                    <input
                      type="text"
                      id="update-form-tags-input"
                      name="update-tags"
                    />
                    <br />
                    <label htmlFor="update-type" id="update-select-label">
                      Type
                    </label>
                    <br />
                    <select
                      id="update-type"
                      name="update-type"
                      className="update-form-select"
                    >
                      <option value="question">Question</option>
                      <option value="incident">Incident</option>
                      <option value="problem">Problem</option>
                      <option value="refund">Refund</option>
                    </select>
                    <br />
                    <label htmlFor="update-status" id="update-select-label">
                      Status
                    </label>
                    <br />
                    <select
                      id="update-status"
                      name="update-stauts"
                      className="update-form-select"
                    >
                      <option value="open">Open</option>
                      <option value="resolved">Resolved</option>
                      <option value="pending">Pending</option>
                      <option value="closed">Closed</option>
                    </select>
                    <br />
                    <label htmlFor="update-priority" id="update-select-label">
                      Priority
                    </label>
                    <br />
                    <select
                      id="update-priority"
                      name="update-priority"
                      className="update-form-select"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                    <br />
                    <label htmlFor="update-agent" id="update-select-label">
                      Agent
                    </label>
                    <select
                      id="update-agent"
                      name="update-agent"
                      className="update-form-select"
                    >
                      <option value="agent 1">Agent 1</option>
                      <option value="agent 2">Agent 2</option>
                      <option value="agent 3">Agent 3</option>
                      <option value="agent 4">Agent 4</option>
                    </select>
                    <br />
                    <br />
                    <hr />
                    <input type="submit" value="UPDATE" id="update-form-btn" />
                  </form>
                </div>
              </div>
              <div className="contact-details-container">
                <div className="contact-details">
                  <div className="contact-details-header">CONTACT DETAILS</div>
                  <div className="contact-details-content">
                    <div className="ticket-user-img-name">
                      <div className="ticket-user-img"></div>
                      <div className="ticket-user-name">{ticket.name}</div>
                    </div>
                    <div className="ticket-user-email">
                      <div className="ticket-user-email-label">Email</div>
                      <div className="ticket-user-email-text">
                        {ticket.email}
                      </div>
                    </div>
                    <div className="ticket-user-phone">
                      <div className="ticket-user-phone-label">Phone</div>
                      <div className="ticket-user-phone-text">
                        {ticket.phone}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketPage;
