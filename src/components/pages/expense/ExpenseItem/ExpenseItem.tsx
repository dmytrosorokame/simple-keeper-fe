import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';

import { useGetAllCategoriesQuery } from '@/api/category.api';
import Loader from '@/components/shared/Loader';
import { DEFAULT_CATEGORY } from '@/constants/category';
import { Pages } from '@/constants/pages';
import { IExpense } from '@/types/expenses';
import { formatDate } from '@/utils/date';

interface IExpenseItemProps {
  expense: IExpense;
}

const ExpenseItem: React.FC<IExpenseItemProps> = ({ expense }) => {
  const router = useRouter();

  const { data: categories, isFetching, isLoading } = useGetAllCategoriesQuery();

  const isShowLoader = isFetching || isLoading;

  const category = useMemo(() => {
    const category = categories?.find((category) => category.id === expense.categoryId);

    return category?.name ?? DEFAULT_CATEGORY;
  }, [categories, expense]);

  const formattedDate = formatDate(expense.createdAt);

  const handleOpenDetails = (): void => {
    const route = `${Pages.EXPENSE_DETAILS}?expenseId=${expense.id}`;

    router.push(route);
  };

  return (
    <button className="flex w-full justify-between pb-2 border-b-black border-b-2" onClick={handleOpenDetails}>
      <p className="w-1/3 text-left">{expense.amount}</p>

      <p className="w-1/3 text-center">
        {isShowLoader ? (
          <div className="w-5 h-5 m-auto">
            <Loader />
          </div>
        ) : (
          category
        )}
      </p>

      <p className="w-1/3 text-right">{formattedDate}</p>
    </button>
  );
};

export default ExpenseItem;
