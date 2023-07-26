import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from 'react-native-dotenv';
import { getToken } from '../../utils/token-manager';

export const fetchRegions = createAsyncThunk(
  'regions/fetchRegions',
  async () => {
    try {
      const headers = { Authorization: await getToken() };
      const { data: regions } = await axios.get(`${API_URL}/regions`, {
        headers,
      });

      return regions;
    } catch (error) {
      console.error(error);
      return 'There was an error fetching regions';
    }
  }
);
