'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

import { useGetAllExpensesQuery } from '@/api/expense.api';
import withAuth from '@/components/hocs/WithAuth';
import ExpenseList from '@/components/pages/expense/ExpenseList';
import Button from '@/components/shared/Button';

const Expenses: React.FC = () => {
  const { data: expenses } = useGetAllExpensesQuery();

  const router = useRouter();

  const handleBack = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <>
      <div className="mb-10">
        {expenses ? (
          <ExpenseList expenses={expenses} />
        ) : (
          <p>
            No expenses, <Link href="/add-expense">create</Link> one
          </p>
        )}
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
