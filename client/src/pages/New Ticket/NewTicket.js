import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./new.ticket.css";
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/Navbar/navbar";
import { createTicket, reset } from "../../features/tickets/ticketSlice";
import { getAgents } from "../../features/agents/agentSlice";
import TagsInput from "../../components/TagsInput/TagsInput";
import RichTextEditor from "../../components/RichTextEditor/RichTextEditor";

const NewTicket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty()
  // );

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
  const [tags, setTags] = useState([]);

  const [duplicate, setDuplicate] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const { isSuccess } = useSelector((state) => state.tickets);

  const { agents } = useSelector((state) => state.agents);

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
      dispatch(reset());
      navigate("/new-ticket");
    }

    dispatch(getAgents());

    dispatch(reset());
  }, [dispatch, isSuccess, navigate]);

  const onSubmit = (e) => {
    e.preventDefault();

    // console.log(
    //   name,
    //   email,
    //   phone,
    //   subject,
    //   type,
    //   source,
    //   status,
    //   priority,
    //   agent,
    //   description,
    //   tags
    // );

    console.log(description);
    console.log(typeof(description));

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
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setType("Question");
    setSource("Phone");
    setStatus("Open");
    setPriority("Low");
    setAgent("Agent 1");
    setDescription("");
    setTags("");
  };

  const handleKeyDown = (e) => {
    if (e.key !== "ArrowRight" || e.target.value === "") {
      return;
    }

    const tag =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);

    if (tags.includes(tag)) {
      setDuplicate(true);
      return;
    } else {
      setDuplicate(false);
    }

    if (tags.length !== 5) {
      setTags([...tags, tag]);
    }

    e.target.value = "";
  };

  const removeTag = (index) => {
    setTags(tags.filter((tag, idx) => idx !== index));
  };

  return (
    <>
      <div className="new-ticket-wrapper">
        <Sidebar />
        <div className="new-ticket-main-container">
          <Navbar title={"New Ticket"} titleLink="new-ticket" />
          <div className="new-ticket-main-content">
            <div className="new-ticket-content">
              <div className="new-ticket-form-container">
                <div className="new-ticket-form">
                  <form>
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
                      <option value="Question" id="new-ticket-select-option">
                        Question
                      </option>
                      <option value="Incident" id="new-ticket-select-option">
                        Incident
                      </option>
                      <option value="Problem" id="new-ticket-select-option">
                        Problem
                      </option>
                      <option
                        value="Feature Request"
                        id="new-ticket-select-option"
                      >
                        Feature Request
                      </option>
                      <option value="Refund" id="new-ticket-select-option">
                        Refund
                      </option>
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
                  </form>
                  <label htmlFor="description" id="ticket-form-label">
                    Description <span id="required-input-star">*</span>
                  </label>
                  <div className="rte-container">
                    <RichTextEditor setDescription={setDescription} />
                  </div>
                  <br />
                  <label htmlFor="contact" id="ticket-tags-label">
                    Tags <p id="tags-label-max-text">(max 5 tags allowed)</p>
                    <span id="required-input-star">*</span>
                    {duplicate ? (
                      <div id="duplicate-tag">Duplicate Tag not Allowed</div>
                    ) : (
                      <div></div>
                    )}
                  </label>
                  <br />
                  <TagsInput
                    tags={tags}
                    handleKeyDown={handleKeyDown}
                    removeTag={removeTag}
                  />
                  <hr className="form-hr" />
                  <br />
                  <div className="frm-btn-container">
                    <input type="submit" value="Cancel" id="cancel-btn" />
                    <input
                      type="submit"
                      value="Create"
                      id="new-ticket-btn"
                      onClick={onSubmit}
                    />
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

export default NewTicket;
