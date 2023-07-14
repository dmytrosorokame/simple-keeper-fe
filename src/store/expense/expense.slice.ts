// Expense API slice
import { createSlice } from '@reduxjs/toolkit';

import { IExpense } from '@/types/expenses';

interface IExpenseState {
  expenses: IExpense[];
  loading: boolean;
  error: string | null;
}

const initialState: IExpenseState = {
  expenses: [],
  loading: false,
  error: null,
};

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    setExpenses(state, action) {
      state.expenses = action.payload;
    },
    addExpense(state, action) {
      state.expenses.push(action.payload);
    },
    removeExpense(state, action) {
      const index = state.expenses.findIndex((expense) => expense.id === action.payload);

      state.expenses.splice(index, 1);
    },
  },
});

export const { setExpenses, addExpense, removeExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
