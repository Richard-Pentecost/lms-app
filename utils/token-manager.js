import decode from 'jwt-decode';
import dayjs from 'dayjs';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = (token) => {
  AsyncStorage.setItem('token', token);
};

export const getToken = async () => await AsyncStorage.getItem('token');

export const getTokenPayload = async () => {
  const token = await getToken();
  return token && decode(token);
};

export const isTokenValid = (token) => {
  return Boolean(token && (!token.exp || dayjs().unix() < token.exp));
};

// export const removeToken = () => {
//   window.localStorage.removeItem('apiToken');
// };
