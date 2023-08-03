'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';
import { toast } from 'react-toastify';

import { useDeleteExpenseMutation, useGetExpenseByIdQuery } from '../../api/expense.api';
import WithAuth from '../../components/hocs/WithAuth';
import ExpenseDetails from '../../components/pages/expense/ExpenseDetails';
import Button from '../../components/shared/Button';
import Loader from '../../components/shared/Loader';
import LoadingButton from '../../components/shared/LoadingButton';
import { showPopup } from '../../store/popup/popup.slice';
import { useAppDispatch } from '../../store/store';
import { Popup } from '../../types/popup';

const ExpenseDetailsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const expenseId = searchParams.get('expenseId');

  const { data: expense, isLoading, isFetching } = useGetExpenseByIdQuery(Number(expenseId));
  const [deleteExpense, { isLoading: isDeleting }] = useDeleteExpenseMutation();

  const isShowLoader = isLoading || isFetching;

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  const handleDelete = useCallback((): void => {
    if (!expense) return;

    dispatch(
      showPopup({
        popup: Popup.SUBMIT,
        data: {
          onConfirm: async () => {
            try {
              await deleteExpense(expense.id);

              toast('Expense deleted successfully!');

              handleBack();
            } catch (error) {
              toast('Something went wrong!');
            }
          },
        },
      }),
    );
  }, [deleteExpense, dispatch, expense, handleBack]);

  return (
    <>
      <div className="mb-5">
        {isShowLoader && <Loader className="m-auto mt-5 mb-5 w-10 h-10" />}

        {expense && <ExpenseDetails expense={expense} />}
      </div>

      <div className="mb-3">
        <LoadingButton onClick={handleDelete} isOutlined isLoading={isDeleting}>
          delete
        </LoadingButton>
      </div>

      <Button onClick={handleBack}>back</Button>
    </>
  );
};

export default WithAuth(ExpenseDetailsPage);
