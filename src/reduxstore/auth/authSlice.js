// const { createSlice } = require("@reduxjs/toolkit");
// const { register, login, logout, refresh } = require("./operations");

import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refresh, register } from "./operations";

const handlePending = (state) => {
   state.error = null;
};
const handleRejected = (state, action) => {
   state.error = action.payload;
};

const authSlice = createSlice({
   name: "auth",
   initialState: {
      email: null,
      token: null,
      isLoggedIn: false,
      isRefreshing: false,
      error: null,
   },
   extraReducers: (builder) => {
      builder
         .addCase(register.pending, handlePending)
         .addCase(register.fulfilled, (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isLoggedIn = true;
         })
         .addCase(register.rejected, handleRejected)
         .addCase(login.fulfilled, (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isLoggedIn = true;
         })
         .addCase(login.rejected, handleRejected)
         .addCase(logout.fulfilled, (state) => {
            state.email = null;
            state.token = null;
            state.isLoggedIn = false;
         })
         .addCase(refresh.pending, (state) => {
            state.isRefreshing = true;
         })
         .addCase(refresh.fulfilled, (state, action) => {
            state.email = action.payload;
            state.isRefreshing = false;
            state.isLoggedIn = true;
         })
         .addCase(refresh.rejected, (state) => {
            state.isRefreshing = false;
         });
   },
});

export const authReducer = authSlice.reducer;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectAuthError = (state) => state.auth.error;
