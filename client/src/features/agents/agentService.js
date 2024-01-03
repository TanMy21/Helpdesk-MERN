import axios from "axios";

const API_URL = "https://helpdesk-mern-tp.onrender.com/api/agent/";

// Create new agent
const createAgent = async (agentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, agentData, config);

  return response.data;
};

// Get Agents
const getAgents = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

//Delete Agent
const deleteAgent = async (agentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  console.log("Agent Service:- ", agentId);

  const response = await axios.delete(API_URL + agentId , config);

  return response.data;
};

const agentService = {
  createAgent,
  getAgents,
  deleteAgent,
};

export default agentService;
