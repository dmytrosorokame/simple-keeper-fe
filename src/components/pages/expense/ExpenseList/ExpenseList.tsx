import React from 'react';

import ExpenseItem from '@/components/pages/expense/ExpenseItem';
import { IExpense } from '@/types/expenses';

interface IExpenseListProps {
  expenses: IExpense[];
}

const ExpenseList: React.FC<IExpenseListProps> = ({ expenses }) => (
  <>
    <div className="flex justify-between mb-7">
      <p>sum</p>

      <p>category</p>

      <p>date</p>
    </div>

    <ul>
      {expenses.map((expense) => (
        <div className="mt-2" key={expense.id}>
          <ExpenseItem expense={expense} />
        </div>
      ))}
    </ul>
  </>
);

export default ExpenseList;
