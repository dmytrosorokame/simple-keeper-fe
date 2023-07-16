import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiTags } from '@/constants/apiTags.constants';
import { TRootState } from '@/store/store';
import { IExpense } from '@/types/expenses';

interface ICreateExpenseDto {
  amount: number;
  categoryId: number;
  name?: string;
  comment?: string;
}

export const expenseApi = createApi({
  reducerPath: 'expenseApi',

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_PATH,

    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as TRootState).auth.accessToken;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: [ApiTags.EXPENSE],

  endpoints: (builder) => ({
    createExpense: builder.mutation<IExpense, ICreateExpenseDto>({
      query: (dto) => ({
        url: '/expense',
        method: 'POST',
        body: dto,
      }),
      invalidatesTags: [ApiTags.EXPENSE],
    }),

    getAllExpenses: builder.query({
      query: () => '/expense',
      providesTags: [ApiTags.EXPENSE],
    }),

    deleteExpense: builder.mutation({
      query: (id) => ({
        url: `/expense/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [ApiTags.EXPENSE],
    }),
  }),
});

export const { useCreateExpenseMutation, useGetAllExpensesQuery, useDeleteExpenseMutation } = expenseApi;
