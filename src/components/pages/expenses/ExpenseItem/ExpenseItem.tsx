import React from 'react';

import { IExpense } from '@/types/expenses';
import { formatDate } from '@/utils/date';

const EXPENSES: Record<number, string> = {
  1: 'Food',
  2: 'Transport',
  3: 'Entertainment',
  4: 'Health',
  5: 'Other',
};

interface IExpenseItemProps {
  expense: IExpense;
}

const ExpenseItem: React.FC<IExpenseItemProps> = ({ expense }) => {
  const formattedDate = formatDate(expense.date);

  const category = EXPENSES[expense.categoryId];

  return (
    <div className="flex justify-between pb-2 border-b-black border-b-2">
      <p className="w-1/3">{expense.amount}</p>

      <p className="w-1/3 text-center">{category}</p>

      <p className="w-1/3 text-right">{formattedDate}</p>
    </div>
  );
};

export default ExpenseItem;
