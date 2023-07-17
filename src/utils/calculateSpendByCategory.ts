import { TExpensesByCategory, TSpendByCategory } from '@/types/expenses';

import { calculateTotalSpend } from './calculateTotalSpend';

export const calculateSpendByCategory = (expensesByCategory: TExpensesByCategory): TSpendByCategory => {
  const spendByCategory: TSpendByCategory = {};

  for (const [categoryName, expenses] of Object.entries(expensesByCategory)) {
    const totalSpend = calculateTotalSpend(expenses);

    spendByCategory[categoryName] = totalSpend;
  }

  return spendByCategory;
};
