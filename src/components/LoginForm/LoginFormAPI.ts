// // import {createApi} from "@reduxjs/toolkit/query";
// import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
//
// interface IUser {
//     id: number,
//     name: string,
//     contactName: string,
//     email: string,
//     // address: {
//     //     city: string,
//     //     street: string,
//     //     zipcode: string,
//     // },
//     phone: string,
// }
//
// // export interface LoginParams {
// //     name: string,
// //     password: string
// // }
//
// export const userApi = createApi({
//     reducerPath: 'userApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
//     endpoints: (builder) => ({
//         userLogin: builder.query<IUser, string>({
//             query: (name: string = "") => ({
//                 url: `users?`,
//                 params: {
//                     name,
//                     // password
//                 }
//             })
//         }),
//     }),
// })

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// // import type { Pokemon } from './types'
//
// // Define a service using a base URL and expected endpoints
// export const pokemonApi = createApi({
//     reducerPath: 'pokemonApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
//     endpoints: (builder) => {
//         return {
//             getPokemonByName: builder.query<IUser[], string>({
//                 query: (name) => `pokemon`,
//             }),
//         };
//     },
// })

// export const { useUserApiQuery } = userApi;
export {}
