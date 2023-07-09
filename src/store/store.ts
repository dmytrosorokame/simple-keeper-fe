import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { authApi } from '@/api/auth.api';
import { categoryApi } from '@/api/category.api';
import { expenseApi } from '@/api/expense.api';

import popupReducer from './popup/popup.slice';

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    [authApi.reducerPath]: authApi.reducer,
    [expenseApi.reducerPath]: expenseApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, expenseApi.middleware, categoryApi.middleware),
});

export type TRootState = ReturnType<typeof store.getState>;

type TAppDispatch = typeof store.dispatch;

export const useAppDispatch = (): TAppDispatch => useDispatch<TAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
