import { IExpense } from '@/types/expenses';

export const groupExpensesByMonth = (expenses: IExpense[]): Record<string, IExpense[]> => {
  const groupedExpenses: Record<string, IExpense[]> = {};

  for (const expense of expenses) {
    const createdAt = new Date(expense.createdAt);
    const year = createdAt.getFullYear();
    const month = createdAt.toLocaleString('default', { month: 'long' });
    const key = `${month} ${year}`;

    if (!groupedExpenses[key]) {
      groupedExpenses[key] = [];
    }

    groupedExpenses[key].push(expense);
  }

  return groupedExpenses;
};
