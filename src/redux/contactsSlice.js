import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    filter: '',
  },
  reducers: {
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filter } = contactsSlice.actions;

export const getContactFilter = state =>
  state.contacts.filter;
