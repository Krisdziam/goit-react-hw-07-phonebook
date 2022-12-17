import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { filter: '' },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});



export const {

  filterContacts,
} = contactsSlice.actions;




export const getContactSelector = state =>
  state.contacts.contacts;
