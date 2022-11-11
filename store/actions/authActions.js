import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

export const loginUser = (credentials) => {
  return async (dispatch) => {
    try {
      console.log('*** login user ***');
      console.log(credentials);
      const response = await axios.post(`${API_URL}/login`, credentials);
      console.log(response.data.token);
    } catch (error) {
      console.log('*** error ***');
      console.error(error);
    }
  };
};
