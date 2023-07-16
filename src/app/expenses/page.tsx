'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

import { useGetAllExpensesQuery } from '@/api/expense.api';
import withAuth from '@/components/hocs/WithAuth';
import ExpensesByMonthList from '@/components/pages/expense/ExpensesByMonthList';
import Button from '@/components/shared/Button';

const Expenses: React.FC = () => {
  const { data: expenses = [] } = useGetAllExpensesQuery();

  const router = useRouter();

  const handleBack = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <>
      <div className="mb-10">
        <ExpensesByMonthList expenses={expenses} />
      </div>

      <div className="mb-5">
        <Button>show all</Button>
      </div>

      <Button onClick={handleBack} isOutlined>
        back
      </Button>
    </>
  );
};

export default withAuth(Expenses);
