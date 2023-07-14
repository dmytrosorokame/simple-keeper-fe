import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TRootState } from '@/store/store';
import { IAuthDto, IAuthResponse } from '@/types/auth';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_PATH,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as TRootState).auth.accessToken;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation<IAuthResponse, IAuthDto>({
      query: (dto) => ({
        url: '/auth/sign-up',
        method: 'POST',
        body: dto,
      }),
    }),

    login: builder.mutation<IAuthResponse, IAuthDto>({
      query: (dto) => ({
        url: '/auth/login',
        method: 'POST',
        body: dto,
      }),
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'GET',
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation } = authApi;
