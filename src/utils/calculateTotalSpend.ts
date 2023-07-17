import { IExpense } from '@/types/expenses';

export const calculateTotalSpend = (expenses: IExpense[]): number => {
  return expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);
};
