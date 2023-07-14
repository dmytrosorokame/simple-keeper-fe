import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TRootState } from '@/store/store';

type TAuthDto = {
  email: string;
  password: string;
};

type TSignUpResponse = {
  email: string;
  userId: number;
};

type TLoginResponse = {
  access_token: string;
};

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
    signUp: builder.mutation<TSignUpResponse, TAuthDto>({
      query: (dto) => ({
        url: '/auth/sign-up',
        method: 'POST',
        body: dto,
      }),
    }),
    login: builder.mutation<TLoginResponse, TAuthDto>({
      query: (dto) => ({
        url: '/auth/login',
        method: 'POST',
        body: dto,
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation } = authApi;
