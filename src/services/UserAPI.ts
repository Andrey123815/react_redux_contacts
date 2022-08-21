import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IUser} from "../configurations/User";

interface ILoginInfo {
    email: string,
    password: string
}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        loginUser: builder.mutation<IUser[], ILoginInfo>({
            query: ({email, password}) => ({
                url: 'users/',
                params: {
                    email,
                    password
                }
            }),

            transformResponse: (response: IUser[]) => response,
        }),
    }),
})

export const { useLoginUserMutation } = userApi;
