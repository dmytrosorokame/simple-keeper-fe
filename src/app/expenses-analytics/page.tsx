'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useMemo } from 'react';

import { useGetAllExpensesQuery } from '@/api/expense.api';
import withAuth from '@/components/hocs/WithAuth';
import ExpensesChart from '@/components/pages/expense/ExpensesChart';
import Button from '@/components/shared/Button';
import { calculateCategorySpend } from '@/utils/calculateCategorySpend';
import { calculateTotalSpend } from '@/utils/calculateTotalSpend';
import { groupExpensesByMonth } from '@/utils/groupExpensesByMonth';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensesAnalytics: React.FC = () => {
  const router = useRouter();

  const { data: expenses = [] } = useGetAllExpensesQuery();

  const groupedByDateExpenses = useMemo(() => groupExpensesByMonth(expenses), [expenses]);

  const searchParams = useSearchParams();
  const expensesDate = searchParams.get('date') as string;

  const expensesForCurrentDate = groupedByDateExpenses[expensesDate] ?? [];

  const spendByCategory = useMemo(() => calculateCategorySpend(expensesForCurrentDate), [expensesForCurrentDate]);

  const totalSpend = useMemo(() => calculateTotalSpend(expensesForCurrentDate), [spendByCategory]);

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div>
      <h1 className="text-center mt-5 text-3xl mb-5">Expenses for {expensesDate}</h1>

      <div className="flex justify-center">
        <div className="max-w-xs">
          <ExpensesChart spendByCategory={spendByCategory} />
        </div>
      </div>

      <p className="text-center mt-2">Total spend: {totalSpend}</p>

      <div className="mb-5">
        <h2 className="mt-5 text-lg mb-3">Spend for each category: </h2>

        <ul>
          {Object.entries(spendByCategory).map(([category, spend]) => (
            <li key={category} className="flex justify-between border-b-2 border-black pb-2 mt-2">
              <p>{category}</p>
              <p>{spend}</p>
            </li>
          ))}
        </ul>
      </div>

      <Button onClick={handleBack} isOutlined>
        back
      </Button>
    </div>
  );
};

export default withAuth(ExpensesAnalytics);
