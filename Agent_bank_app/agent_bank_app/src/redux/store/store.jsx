// store.js
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../reducers/authSlice';
import getAndEditProfile from '../reducers/getAndEditProfileSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    getinfo: getAndEditProfile,
    

    // Add other reducers as needed
  },
});

export default store;
