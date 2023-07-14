import { createSlice } from '@reduxjs/toolkit';

interface IAuthState {
  accessToken: string | null;
  refreshToken: string | null;
}

const accessToken = localStorage.getItem('accessToken') ?? null;
const refreshToken = localStorage.getItem('refreshToken') ?? null;

const initialState: IAuthState = {
  accessToken,
  refreshToken,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;

      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
    setCredentials: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;

      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
    },
  },
});

export const { logout, setCredentials } = authSlice.actions;

export default authSlice.reducer;
