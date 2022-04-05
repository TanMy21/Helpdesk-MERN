import axios from "axios";

const API_URL = "http://localhost:9000/api/agent/";

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


const agentService = {
  createAgent,
  getAgents,
};

export default agentService;