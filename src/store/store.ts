import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import popupReducer from './popup/popup.slice';

export const store = configureStore({
  reducer: {
    popup: popupReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;

type TAppDispatch = typeof store.dispatch;

export const useAppDispatch = (): TAppDispatch => useDispatch<TAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
