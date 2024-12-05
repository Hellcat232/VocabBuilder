import { createSlice } from '@reduxjs/toolkit';
import { registration, refresh, login, logout } from './operations';

const initialState = {
  user: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state, action) => {
        state.user = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(registration.rejected, (state, action) => {
        state.user = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(login.pending, (state, action) => {
        // state.user = null;
        // state.isLoggedIn = false;
        state.isRefreshing = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(login.rejected, (state, action) => {
        // state.user = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refresh.pending, (state, action) => {
        // state.isLoggedIn = false;
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.user = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logout.pending, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.user = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      });
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
