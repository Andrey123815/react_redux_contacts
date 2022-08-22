import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IContact} from "../configurations/Contact";
import {IUser} from "../configurations/User";

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
        getContacts: builder.query<IContact[], number>({
            query: (id: number) => ({
                url: `/contacts`,
                params: {
                    contactOwnerID: id
                }
            }),
            providesTags: ['Contact'],
        }),
        getContact: builder.mutation<IContact[], number>({
            query: (id: number) => ({
                url: `/contacts`,
                params: {
                    id
                }
            }),
            invalidatesTags: ['Contact'],
        }),
        createContact: builder.mutation<IUser[], IContact>({
            query: (contact) => ({
                url: `/contacts`,
                method: 'POST',
                body: contact
            }),
            invalidatesTags: ['Contact'],
        }),
        updateContact: builder.mutation<IUser[], IContact>({
            query: (contact) => ({
                url: `/contacts/${contact.id}`,
                method: 'PUT',
                body: contact
            }),
            invalidatesTags: ['Contact'],
        }),
        deleteContact: builder.mutation<IUser[], number>({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Contact'],
        }),
    }),
})

export const {
    useGetContactMutation,
    useGetContactsQuery,
    useDeleteContactMutation,
    useCreateContactMutation,
    useUpdateContactMutation,
} = contactsApi;
