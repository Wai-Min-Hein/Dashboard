import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const AuthApi = createApi({
    reducerPath: 'AuthApi',
    tagTypes:['auth'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://contact-app.mmsdev.site/api/v1' }),
    endpoints: (builder) => ({
      login: builder.mutation({
        query: (user) => ({
            url: `/login`,
            method: 'POST',
            body:user
          }),
          invalidatesTags:['auth']
      }),
      register: builder.mutation({
        query: (user) => ({
            url: `/register`,
            method: 'POST',
            body:user
          }),
          invalidatesTags:['auth']
      }),
      logout: builder.mutation({
        query: (token) => ({
            url: `/user-logout`,
            method: 'POST',
            headers:{authorization: `Bearer ${token}`}

          }),
          invalidatesTags:['auth']
      }),
    }),
  })
  
  export const { useLoginMutation,useRegisterMutation,useLogoutMutation } = AuthApi