import { DEFAULT_CATEGORY_NAME } from '../constants/category.constants';
import { IExpense, TExpensesByCategory } from '../types/expenses';

export const groupExpensesByCategory = (expenses: IExpense[]): TExpensesByCategory => {
  const categorySpend: TExpensesByCategory = {};

  for (const expense of expenses) {
    const categoryName = expense.category?.name || DEFAULT_CATEGORY_NAME;

    if (!categorySpend[categoryName]) {
      categorySpend[categoryName] = [];
    }

    categorySpend[categoryName].push(expense);
  }

  return categorySpend;
};
