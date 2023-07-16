import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TRootState } from '@/store/store';
import { ICategory } from '@/types/categories';

interface ICreateCategoryDto {
  name: string;
}

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
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

export const { useCreateCategoryMutation, useGetAllCategoriesQuery, useDeleteCategoryMutation } = categoryApi;
