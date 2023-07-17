import { DEFAULT_CATEGORY } from '@/constants/category';
import { IExpense, TExpensesByCategory } from '@/types/expenses';

export const groupExpensesByCategory = (expenses: IExpense[]): TExpensesByCategory => {
  const categorySpend: TExpensesByCategory = {};

  for (const expense of expenses) {
    const categoryName = expense.category?.name || DEFAULT_CATEGORY;

    if (!categorySpend[categoryName]) {
      categorySpend[categoryName] = [];
    }

    categorySpend[categoryName].push(expense);
  }

  return categorySpend;
};
