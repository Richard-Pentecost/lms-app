import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import farmReducer from './slices/farmSlice';
import dataReducer from './slices/dataSlice';
import productReducer from './slices/productSlice';
import regionReducer from './slices/regionSlice';

const combinedReducer = combineReducers({
  authState: authReducer,
  farmState: farmReducer,
  dataState: dataReducer,
  productState: productReducer,
  regionState: regionReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logoutUser') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
