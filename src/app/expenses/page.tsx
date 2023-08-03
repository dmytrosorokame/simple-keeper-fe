'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

import { useGetAllExpensesQuery } from '../../api/expense.api';
import WithAuth from '../../components/hocs/WithAuth';
import ExpensesByMonthList from '../../components/pages/expense/ExpensesByMonthList';
import Button from '../../components/shared/Button';
import Loader from '../../components/shared/Loader';
import { Pages } from '../../constants/pages.constants';

const Expenses: React.FC = () => {
  const router = useRouter();

  const { data: expenses = [], isLoading, isFetching } = useGetAllExpensesQuery();

  const isShowLoader = isFetching || isLoading;

  const handleAdd = useCallback(() => {
    router.push(Pages.ADD_EXPENSE);
  }, [router]);

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <>
      <div className="mb-10">
        {isShowLoader ? <Loader className="w-10 h-10 m-auto" /> : <ExpensesByMonthList expenses={expenses} />}
      </div>

      <div className="mb-5">
        <Button onClick={handleAdd}>add</Button>
      </div>

      <Button onClick={handleBack} isOutlined>
        back
      </Button>
    </>
  );
};

export default WithAuth(Expenses);
