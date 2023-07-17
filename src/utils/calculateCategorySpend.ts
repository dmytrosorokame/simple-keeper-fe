import { IExpense, TSpendByCategory } from '@/types/expenses';

export const calculateCategorySpend = (expenses: IExpense[]): TSpendByCategory => {
  const categorySpend: TSpendByCategory = {};

  expenses.forEach((expense) => {
    const categoryName = expense.category.name;
    const amount = expense.amount;

    if (categorySpend.hasOwnProperty(categoryName)) {
      categorySpend[categoryName] += amount;
    } else {
      categorySpend[categoryName] = amount;
    }
  });

  return categorySpend;
};
