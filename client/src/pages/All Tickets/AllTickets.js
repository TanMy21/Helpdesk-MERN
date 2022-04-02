import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/Navbar/navbar";
import Ticket from "../../components/Ticket/Ticket";
import FilterForm from "../../components/FilterForm/FilterForm";
import ActionBar from "../../components/ActionBar/ActionBar";
import { getTickets, reset } from "../../features/tickets/ticketSlice";
import "./all.tickets.css";

function AllTickets() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { tickets, isSuccess } = useSelector((state) => state.tickets);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    return () => {
      // dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  useEffect(() => {
    dispatch(getTickets());

    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  return (
    <>
      <div className="all-tickets-wrapper">
        <Sidebar />
        <div className="all-tickets-main-container">
          <Navbar title={"All Tickets"} titleLink="all-tickets"/>
          <ActionBar />
          <div className="all-tickets-main-content">
            <div className="all-tickets-container">
              <div className="all-tickets">
                {tickets.map((ticket) => (
                  <Ticket
                    key={ticket._id}
                    ticketId ={ticket._id}
                    ticketStatus={ticket.status}
                    ticketSubject={ticket.subject}
                    ticketSource={ticket.source}
                    ticketUserName={ticket.name}
                  />
                ))}
              </div>
              <div className="filters">
                <FilterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllTickets;
