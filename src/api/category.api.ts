import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICategory } from '@/types/categories';

interface ICreateCategoryDto {
  name: string;
}

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_API_PATH,
  }),
  endpoints: (builder) => ({
    createCategory: builder.mutation<ICategory, ICreateCategoryDto>({
      query: (createCategoryDto) => ({
        url: '/category',
        method: 'POST',
        body: createCategoryDto,
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

export const { useCreateCategoryMutation, useGetAllCategoriesQuery, useDeleteCategoryMutation } = categoryApi;
