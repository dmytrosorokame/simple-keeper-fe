import React, { useMemo } from 'react';

import { useGetAllCategoriesQuery } from '../../../../api/category.api';
import { DEFAULT_CATEGORY_NAME } from '../../../../constants/category.constants';
import { IExpense } from '../../../../types/expenses';
import { formatDate } from '../../../../utils/date';
import ExpenseDetail from '../ExpenseDetail';

interface IExpenseDetailsProps {
  expense: IExpense;
}

const ExpenseDetails: React.FC<IExpenseDetailsProps> = ({ expense }) => {
  const { data: categories } = useGetAllCategoriesQuery();

  const categoryName = useMemo(() => {
    const category = categories?.find((category) => category.id === expense?.categoryId);

    return category?.name ?? DEFAULT_CATEGORY_NAME;
  }, [categories, expense]);

  const formattedDate = useMemo(() => {
    return expense?.createdAt ? formatDate(expense.createdAt) : '';
  }, [expense]);

  return (
    <>
      <ExpenseDetail name="Amount" value={expense.amount} />

      <ExpenseDetail name="Category" value={categoryName} />

      <ExpenseDetail name="Created at" value={formattedDate} />

      {expense?.name && <ExpenseDetail name="Name" value={expense.name} />}

      {expense?.comment && <ExpenseDetail name="Comment" value={expense.comment} />}
    </>
  );
};

export default ExpenseDetails;
