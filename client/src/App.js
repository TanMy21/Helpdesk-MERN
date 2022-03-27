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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new-ticket" element={<NewTicket />} />
        <Route path="/all-tickets" element={<AllTickets />} />
        <Route path="/ticket-page" element={<TicketPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
