'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';
import { toast } from 'react-toastify';

import { useCreateExpenseMutation } from '../../api/expense.api';
import WithAuth from '../../components/hocs/WithAuth';
import AddExpenseForm from '../../components/pages/expense/AddExpenseForm';
import Button from '../../components/shared/Button';
import { IAddExpenseFormValues } from '../../types/forms';

const AddExpense: React.FC = () => {
  const router = useRouter();

  const [createExpense, { isLoading }] = useCreateExpenseMutation();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  const handleSubmit = useCallback(
    async ({ amount, categoryOption, name, comment }: IAddExpenseFormValues): Promise<void> => {
      try {
        const categoryId = categoryOption?.value ? Number(categoryOption.value) : null;

        const expenseData = {
          amount,
          categoryId,
          name: name || null,
          comment: comment || null,
        };

        await createExpense(expenseData);

        toast('Expense created successfully');

        handleBack();
      } catch (error) {
        toast('Something went wrong');
      }
    },
    [createExpense, handleBack],
  );

  return (
    <>
      <div className="mb-5">
        <AddExpenseForm isLoading={isLoading} onSubmit={handleSubmit} />
      </div>

      <Button type="button" onClick={handleBack} isOutlined>
        back
      </Button>
    </>
  );
};

export default WithAuth(AddExpense);
