import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
  }),

  endpoints: (builder) => ({
    createExpense: builder.mutation<IExpense, ICreateExpenseDto>({
      query: (dto) => ({
        url: '/expense',
        method: 'POST',
        body: dto,
      }),
    }),

    getAllExpenses: builder.query({
      query: () => '/expense',
    }),

    deleteExpense: builder.mutation({
      query: (id) => ({
        url: `/expense/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});
