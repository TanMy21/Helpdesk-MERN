import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ticketService from "./ticketService";

const initialState = {
  tickets: [],
  ticket: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new ticket
export const createTicket = createAsyncThunk(
  "tickets/create",
  async (ticketData, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      const token = JSON.parse(localStorage.getItem("token"));

      return await ticketService.createTicket(ticketData, token);
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

// // Filter tickets
// export const filterTickets = createAsyncThunk(
//   "tickets/filter",
//   async (filterData, thunkAPI) => {
//     try {

//       console.log("ticket slice:- ",filterData);

//       // const token = thunkAPI.getState().auth.user.token
//       const token = JSON.parse(localStorage.getItem("token"));

//       return await ticketService.filterTicket(filterData, token);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();

//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// Get user tickets
export const getTickets = createAsyncThunk(
  "tickets/getAll",
  async (page, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token;
      const token = JSON.parse(localStorage.getItem("token"));
      return await ticketService.getTickets(page, token);
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

// Get user tickets info
export const getTicketsInfo = createAsyncThunk(
  "tickets/getInfo",
  async (thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token;
      const token = JSON.parse(localStorage.getItem("token"));
      return await ticketService.getTicketsInfo(token);
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

// Get user ticket
export const getTicket = createAsyncThunk(
  "tickets/get",
  async (ticketId, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      return await ticketService.getTicket(ticketId, token);
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

// Update ticket
export const updateTicket = createAsyncThunk(
  "tickets/update",
  async (ticketUpdate, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      return await ticketService.updateTicket(ticketUpdate, token);
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

// Delete ticket
export const deleteTicket = createAsyncThunk(
  "tickets/delete",
  async (ticketDelete, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      return await ticketService.deleteTicket(ticketDelete, token);
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

// Close ticket
export const closeTicket = createAsyncThunk(
  "tickets/close",
  async (ticketIds, thunkAPI) => {
    try {
      console.log("ticket slice:- ", ticketIds);
      const token = JSON.parse(localStorage.getItem("token"));
      return await ticketService.closeTicket(ticketIds, token);
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

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTicket.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
     .addCase(updateTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTicket.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTicket.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTickets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tickets = action.payload;
      })
      .addCase(getTickets.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // .addCase(filterTickets.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(filterTickets.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isSuccess = true;
      //   state.tickets = action.payload;
      // })
      // .addCase(filterTickets.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.message = action.payload;
      // })
      .addCase(getTicketsInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTicketsInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ticketsInfo = action.payload;
      })
      .addCase(getTicketsInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ticket = action.payload;
      })
      .addCase(getTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(closeTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(closeTicket.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(closeTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { reset } = ticketSlice.actions;
export default ticketSlice.reducer;
