import "./ticket.page.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/Navbar/navbar";
import ActionBar from "../../components/ActionBar/ActionBar";
import { BsTelephone } from "react-icons/bs";
import {
  getTicket,
  updateTicket,
  reset,
} from "../../features/tickets/ticketSlice";
import { getAgents } from "../../features/agents/agentSlice";
import classNames from "classnames";
import Moment from "react-moment";
import moment from "moment";
import { Editor, EditorState, convertFromRaw } from "draft-js";

const TicketPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { ticketId } = useParams();

  const [type, setType] = useState("Question");
  const [status, setStatus] = useState("Open");
  const [priority, setPriority] = useState("Low");
  const [agent, setAgent] = useState("Agent 1");
  const [description, setDescription] = useState(null);
  const [contentState, setContentState] = useState(null);
  const [editorContent, setEditorContent] = useState(null);

  const { user } = useSelector((state) => state.auth);
  const { ticket, isSuccess } = useSelector((state) => state.tickets);
  const { agents } = useSelector((state) => state.agents);

  const userNameFirstChar = ticket?.name;

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
    dispatch(getAgents());
  }, [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTicket({ ticketId, type, status, priority, agent }));
  };

  const createdDateTime = moment(new Date(ticket.createdAt)).format(
    "dddd MMMM Do YYYY, h:mm a"
  );

  useEffect(() => {
    if (ticket) {
      setDescription(ticket?.description);
    }
  }, [ticket]);


  useEffect(() => {

    if(description){
      const contentState = convertFromRaw(JSON.parse(description));
      setContentState(contentState);
    }

  },[description])



  useEffect(() => {

    if(contentState){
      const editorState = EditorState.createWithContent(contentState);
      console.log(editorState);
      setEditorContent(editorState)
    }

  },[contentState])




  return editorContent && (
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
                      <div className="ticket-header-created-at">Created By</div>
                    </div>
                  </div>
                  <div className="ticket-content-container">
                    <div className="ticket-content-header-container">
                      <div className="ticket-content-user-img">
                        <div className="ticket-user-icon-char">
                          {userNameFirstChar?.charAt(0)}
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
                          <Moment fromNow>{ticket.createdAt}</Moment>
                          <div className="ticket-day-datetime">
                            {`(${createdDateTime})`}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ticket-content-description">
                      {/* <p>{description}</p> */}
                      {/* <RichTextDisplay description={ticket?.description}/> */}
                      <Editor editorState={editorContent} readOnly={true} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="update-ticket-container">
                <div className="update-form-title">UPDATE TICKET</div>
                <div className="update-form">
                  <form onSubmit={onSubmit}>
                    <label htmlFor="update-type" id="update-select-label">
                      Type
                    </label>
                    <br />
                    <select
                      id="update-type"
                      name="update-type"
                      className="update-form-select"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      required
                    >
                      <option value="Question">Question</option>
                      <option value="Incident">Incident</option>
                      <option value="Problem">Problem</option>
                      <option value="Refund">Refund</option>
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
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      required
                    >
                      <option value="Open">Open</option>
                      <option value="Resolved">Resolved</option>
                      <option value="Pending">Pending</option>
                      <option value="Closed">Closed</option>
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
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                      required
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                      <option value="Urgent">Urgent</option>
                    </select>
                    <br />
                    <label htmlFor="update-agent" id="update-select-label">
                      Agent
                    </label>
                    <select
                      id="update-agent"
                      name="update-agent"
                      className="update-form-select"
                      value={agent}
                      onChange={(e) => setAgent(e.target.value)}
                      required
                    >
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
                      <div className="ticket-user-img">
                        {userNameFirstChar?.charAt(0)}
                      </div>
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
