'use client';

import { useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';

import { useGetAllExpensesQuery } from '@/api/expense.api';
import withAuth from '@/components/hocs/WithAuth';
import { groupExpensesByMonth } from '@/utils/groupExpensesByMonth';

const ExpensesAnalytics: React.FC = () => {
  const { data: expenses = [] } = useGetAllExpensesQuery();

  const groupedByDateExpenses = useMemo(() => groupExpensesByMonth(expenses), [expenses]);

  const searchParams = useSearchParams();
  const expensesDate = searchParams.get('date') as string;

  const expensesForDate = groupedByDateExpenses[expensesDate];

  return <div></div>;
};

export default withAuth(ExpensesAnalytics);
