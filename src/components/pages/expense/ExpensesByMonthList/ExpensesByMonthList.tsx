import Link from 'next/link';
import React, { useMemo } from 'react';

import { Pages } from '../../../../constants/pages.constants';
import { IExpense } from '../../../../types/expenses';
import { groupExpensesByMonth } from '../../../../utils/groupExpensesByMonth';
import ExpenseList from '../ExpenseList';

interface IExpensesByMonthListProps {
  expenses: IExpense[];
}

const ExpensesByMonthList: React.FC<IExpensesByMonthListProps> = ({ expenses }) => {
  const groupedByDateExpenses = useMemo(() => groupExpensesByMonth(expenses), [expenses]);

  const dates = useMemo(() => Object.keys(groupedByDateExpenses), [groupedByDateExpenses]);

  return (
    <>
      {dates.length ? (
        <ul>
          {dates.map((date) => {
            const pageHref = `${Pages.EXPENSES_ANALYTICS}?date=${date}`;

            return (
              <li className="mt-2" key={date}>
                <Link href={pageHref} className="mb-5 text-2xl underline">
                  {date}
                </Link>

                <ExpenseList expenses={groupedByDateExpenses[date]} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-center">No expenses!</p>
      )}
    </>
  );
};

export default ExpensesByMonthList;
