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

function AllTickets() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);

  const { user } = useSelector((state) => state.auth);

  const { tickets, isSuccess } = useSelector((state) => state.tickets);

  // const [allChecked, setAllChecked] = useState(false);

  const [loading, setLoading] = useState(true);


  // const [isChecked, setIsChecked] = useState(false);

  const [deleteTickets, setDeleteTickets] = useState([]);

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


  const pageChangePrev = () => {
    setPage(Math.max(0, page - 1));
  };

  const pageChangeNext = () => {
    setPage(Math.min(totalPages - 1, page + 1));
  };

  const handleAllChecked = (e) => {
    const { name, checked} = e.target;
    if(name === "checkAll"){
      let tempTicket = tickets?.Alltickets.map((ticket) = {
        return {...ticket, isChecked:checked};
      });
      
    }
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
    dispatch(deleteTicket(deleteTickets));
  };

  const handleFilters = () => {
    console.log("");
  };

  return (
    <>
      <div className="all-tickets-wrapper">
        <Sidebar />
        <div className="all-tickets-main-container">
          <Navbar title={"All Tickets"} titleLink="all-tickets" />
          <ActionBar>
            <ActionBarBtns
              allChecked={tickets.Alltickets}
              handleAllChecked={handleAllChecked}
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
                  {typeof tickets.Alltickets === typeof [] && (
                    <>
                      {tickets.Alltickets.map((ticket, index) => (
                        <Ticket
                          key={ticket._id}
                          ticketId={ticket._id}
                          ticketStatus={ticket.status}
                          ticketSubject={ticket.subject}
                          ticketSource={ticket.source}
                          ticketUserName={ticket.name}
                          ticketPriority={ticket.priority}
                          ticketDateTime={ticket.createdAt}
                          isChecked={ticket?.isChecked || false}
                          checkedOnChange={handleAllChecked}
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
