import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import NewTicket from "./pages/New Ticket/NewTicket";
import AllTickets from "./pages/All Tickets/AllTickets";
import Settings from "./pages/Settings/Settings";
import TicketPage from "./pages/TicketPage/TicketPage";
import Error from "./pages/Error";
import Agents from "./pages/Agents/Agents";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/new-ticket" element={<NewTicket />} />
        <Route exact path="/all-tickets" element={<AllTickets />} />
        <Route exact path="/ticket-page/:ticketId" element={<TicketPage />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/agents" element={<Agents />} />
        <Route exact path="/error" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
