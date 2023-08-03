import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../../constants/cookie.constants';

interface IAuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

const accessToken = Cookies.get(ACCESS_TOKEN_KEY) ?? null;
const refreshToken = Cookies.get(REFRESH_TOKEN_KEY) ?? null;

const initialState: IAuthState = {
  accessToken,
  refreshToken,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;

      Cookies.remove(ACCESS_TOKEN_KEY);
      Cookies.remove(REFRESH_TOKEN_KEY);
    },

    setCredentials: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;

      Cookies.set(ACCESS_TOKEN_KEY, action.payload.accessToken);
      Cookies.set(REFRESH_TOKEN_KEY, action.payload.refreshToken);
    },
  },
});

export const { logout, setCredentials } = authSlice.actions;

export default authSlice.reducer;
