'use client';

import { Formik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useCallback, useMemo } from 'react';
import { toast } from 'react-toastify';

import { useGetAllCategoriesQuery } from '@/api/category.api';
import { useCreateExpenseMutation } from '@/api/expense.api';
import withAuth from '@/components/hocs/WithAuth';
import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import Select from '@/components/shared/Select';
import { DEFAULT_CATEGORY_OPTION } from '@/constants/category';
import { ISelectOption } from '@/types/common';

interface IAddExpenseFormValues {
  amount: number;
  categoryOption: ISelectOption;
  name: string;
  comment: string;
}

const AddExpense: React.FC = () => {
  const router = useRouter();

  const [createExpense] = useCreateExpenseMutation();
  const { data: categories = [] } = useGetAllCategoriesQuery();

  const categoriesOptions = useMemo(
    () => [
      ...categories.map((category) => ({
        value: category.id,
        label: category.name,
      })),
      DEFAULT_CATEGORY_OPTION,
    ],
    [categories],
  );

  const initialValues: IAddExpenseFormValues = {
    amount: 0,
    categoryOption: DEFAULT_CATEGORY_OPTION,
    name: '',
    comment: '',
  };

  const handleSubmit = async ({ amount, categoryOption, name, comment }: IAddExpenseFormValues): Promise<void> => {
    try {
      await createExpense({
        amount,
        categoryId: categoryOption?.value ? Number(categoryOption.value) : null,
        name: name || null,
        comment: comment || null,
      });

      toast('Expense created successfully');

      router.back();
    } catch (error) {
      toast('Something went wrong');
    }
  };

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      {({ values, handleChange, setFieldValue, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <Input
              placeholder="amount"
              value={values.amount}
              onChange={handleChange('amount')}
              isCrossVisible={!!values.amount}
              onCrossClick={() => setFieldValue('amount', 0)}
              type="number"
              min={0}
            />
          </div>

          <div className="mb-5">
            <Select
              options={categoriesOptions}
              selectedOption={values.categoryOption}
              onChange={(newCategoryOption) => {
                setFieldValue('categoryOption', newCategoryOption);
              }}
            />
          </div>

          <div className="mb-5">
            <Input
              placeholder="name?"
              value={values.name}
              onChange={handleChange('name')}
              isCrossVisible={!!values.name}
              onCrossClick={() => setFieldValue('name', '')}
            />
          </div>

          <div className="mb-5">
            <Input
              placeholder="comment?"
              value={values.comment}
              onChange={handleChange('comment')}
              isCrossVisible={!!values.comment}
              onCrossClick={() => setFieldValue('comment', '')}
            />
          </div>

          <div className="mb-5">
            <Button type="submit">add</Button>
          </div>

          <Button type="button" onClick={handleBack} isOutlined>
            back
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default withAuth(AddExpense);
