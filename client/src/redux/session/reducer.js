import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATE } from "../utils";
import {
  addSessionAsync,
  deleteSessionAsync,
	updateStatusAsync,
  getSessionsAsync,} from "./thunks"

const INITIAL_STATE = {
  isPublic: true,
  status: "waiting",
  players: [],
  quadrant: [],
  finalImage: "",
  getSessions: REQUEST_STATE.IDLE,
  addSession: REQUEST_STATE.IDLE,
  deleteSession: REQUEST_STATE.IDLE,
  updateStatus: REQUEST_STATE.IDLE,
  setCurrentSession: REQUEST_STATE.IDLE,
  erorr: null
};

const sessionSlice = createSlice({
  name: "session",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getSessionsAsync.pending, (state) => {
      state.getSessions = REQUEST_STATE.PENDING;
      state.error = null;
    })
    .addCase(getSessionsAsync.fulfilled, (state, action) => {
      state.getSessions = REQUEST_STATE.FULFILLED;
      state.sessions = action.payload;
    })
    .addCase(getSessionsAsync.rejected, (state, action) => {
      state.getSessions = REQUEST_STATE.REJECTED;
      state.error = action.error;
    })
    .addCase(addSessionAsync.pending, (state) => {
      state.addSession = REQUEST_STATE.PENDING;
      state.error = null;
    })
    .addCase(addSessionAsync.fulfilled, (state, action) => {
      state.addSession = REQUEST_STATE.FULFILLED;
      state.sessions = [...state.sessions, action.payload];
    })
    .addCase(addSessionAsync.rejected, (state, action) => {
      state.addSession = REQUEST_STATE.REJECTED;
      state.error = action.error;
    })
    .addCase(deleteSessionAsync.pending, (state) => {
      state.deleteSession = REQUEST_STATE.PENDING;
      state.error = null;
    })
    .addCase(deleteSessionAsync.fulfilled, (state, action) => {
      state.deleteSession = REQUEST_STATE.FULFILLED;
      state.sessions = state.sessions.filter(
        (session) => session.id !== action.payload
      );
    })
    .addCase(deleteSessionAsync.rejected, (state, action) => {
      state.deleteSession = REQUEST_STATE.REJECTED;
      state.error = action.error;
    })
    .addCase(updateStatusAsync.pending, (state) => {
      state.updateStatus = REQUEST_STATE.PENDING;
      state.error = null;
    })
    .addCase(updateStatusAsync.fulfilled, (state, action) => {
      state.updateStatus = REQUEST_STATE.FULFILLED;
      //state.sessions = 
    })
    .addCase(updateStatusAsync.rejected, (state, action) => {
      state.updateStatus = REQUEST_STATE.REJECTED;
      state.error = action.error;
    })
  }
});

export default sessionSlice.reducer;