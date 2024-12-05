import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
};
axios.defaults.withCredentials = true;

export const registration = createAsyncThunk(
  'api/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', {
        name,
        email,
        password,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const login = createAsyncThunk(
  'api/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signin', { email, password });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const refresh = createAsyncThunk(
  'api/refresh',
  async (value, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/current', {
        credential: 'include',
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk(
  'api/logout',
  async (value, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/logout');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
