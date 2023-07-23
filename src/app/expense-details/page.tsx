'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

import { useGetExpenseByIdQuery } from '@/api/expense.api';
import WithAuth from '@/components/hocs/WithAuth';
import ExpenseDetails from '@/components/pages/expense/ExpenseDetails';
import Button from '@/components/shared/Button';
import Loader from '@/components/shared/Loader';

const ExpenseDetailsPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const expenseId = searchParams.get('expenseId');

  const { data: expense, isLoading, isFetching } = useGetExpenseByIdQuery(Number(expenseId));

  const isShowLoader = isLoading || isFetching;

  const handleBack = (): void => {
    router.back();
  };

  return (
    <div>
      <div className="mb-5">
        {isShowLoader && (
          <div className="flex justify-center m-5">
            <Loader />
          </div>
        )}

        {expense && <ExpenseDetails expense={expense} />}
      </div>

      <div className="mb-3">
        <Button onClick={handleBack} isOutlined>
          delete
        </Button>
      </div>

      <div className="mb-3">
        <Button onClick={handleBack} isOutlined>
          update
        </Button>
      </div>

      <Button onClick={handleBack}>back</Button>
    </div>
  );
};

export default WithAuth(ExpenseDetailsPage);
