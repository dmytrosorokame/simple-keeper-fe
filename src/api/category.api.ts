import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICategory } from '@/types/categories';

interface ICreateCategoryDto {
  name: string;
}

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_PATH,
  }),
  endpoints: (builder) => ({
    createCategory: builder.mutation<ICategory, ICreateCategoryDto>({
      query: (dto) => ({
        url: '/category',
        method: 'POST',
        body: dto,
      }),
    }),

    getAllCategories: builder.query<ICategory[], void>({
      query: () => '/category',
    }),

    deleteCategory: builder.mutation<ICategory, number>({
      query: (id) => ({
        url: `/category/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});
