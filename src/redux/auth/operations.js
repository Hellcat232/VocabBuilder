import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = ' http://localhost:3000/api';

export const register = createAsyncThunk(
  'api/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', {
        name,
        email,
        password,
      });
      console.log(response);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const login = createAsyncThunk('api/login', async (value, thunkAPI) => {
  try {
    const response = await axios.post('/users/signin');

    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk(
  'api/refresh',
  async (value, thunkAPI) => {
    try {
      const response = await axios.post('/users/current');

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk(
  'api/logout',
  async (value, thunkAPI) => {
    try {
      const response = await axios.post('/users/logout');

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
