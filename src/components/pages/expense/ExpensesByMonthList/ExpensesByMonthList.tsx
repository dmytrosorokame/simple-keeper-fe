import Link from 'next/link';
import React, { useMemo } from 'react';

import ExpenseList from '@/components/pages/expense/ExpenseList';
import { IExpense } from '@/types/expenses';
import { groupExpensesByMonth } from '@/utils/groupExpensesByMonth';

interface IExpensesByMonthListProps {
  expenses: IExpense[];
}

const ExpensesByMonthList: React.FC<IExpensesByMonthListProps> = ({ expenses }) => {
  const groupedByDateExpenses = useMemo(() => groupExpensesByMonth(expenses), [expenses]);

  const dates = Object.keys(groupedByDateExpenses);

  return (
    <ul>
      {dates.map((date) => (
        <div className="mt-2" key={date}>
          <Link href={`/expenses-analytics?date=${date}`} className="mb-5 text-2xl underline">
            {date}
          </Link>

          <ExpenseList expenses={groupedByDateExpenses[date]} />
        </div>
      ))}
    </ul>
  );
};

export default ExpensesByMonthList;
