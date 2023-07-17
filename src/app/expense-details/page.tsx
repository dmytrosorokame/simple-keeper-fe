'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';

const ExpenseDetails: React.FC = () => {
  const searchParams = useSearchParams();

  const expenseId = searchParams.get('expenseId');

  return <div>{expenseId}</div>;
};

export default ExpenseDetails;
