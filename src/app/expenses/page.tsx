'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

import ExpenseList from '@/components/pages/expense/ExpenseList';
import Button from '@/components/shared/Button';
import { IExpense } from '@/types/expenses';

const expenses: IExpense[] = [
  {
    id: '1',
    name: 'test',
    amount: 100,
    date: new Date().toISOString(),
    categoryId: 1,
  },
  {
    id: '2',
    name: 'test',
    amount: 100,
    date: new Date().toISOString(),
    categoryId: 3,
  },
  {
    id: '3',
    name: 'test',
    amount: 100,
    date: new Date().toISOString(),
    categoryId: 2,
  },
];

const Page: React.FC = () => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <>
      <div className="mb-10">
        <ExpenseList expenses={expenses} />
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

export default Page;
