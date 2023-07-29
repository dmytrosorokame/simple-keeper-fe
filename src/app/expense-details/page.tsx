'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

import { useDeleteExpenseMutation, useGetExpenseByIdQuery } from '@/api/expense.api';
import WithAuth from '@/components/hocs/WithAuth';
import ExpenseDetails from '@/components/pages/expense/ExpenseDetails';
import Button from '@/components/shared/Button';
import Loader from '@/components/shared/Loader';
import LoadingButton from '@/components/shared/LoadingButton';
import { hidePopup, showPopup } from '@/store/popup/popup.slice';
import { useAppDispatch } from '@/store/store';
import { Popup } from '@/types/popup';

const ExpenseDetailsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const expenseId = searchParams.get('expenseId');

  const { data: expense, isLoading, isFetching } = useGetExpenseByIdQuery(Number(expenseId));

  const [deleteExpense, { isLoading: isDeleting }] = useDeleteExpenseMutation();

  const isShowLoader = isLoading || isFetching;

  const handleDeleteExpense = (): void => {
    if (!expense) return;

    dispatch(
      showPopup({
        popup: Popup.SUBMIT,
        data: {
          onCancel: () => {
            dispatch(hidePopup());
          },
          onConfirm: async () => {
            dispatch(hidePopup());

            try {
              await deleteExpense(expense.id);

              toast('Expense deleted successfully!');

              router.back();
            } catch (error) {
              toast('Something went wrong!');
            }
          },
        },
      }),
    );
  };

  const handleBack = (): void => {
    router.back();
  };

  return (
    <div>
      <div className="mb-5">
        {isShowLoader && (
          <div className="m-auto mt-5 mb-5 w-10 h-10">
            <Loader />
          </div>
        )}

        {expense && <ExpenseDetails expense={expense} />}
      </div>

      <div className="mb-3">
        <LoadingButton onClick={handleDeleteExpense} isOutlined isLoading={isDeleting}>
          delete
        </LoadingButton>
      </div>

      <Button onClick={handleBack}>back</Button>
    </div>
  );
};

export default WithAuth(ExpenseDetailsPage);
