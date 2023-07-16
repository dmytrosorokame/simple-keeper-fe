import React, { useMemo } from 'react';

import ExpenseList from '@/components/pages/expense/ExpenseList';
import { IExpense } from '@/types/expenses';
import { groupExpensesByMonth } from '@/utils/groupExpensesByMonth';

interface IExpensesByMonthListProps {
  expenses: IExpense[];
}

const ExpensesByMonthList: React.FC<IExpensesByMonthListProps> = ({ expenses }) => {
  const groupedByDateExpenses = useMemo(() => groupExpensesByMonth(expenses), [expenses]);

  const months = Object.keys(groupedByDateExpenses);

  return (
    <ul>
      {months.map((month) => (
        <div className="mt-2" key={month}>
          <p className="mb-5 text-2xl">{month}</p>

          <ExpenseList expenses={groupedByDateExpenses[month]} />
        </div>
      ))}
    </ul>
  );
};

export default ExpensesByMonthList;
