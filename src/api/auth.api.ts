import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
    baseUrl: process.env.REACT_API_PATH,
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
