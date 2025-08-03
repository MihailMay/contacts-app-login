import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { email: null },
  token: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user.email = action.payload.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    loginError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, loginError } = authSlice.actions;
export const authReducer = authSlice.reducer;