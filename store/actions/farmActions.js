import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from 'react-native-dotenv';
import { getToken } from '../../utils/token-manager';
// import { farmActions } from '../slices/farmSlice';

// export const fetchActiveFarms2 = (search = '') => {
//   return async (dispatch) => {
//     try {
//       dispatch(farmActions.fetchFarmsStart());
//       const headers = { Authorization: await getToken() };
//       const { data: farms } = await axios.get(
//         `${API_URL}/farms/active/${search}`,
//         {
//           headers,
//         }
//       );
//       dispatch(farmActions.fetchFarmsSuccess(farms));
//     } catch (error) {
//       console.error(error);
//       dispatch(farmActions.fetchFarmsFail('Error fetching active farms'));
//     }
//   };
// };

export const fetchActiveFarms = createAsyncThunk(
  'farms/fetchActiveFarms',
  async (search = '') => {
    try {
      const headers = { Authorization: await getToken() };
      const { data: farms } = await axios.get(
        `${API_URL}/farms/active/${search}`,
        { headers }
      );
      return farms;
    } catch (error) {
      console.error(error);
      return 'There was an error fetching farms';
    }
  }
);
