import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import farmReducer from './slices/farmSlice';

const combinedReducer = combineReducers({
  authState: authReducer,
  farmState: farmReducer,
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
