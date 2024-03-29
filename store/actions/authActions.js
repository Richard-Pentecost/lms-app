import axios from 'axios';
import { API_URL } from 'react-native-dotenv';
import {
  getTokenPayload,
  // isTokenValid,
  // removeToken,
  setToken,
} from '../../utils/token-manager';
// import { authActions } from '../slices/authSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const loginUser = (credentials) => {
//   return async (dispatch) => {
//     if (credentials.email || !credentials.password) {
//       dispatch(authActions.loginFail('Email and password required'));
//     }
//     try {
//       dispatch(authActions.loginStart());
//       const response = await axios.post(`${API_URL}/login`, credentials);
//       // const { token, user } = response.data;
//       // setToken(token);
//       // authenticate(token, user);
//       setToken(response.data.token);
//       const token = await getTokenPayload();
//       dispatch(authActions.loginSuccess({ token, user: response.data.user }));
//     } catch (error) {
//       console.error(error);
//       dispatch(authActions.loginFail('Error'));
//     }
//   };
// };

// REFACTOR/RETHINK HOW THIS AUTHENTICATION HAPPENS
// export const authenticate = () => {
//   return async (dispatch) => {
//     const token = await getTokenPayload();
//     if (token && isTokenValid(token)) {
//       dispatch(authActions.authenticate({ token }));
//     }
//   };
// };

// export const logoutUser = () => {
//   return async (dispatch) => {
//     removeToken();
//     dispatch(authActions.logoutUser());
//   };
// };

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials);
      setToken(response.data.token);
      const token = await getTokenPayload();
      console.log({ token, user: response.data.user });
      return { token, user: response.data.user };
    } catch (error) {
      console.log('**** login user error ****');
      console.error(error);
      return 'There was an error logging in';
    }
  }
);
