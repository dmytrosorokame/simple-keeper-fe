'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';

import { useGetExpenseByIdQuery } from '@/api/expense.api';

const ExpenseDetails: React.FC = () => {
  const searchParams = useSearchParams();

  const expenseId = searchParams.get('expenseId');

  const { data: expense } = useGetExpenseByIdQuery(Number(expenseId));

  return <div>{expense?.name}</div>;
};

export default ExpenseDetails;
