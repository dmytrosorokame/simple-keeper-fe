// Category API slice
import { createSlice } from '@reduxjs/toolkit';

import { ICategory } from '@/types/categories';

interface ICategoryState {
  categories: ICategory[];
  loading: boolean;
  error: string | null;
}

const initialState: ICategoryState = {
  categories: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    addCategory(state, action) {
      state.categories.push(action.payload);
    },
    removeCategory(state, action) {
      const index = state.categories.findIndex((category) => category.id === action.payload);

      state.categories.splice(index, 1);
    },
  },
});

export const { setCategories, addCategory, removeCategory } = categorySlice.actions;

export default categorySlice.reducer;
