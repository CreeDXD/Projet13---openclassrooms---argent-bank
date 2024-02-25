// updateSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  lastName: null,
  firstName: null,
  isEditPannelVisible: false,
  isNameUpdated:false,
};

const getAndEditProfile = createSlice({
  name: 'getinfo',
  initialState,
  reducers: {
    getInformation: (state, action) => {
      const { lastName,firstName,email } = action.payload;
      state.email = email;
      state.lastName = lastName;
      state.firstName = firstName;
    },   

    updateNames: (state, action) => {
      const { lastName, firstName } = action.payload;
      state.isEditPannelVisible = false;
      state.isNameUpdated = true
      state.lastName = lastName;
      state.firstName = firstName;
    },

    isEditing:(state) => {
        state.isEditPannelVisible = true
        state.isNameUpdated = false
    },

    cancelEditing:(state) => {
        state.isEditPannelVisible = false;
    }, 
  },
});

export const { getInformation, updateNames, isEditing, cancelEditing } = getAndEditProfile.actions;
export default getAndEditProfile.reducer;
