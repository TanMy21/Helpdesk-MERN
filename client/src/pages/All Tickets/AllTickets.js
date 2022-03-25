import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { FaSignOutAlt } from "react-icons/fa";
// import { logout, reset } from "../../features/auth/authSlice";
import "./all.tickets.css";
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/Navbar/navbar";
import Ticket from "../../components/Ticket/Ticket";
import FilterForm from "../../components/FilterForm/FilterForm";
import ActionBar from "../../components/ActionBar/ActionBar";

function AllTickets() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    return () => {
      // dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  // const onLogout = () => {
  //   dispatch(logout());
  //   dispatch(reset());
  //   navigate("/");
  // };

  return (
    <>
      <div className="all-tickets-wrapper">
        <Sidebar />
        <div className="all-tickets-main-container">
          <Navbar title={"All Tickets"} />
          <ActionBar />
          <div className="all-tickets-main-content">
            <div className="all-tickets-container">
              <div className="all-tickets">
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
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
