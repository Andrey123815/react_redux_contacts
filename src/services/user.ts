import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface IUser {
    name: string
}

interface ILoginInfo {
    email: string,
    password: string
}

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        loginUser: builder.mutation<IUser, ILoginInfo>({
            query: ({email, password}) => ({
                url: 'users/',
                params: {
                    email,
                    password
                }
            })
        }),
    }),
})

export const { useLoginUserMutation } = userApi;
