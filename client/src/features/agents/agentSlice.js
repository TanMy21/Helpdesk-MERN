import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import agentService from "./agentService";

const initialState = {
  agents: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new agent
export const createAgent = createAsyncThunk(
  "agents/create",
  async (agentData, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      return await agentService.createAgent(agentData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get agents
export const getAgents = createAsyncThunk(
  "agents/getAll",
  async (_, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      return await agentService.getAgents(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const agentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAgent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAgent.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createAgent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAgents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAgents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.agents = action.payload;
      })
      .addCase(getAgents.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = agentSlice.actions;
export default agentSlice.reducer;
