import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from 'react-native-dotenv';
import { getToken } from '../../utils/token-manager';
// import { dataActions } from '../slices/dataSlice';

export const fetchData = createAsyncThunk('data/fetchData', async (farmId) => {
  try {
    const headers = { Authorization: await getToken() };
    const { data } = await axios.get(`${API_URL}/farms/${farmId}/data`, {
      headers,
    });
    return data.data;
  } catch (error) {
    console.error(error);
    return 'There was an error fetching the data';
  }
});

export const addData = createAsyncThunk(
  'data/addData',
  async ({ data, previousData }) => {
    const previousDataUuid = previousData.length > 0 && previousData[0].uuid;

    // console.log('***** add data ******');
    // console.log(data);
    // console.log(previousData.length > 0 && previousData[0].date);
    try {
      const { farmFk: farmId } = data;
      const headers = { Authorization: await getToken() };
      await axios.post(
        `${API_URL}/farms/${farmId}/data`,
        { data, previousDataUuid },
        { headers }
      );
      return;
    } catch (error) {
      console.error(error);
      return 'There was an error adding data';
    }
  }
);

export const updateData = createAsyncThunk(
  'data/updateData',
  async ({ data, dataId, previousData }) => {
    const previousDataUuid = previousData?.uuid;

    // console.log('***** update data ******');
    // console.log(data);

    try {
      const { farmFk: farmId } = data;
      const headers = { Authorization: await getToken() };
      await axios.patch(
        `${API_URL}/farms/${farmId}/data/${dataId}`,
        { data, previousDataUuid },
        { headers }
      );
      return;
    } catch (error) {
      console.error(error);
      return 'There was an error updating data';
    }
  }
);

// export const clearErrors = () => {
//   return (dispatch) => dispatch(dataActions.clearErrors());
// };

// export const clearSuccessFlag = () => {
//   return (dispatch) => dispatch(dataActions.clearSuccessFlag());
// };

// export const fetchData = (farmId) => {
//   return async (dispatch) => {
//     try {
//       dispatch(dataActions.fetchDataStart());
//       const headers = { Authorization: getToken() };
//       const response = await axios.get(`${API_URL}/farms/${farmId}/data`, {
//         headers,
//       });
//       dispatch(dataActions.fetchDataSuccess(response.data.data));
//     } catch (error) {
//       console.error(error);
//       dispatch(dataActions.fetchDataFail('Error fetching data'));
//     }
//   };
// };

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
