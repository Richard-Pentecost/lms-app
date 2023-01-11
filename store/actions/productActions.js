import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from 'react-native-dotenv';
import { getToken } from '../../utils/token-manager';
// import { productActions } from '../slices/productSlice';

// export const createProduct = (product) => {
//   return async (dispatch) => {
//     try {
//       dispatch(productActions.addProductStart());
//       const headers = { Authorization: await getToken() };
//       await axios.post(`${API_URL}/products`, { product }, { headers });
//       dispatch(productActions.addProductSuccess());
//       dispatch(fetchProducts());
//     } catch (error) {
//       console.error(error);
//       dispatch(productActions.addProductFail('Error adding product'));
//     }
//   };
// };

// export const fetchProducts = () => {
//   return async (dispatch) => {
//     try {
//       dispatch(productActions.fetchProductsStart());
//       const headers = { Authorization: await getToken() };
//       const { data: products } = await axios.get(`${API_URL}/products`, {
//         headers,
//       });
//       dispatch(productActions.fetchProductsSuccess(products));
//     } catch (error) {
//       console.error(error);
//       dispatch(
//         productActions.fetchProductsFail('There was an error fetching products')
//       );
//     }
//   };
// };

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const headers = { Authorization: await getToken() };
      const { data: products } = await axios.get(`${API_URL}/products`, {
        headers,
      });

      return products;
    } catch (error) {
      console.error(error);
      return 'There was an error fetching products';
    }
  }
);

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async () => {
    try {
      const headers = { Authorization: await getToken() };
      // const { data: products } = await axios.get(`${API_URL}/products`, {
      //   headers,
      // });
    } catch (error) {
      console.error(error);
      return 'There was an error creating the product';
    }
  }
);
