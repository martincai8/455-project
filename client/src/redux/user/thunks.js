import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "./actions";
import UserService from "./service";

export const getUsersAsync = createAsyncThunk(actions.GET_USERS, async () => {
  return await UserService.getUsers();
});

export const addUserAsync = createAsyncThunk(actions.ADD_USER, async (user) => {
  return await UserService.addUser(user);
});

export const deleteUserAsync = createAsyncThunk(
  actions.DELETE_USER,
  async (userId) => {
    return await UserService.deleteUser(userId);
  }
);

export const updateUserAsync = createAsyncThunk(
  actions.UPDATE_USER,
  async ({ userId, updatedUser }) => {
    return await UserService.updateUser(userId, updatedUser);
  }
);

export const addSessionToPlayerAsync = createAsyncThunk(
  "player/add",
  async ({ userId, sessionId }) => {
    const response = await UserService.addSession(userId, sessionId);
    return { session: response, player: userId };
  }
);
