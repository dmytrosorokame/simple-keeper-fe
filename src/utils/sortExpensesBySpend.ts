import { IExpense } from '@/types/expenses';

import { calculateTotalSpend } from './calculateTotalSpend';

export const sortExpensesBySpend = (firstExpenses: IExpense[], secondExpenses: IExpense[]): number => {
  const firstExpensesTotalSpend = calculateTotalSpend(firstExpenses);
  const secondExpensesTotalSpend = calculateTotalSpend(secondExpenses);

  return secondExpensesTotalSpend - firstExpensesTotalSpend;
};
