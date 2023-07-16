import React, { useMemo } from 'react';

import { useGetAllCategoriesQuery } from '@/api/category.api';
import { IExpense } from '@/types/expenses';
import { formatDate } from '@/utils/date';

interface IExpenseItemProps {
  expense: IExpense;
}

const ExpenseItem: React.FC<IExpenseItemProps> = ({ expense }) => {
  const { data: categories } = useGetAllCategoriesQuery();

  const category = useMemo(() => {
    const category = categories?.find((category) => category.id === expense.categoryId);

    return category ? category.name : '';
  }, [categories, expense]);

  const formattedDate = formatDate(expense.createdAt);

  return (
    <div className="flex justify-between pb-2 border-b-black border-b-2">
      <p className="w-1/3">{expense.amount}</p>

      <p className="w-1/3 text-center">{category}</p>

      <p className="w-1/3 text-right">{formattedDate}</p>
    </div>
  );
};

export default ExpenseItem;
