import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { persistContacts } from './contactsSlice';
import { contactApi } from './contactsApi';

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});


setupListeners(store.dispatch);
