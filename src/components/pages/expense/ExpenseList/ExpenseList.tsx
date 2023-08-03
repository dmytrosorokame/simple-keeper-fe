import React from 'react';

import { IExpense } from '../../../../types/expenses';
import ExpenseItem from '../ExpenseItem';

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
