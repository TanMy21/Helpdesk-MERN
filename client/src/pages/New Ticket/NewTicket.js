import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { FaSignOutAlt } from "react-icons/fa";
// import { logout, reset } from "../../features/auth/authSlice";
import "./new.ticket.css";
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/Navbar/navbar";
import { createTicket, reset } from "../../features/tickets/ticketSlice";

const NewTicket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [type, setType] = useState("Question");
  const [source, setSource] = useState("Phone");
  const [status, setStatus] = useState("Open");
  const [priority, setPriority] = useState("Low");
  const [agent, setAgent] = useState("Agent 1");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const { user } = useSelector((state) => state.auth);
  const { isSuccess } = useSelector(
    (state) => state.tickets
  );

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch]);


  useEffect(() => {
    // if (isError) {
    //   toast.error(message)
    // }

    if (isSuccess) {
      dispatch(reset())
      navigate('/new-ticket')
    }

    dispatch(reset())
  }, [dispatch, isSuccess ,navigate])




  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createTicket({
        name,
        email,
        phone,
        subject,
        type,
        source,
        status,
        priority,
        agent,
        description,
        tags,
      })
    );
  };

  return (
    <>
      <div className="new-ticket-wrapper">
        <Sidebar />
        <div className="new-ticket-main-container">
          <Navbar title={"New Ticket"} />
          <div className="new-ticket-main-content">
            <div className="new-ticket-content">
              <div className="new-ticket-form-container">
                <div className="new-ticket-form">
                  <form onSubmit={onSubmit}>
                    <label htmlFor="contact" id="ticket-htmlForm-label">
                      Full Name <span id="required-input-star">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      id="new-ticket-text-input"
                      name="ticket-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <br />
                    <label htmlFor="contact" id="ticket-form-label">
                      Email <span id="required-input-star">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      id="new-ticket-text-input"
                      name="ticket-contact"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <br />
                    <label htmlFor="contact" id="ticket-form-label">
                      Phone <span id="required-input-star">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      id="new-ticket-text-input"
                      name="ticket-contact"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                    <br />
                    <label htmlFor="subject" id="ticket-form-label">
                      Subject <span id="required-input-star">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      id="new-ticket-text-input"
                      name="ticket-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                    <br />
                    <label htmlFor="type" id="ticket-form-label">
                      Type <span id="required-input-star">*</span>
                    </label>
                    <br />
                    <select
                      id="new-ticket-select-input"
                      name="ticket-type"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      required
                    >
                      <option value="Question">Question</option>
                      <option value="Incident">Incident</option>
                      <option value="Problem">Problem</option>
                      <option value="Feature Request">Feature Request</option>
                      <option value="Refund">Refund</option>
                    </select>
                    <br />
                    <label htmlFor="type" id="ticket-form-label">
                      Source <span id="required-input-star">*</span>
                    </label>
                    <br />
                    <select
                      id="new-ticket-select-input"
                      name="ticket-source"
                      value={source}
                      onChange={(e) => setSource(e.target.value)}
                      required
                    >
                      <option value="Phone">Phone</option>
                      <option value="Forum">Forum</option>
                      <option value="Email">Email</option>
                      <option value="Social Media">Social Media</option>
                    </select>
                    <br />
                    <label htmlFor="type" id="ticket-form-label">
                      Stauts <span id="required-input-star">*</span>
                    </label>
                    <br />
                    <select
                      id="new-ticket-select-input"
                      name="ticket-status"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      required
                    >
                      <option value="Open">Open</option>
                      <option value="Pending">Pending</option>
                      <option value="Resolved">Resolved</option>
                      <option value="Closed">Closed</option>
                      <option value="Waiting for Customer">
                        Waiting for customer
                      </option>
                    </select>
                    <br />
                    <label htmlFor="type" id="ticket-form-label">
                      Priority <span id="required-input-star">*</span>
                    </label>
                    <br />
                    <select
                      id="new-ticket-select-input"
                      name="ticket-priority"
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
                    <label htmlFor="type" id="ticket-form-label">
                      Agent <span id="required-input-star">*</span>
                    </label>
                    <br />
                    <select
                      id="new-ticket-select-input"
                      name="ticket-agent"
                      value={agent}
                      onChange={(e) => setAgent(e.target.value)}
                      required
                    >
                      <option value="Agent 1">Agent 1</option>
                      <option value="Agent 2">Agent 2</option>
                      <option value="Agent 3">Agent 3</option>
                      <option value="Agent 4">Agent 4</option>
                    </select>
                    <br />
                    <br />
                    <label htmlFor="description">
                      Description <span id="required-input-star">*</span>
                    </label>
                    <br />
                    <textarea
                      id="ticket-form-description"
                      name="description"
                      rows="6"
                      cols="142"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                    <br />
                    <label htmlFor="contact" id="ticket-form-label">
                      Tags <span id="required-input-star">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      id="new-ticket-text-input"
                      name="ticket-contact"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                      required
                    />
                    <br />
                    <br />
                    <hr />
                    <div className="frm-btn-container">
                      <input type="submit" value="Cancel" id="cancel-btn" />
                      <input type="submit" value="Create" id="new-ticket-btn" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTicket;
