import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63924964ac688bbe4c60c1b4.mockapi.io',
  }),
  tagTypes:['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact']
    }),
    addContact: builder.mutation({
        query:(values)=> ({
            url: '/contacts',
            method: 'POST',
            body: values,

        })
    })
  }),
});

export const { useFetchContactsQuery } = contactApi;
