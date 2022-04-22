import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/Navbar/navbar";
import Ticket from "../../components/Ticket/Ticket";
import FilterForm from "../../components/FilterForm/FilterForm";
import ActionBar from "../../components/ActionBar/ActionBar";
import Pagination from "../../components/Pagination/Pagination";
import {
  getTickets,
  deleteTicket,
  closeTicket,
} from "../../features/tickets/ticketSlice";
import "./all.tickets.css";
import ActionBarBtns from "../../components/ActionBarBtns/ActionBarBtns";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
// import { filterTickets } from "../../features/tickets/ticketSlice";
import { getAgents } from "../../features/agents/agentSlice";
import NoTickets from "../../components/NoTickets/NoTickets";

function AllTickets() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);

  const { user } = useSelector((state) => state.auth);

  const { tickets } = useSelector((state) => state.tickets);

  const { agents } = useSelector((state) => state.agents);

  const [deleteTickets, setDeleteTickets] = useState([]);

  const [ticketsData, setTicketsData] = useState([]);

  const [showActionBtns, setShowActionBtns] = useState(false);

  const [noTicket, setNoTicket] = useState(false);

  const { totalPages, message } = tickets;

  const agentsName = [];

  const [createdFilter, setCreatedFilter] = useState("Any Time");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [resolutionFilter, setResolutionFilter] = useState("All");
  const [sourceFilter, setSourceFilter] = useState("All");
  const [agentFilter, setAgentFilter] = useState("All");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate, dispatch]);

  useEffect(() => {
    dispatch(
      getTickets({
        page,
        agentFilter,
        createdFilter,
        statusFilter,
        priorityFilter,
        typeFilter,
        resolutionFilter,
        sourceFilter,
      })
    );
  }, [
    dispatch,
    page,
    agentFilter,
    createdFilter,
    statusFilter,
    priorityFilter,
    typeFilter,
    resolutionFilter,
    sourceFilter,
  ]);

  useEffect(() => {
    setTicketsData(tickets?.Alltickets);

    if (message) {
      setNoTicket(true);
    } else {
      setNoTicket(false);
    }
  }, [tickets]);

  const pageChangePrev = () => {
    setPage(Math.max(0, page - 1));
  };

  const pageChangeNext = () => {
    setPage(Math.min(totalPages - 1, page + 1));
  };

  const handleAllChecked = (e) => {
    const { name, checked } = e.target;
    setDeleteTickets([]);
    let updateList = [];
    if (name === "CheckAll") {
      console.log("Check All:- ", checked);

      setShowActionBtns(true);

      if (checked) {
        ticketsData.map((ticket) => updateList.push(ticket._id));
      }

      console.log("check all update List:- ", updateList);

      setDeleteTickets(updateList);

      let tempTicket = ticketsData?.map((ticket) => {
        return { ...ticket, isChecked: checked };
      });
      setTicketsData(tempTicket);
    } else {
      setShowActionBtns(true);
      let tempTicket = ticketsData?.map((ticket) =>
        ticket._id === name ? { ...ticket, isChecked: checked } : ticket
      );
      if (deleteTickets.includes(name)) {
        updateList = deleteTickets.filter((item) => item !== name);
      } else {
        updateList = [...deleteTickets, name];
      }
      setDeleteTickets(updateList);

      setTicketsData(tempTicket);
    }
  };

  const handleDelete = () => {
    confirmAlert({
      title: `Delete ${deleteTickets.length} Ticket(s)`,
      message: "Are you sure you want to proceed?",
      buttons: [
        { label: "Cancel" },
        {
          label: "Confirm",
          onClick: () => dispatch(deleteTicket(deleteTickets)),
        },
      ],
    });
  };

  const handleClose = () => {
    confirmAlert({
      title: `Close ${deleteTickets.length} Ticket(s)`,
      message: "Are you sure you want to close?",
      buttons: [
        { label: "Cancel" },
        {
          label: "Confirm",
          onClick: () => dispatch(closeTicket(deleteTickets)),
        },
      ],
    });
  };

  useEffect(() => {
    dispatch(getAgents());
  }, [dispatch]);

  agents.map((agent) => agentsName.push(agent.name));

  const onSubmit = (e) => {
    e.preventDefault();
    setPage(0);
    dispatch(
      getTickets({
        page,
        agentFilter,
        createdFilter,
        statusFilter,
        priorityFilter,
        typeFilter,
        resolutionFilter,
        sourceFilter,
      })
    );
  };

 useEffect(() => {
   if(deleteTickets.length === 0){
     setShowActionBtns(false);
   }
 },[deleteTickets])


  return (
    <>
      <div className="all-tickets-wrapper">
        <Sidebar />
        <div className="all-tickets-main-container">
          <Navbar title={"All Tickets"} titleLink="all-tickets" />
          <ActionBar>
            <ActionBarBtns
              checked={
                !ticketsData?.some((ticket) => ticket?.isChecked !== true)
              }
              name="CheckAll"
              onChange={handleAllChecked}
              handleDelete={handleDelete}
              showActionBtns={showActionBtns}
              handleClose={handleClose}
            />
            <Pagination
              page={page}
              totalPages={totalPages}
              pageChangePrev={pageChangePrev}
              pageChangeNext={pageChangeNext}
            />
          </ActionBar>
          <div className="all-tickets-main-content">
            <div className="all-tickets-container">
              <div className="all-tickets">
                {noTicket ? (
                  <NoTickets />
                ) : (
                  <>
                    {typeof ticketsData === typeof [] && (
                      <>
                        {ticketsData.map((ticket, index) => (
                          <Ticket
                            key={ticket._id}
                            ticketId={ticket._id}
                            ticketStatus={ticket.status}
                            ticketSubject={ticket.subject}
                            ticketSource={ticket.source}
                            ticketUserName={ticket.name}
                            ticketPriority={ticket.priority}
                            ticketDateTime={ticket.createdAt}
                            checked={ticket?.isChecked || false}
                            onChange={handleAllChecked}
                            checkBoxName={ticket._id}
                          />
                        ))}
                      </>
                    )}
                  </>
                )}
              </div>
              <div className="filters">
                <FilterForm
                  agentsName={agentsName}
                  setAgentFilter={setAgentFilter}
                  setCreatedFilter={setCreatedFilter}
                  setStatusFilter={setStatusFilter}
                  setPriorityFilter={setPriorityFilter}
                  setTypeFilter={setTypeFilter}
                  setResolutionFilter={setResolutionFilter}
                  setSourceFilter={setSourceFilter}
                  onSubmit={onSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AllTickets;
