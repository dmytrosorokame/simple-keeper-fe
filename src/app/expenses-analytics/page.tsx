'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useMemo } from 'react';

import { useGetAllExpensesQuery } from '../../api/expense.api';
import WithAuth from '../../components/hocs/WithAuth';
import ExpensesChart from '../../components/pages/expense/ExpensesChart';
import Button from '../../components/shared/Button';
import Loader from '../../components/shared/Loader';
import { calculateTotalSpend } from '../../utils/calculateTotalSpend';
import { groupExpensesByCategory } from '../../utils/groupExpensesByCategory';
import { groupExpensesByMonth } from '../../utils/groupExpensesByMonth';
import { sortExpensesBySpend } from '../../utils/sortExpensesBySpend';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensesAnalytics: React.FC = () => {
  const router = useRouter();

  const { data: expenses = [], isLoading, isFetching } = useGetAllExpensesQuery();

  const isShowLoader = isFetching || isLoading;

  const groupedByDateExpenses = useMemo(() => groupExpensesByMonth(expenses), [expenses]);

  const searchParams = useSearchParams();
  const expensesDate = searchParams.get('date') as string;

  const expensesForCurrentDate = groupedByDateExpenses[expensesDate] ?? [];

  const expensesByCategory = useMemo(() => groupExpensesByCategory(expensesForCurrentDate), [expensesForCurrentDate]);

  const totalSpend = useMemo(() => calculateTotalSpend(expensesForCurrentDate), [expensesForCurrentDate]);

  const expensesByCategoriesSortedByTotalSpend = useMemo(
    () =>
      Object.entries(expensesByCategory).sort(([, firstExpenses], [, secondExpenses]) =>
        sortExpensesBySpend(firstExpenses, secondExpenses),
      ),
    [expensesByCategory],
  );

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="pb-5">
      <h1 className="text-center mt-5 text-3xl mb-5">Expenses for {expensesDate}</h1>

      {isShowLoader ? (
        <Loader className="w-10 h-10 m-auto mb-5" />
      ) : (
        <>
          <div className="m-auto max-w-xs">
            <ExpensesChart expensesByCategory={expensesByCategory} />
          </div>

          <p className="text-center mt-2 text-xl">
            Total spend: <span className="font-semibold">{totalSpend}</span>
          </p>

          <div className="mt-10 mb-5">
            <h2 className="text-xl">Spend for each category: </h2>

            <ul className="mt-5">
              {expensesByCategoriesSortedByTotalSpend.map(([category, expenses]) => (
                <li key={category} className="flex justify-between border-b-2 border-black pb-2 mt-2">
                  <p>
                    {category} ({expenses.length})
                  </p>

                  <p>{calculateTotalSpend(expenses)}</p>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      <Button onClick={handleBack}>back</Button>
    </div>
  );
};

export default WithAuth(ExpensesAnalytics);
