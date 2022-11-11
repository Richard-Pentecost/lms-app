import axios from 'axios';
import { API_URL } from 'react-native-dotenv';
import { getTokenPayload, setToken } from '../../utils/token-manager';
import { authActions } from '../slices/authSlice';

export const loginUser = (credentials) => {
  return async (dispatch) => {
    if (credentials.email || !credentials.password) {
      dispatch(authActions.loginFail('Email and password required'));
    }
    try {
      dispatch(authActions.loginStart());
      const response = await axios.post(`${API_URL}/login`, credentials);
      setToken(response.data.token);
      console.log('****');
      const token = await getTokenPayload();
      console.log('token:', token);
      dispatch(authActions.loginSuccess({ token, user: response.data.user }));
    } catch (error) {
      console.log('*** error ***');
      console.error(error);
      dispatch(authActions.loginFail('Error'));
    }
  };
};
