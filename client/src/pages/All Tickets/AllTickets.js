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
  reset,
  deleteTicket,
} from "../../features/tickets/ticketSlice";
import "./all.tickets.css";
import ActionBarBtns from "../../components/ActionBarBtns/ActionBarBtns";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function AllTickets() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);

  const { user } = useSelector((state) => state.auth);

  const { tickets, isSuccess } = useSelector((state) => state.tickets);

  const [deleteTickets, setDeleteTickets] = useState([]);

  const [ticketsData, setTicketsData] = useState([]);

  const [isChecked, setIsChecked] = useState(false);

  const [allChecked, setAllChecked] = useState(false);

  const { totalPages } = tickets;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    return () => {
      // dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  useEffect(() => {
    dispatch(getTickets(page));
  }, [dispatch, page]);

  useEffect(() => {
    setTicketsData(tickets?.Alltickets);
  }, [tickets]);

  const pageChangePrev = () => {
    setPage(Math.max(0, page - 1));
  };

  const pageChangeNext = () => {
    setPage(Math.min(totalPages - 1, page + 1));
  };

  const handleAllChecked = (e) => {
    setAllChecked(e.target.checked);
  };

  const handleSingleCheck = (id) => {
    let updateList;

    if (deleteTickets.includes(id)) {
      updateList = deleteTickets.filter((item) => item !== id);
    } else {
      updateList = [...deleteTickets, id];
    }

    setDeleteTickets(updateList);
  };

  console.log(deleteTickets);

  const handleDelete = () => {
    confirmAlert({
      title: `Delete ${deleteTickets.length} Ticket(s)`,
      message: "Are you sure you want to proceed?",
      buttons: [
        { label: "Cancel", onClick: () => alert("Click No") },
        {
          label: "Confirm",
          onClick: () => dispatch(deleteTicket(deleteTickets)),
        },
      ],
    });
  };

  useEffect(() => {
    if (allChecked) {
      setIsChecked(true);
    } else {
      console.log(allChecked);
    }
  }, [allChecked]);

  const handleFilters = () => {
    console.log("");
  };

  // console.log(ticketsData);

  return (
    <>
      <div className="all-tickets-wrapper">
        <Sidebar />
        <div className="all-tickets-main-container">
          <Navbar title={"All Tickets"} titleLink="all-tickets" />
          <ActionBar>
            <ActionBarBtns
              checked={allChecked}
              onChange={handleAllChecked}
              handleDelete={handleDelete}
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
                          checked={isChecked[ticket.id]}
                          onChange={handleSingleCheck}
                        />
                      ))}
                    </>
                  )}
                </>
              </div>
              <div className="filters">
                <FilterForm handleFilters={handleFilters} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AllTickets;
