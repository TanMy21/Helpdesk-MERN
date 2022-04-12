import axios from "axios";

const API_URL = "http://localhost:9000/api/tickets/";

// Create new ticket
const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, ticketData, config);

  return response.data;
};

// Get user tickets
const getTickets = async (pg, token) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params:{
      page:pg
    }
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Get user tickets
const getTicketsInfo = async (token) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + 'data', config);
  return response.data;
};

// Get user ticket
const getTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + ticketId, config);

  return response.data;
};

// Update ticket
const updateTicket = async (ticketUpdate, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.patch(API_URL, ticketUpdate, config);

  return response.data;
};

// Delete ticket
const deleteTicket = async (ticketDelete, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }, 
    data:{
      ticketDelete
    }
  };

  console.log("Service:-  ",ticketDelete);

  const response = await axios.delete(API_URL, config);
  
  console.log("Response:- ", response);

  return response.data;

};

// Close ticket
const closeTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    API_URL + ticketId,
    { status: "closed" },
    config
  );

  return response.data;
};

const ticketService = {
  createTicket,
  getTickets,
  getTicketsInfo,
  getTicket,
  updateTicket,
  deleteTicket,
  closeTicket,
};

export default ticketService;
