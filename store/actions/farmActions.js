import axios from 'axios';
import { API_URL } from 'react-native-dotenv';
import { getToken } from '../../utils/token-manager';
import { farmActions } from '../slices/farmSlice';

export const fetchActiveFarms = (search = '') => {
  return async (dispatch) => {
    try {
      dispatch(farmActions.fetchFarmsStart());
      const headers = { Authorization: await getToken() };
      const { data: farms } = await axios.get(
        `${API_URL}/farms/active/${search}`,
        {
          headers,
        }
      );
      dispatch(farmActions.fetchFarmsSuccess(farms));
    } catch (error) {
      console.error(error);
      dispatch(farmActions.fetchFarmsFail('Error fetching active farms'));
    }
  };
};
