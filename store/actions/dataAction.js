import axios from 'axios';
import { API_URL } from 'react-native-dotenv';
import { getToken } from '../../utils/token-manager';
import { dataActions } from '../slices/dataSlice';

export const fetchData = (farmId) => {
  return async (dispatch) => {
    try {
      dispatch(dataActions.fetchDataStart());
      const headers = { Authorization: getToken() };
      const response = await axios.get(`${API_URL}/farms/${farmId}/data`, {
        headers,
      });
      dispatch(dataActions.fetchDataSuccess(response.data.data));
    } catch (error) {
      console.error(error);
      dispatch(dataActions.fetchDataFail('Error fetching data'));
    }
  };
};

// export const addData = (data, previousDataUuid) => {
//   return async (dispatch) => {
//     try {
//       const { farmFk: farmId } = data;
//       dispatch(dataActions.addDataStart());
//       const headers = { Authorization: getToken() };
//       await axios.post(
//         `${API_URL}/farms/${farmId}/data`,
//         { data, previousDataUuid },
//         { headers }
//       );
//       dispatch(dataActions.addDataSuccess());
//       dispatch(fetchData(farmId));
//     } catch (error) {
//       console.error(error);
//       dispatch(dataActions.addDataFail('Error adding data'));
//     }
//   };
// };

export const addData = createAsyncThunk(
  'data/addData',
  async (data, previousDataUuid) => {
    try {
      const { farmFk: farmId } = data;
      const headers = { Authorization: await getToken() };
      await axios.post(`${API_URL}/farms/${farmId}/data`),
        { data, previousDataUuid },
        { headers };
      return;
    } catch (error) {
      console.error(error);
      return 'There was an error adding data';
    }
  }
);
