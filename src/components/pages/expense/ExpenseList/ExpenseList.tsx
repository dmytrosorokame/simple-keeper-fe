import React from 'react';

import ExpenseItem from '@/components/pages/expense/ExpenseItem';
import { IExpense } from '@/types/expenses';

interface IExpenseListProps {
  expenses: IExpense[];
}

const ExpenseList: React.FC<IExpenseListProps> = ({ expenses }) => (
  <ul>
    {expenses.map((expense) => (
      <li className="mt-2" key={expense.id}>
        <ExpenseItem expense={expense} />
      </li>
    ))}
  </ul>
);

export default ExpenseList;
