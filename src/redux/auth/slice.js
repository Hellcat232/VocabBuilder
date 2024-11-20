import { createSlice } from '@reduxjs/toolkit';
import { register, refresh, login, logout } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {})
      .addCase(register.fulfilled, (state, action) => {})
      .addCase(register.rejected, (state, action) => {});
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
