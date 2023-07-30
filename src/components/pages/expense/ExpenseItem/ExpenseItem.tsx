import { useRouter } from 'next/navigation';
import React, { useCallback, useMemo } from 'react';

import { useGetAllCategoriesQuery } from '@/api/category.api';
import Loader from '@/components/shared/Loader';
import { DEFAULT_CATEGORY_NAME } from '@/constants/category.constants';
import { Pages } from '@/constants/pages.constants';
import { IExpense } from '@/types/expenses';
import { formatDate } from '@/utils/date';

interface IExpenseItemProps {
  expense: IExpense;
}

const ExpenseItem: React.FC<IExpenseItemProps> = ({ expense }) => {
  const router = useRouter();

  const { data: categories, isFetching, isLoading } = useGetAllCategoriesQuery();

  const isShowLoader = isFetching || isLoading;

  const categoryName = useMemo(() => {
    const category = categories?.find((category) => category.id === expense.categoryId);

    return category?.name ?? DEFAULT_CATEGORY_NAME;
  }, [categories, expense]);

  const formattedDate = useMemo(() => formatDate(expense.createdAt), [expense]);

  const handleOpenDetails = useCallback((): void => {
    const route = `${Pages.EXPENSE_DETAILS}?expenseId=${expense.id}`;

    router.push(route);
  }, [expense, router]);

  return (
    <button className="flex w-full justify-between pb-2 border-b-black border-b-2" onClick={handleOpenDetails}>
      <p className="w-1/3 text-left">{expense.amount}</p>

      <p className="w-1/3 text-center">{isShowLoader ? <Loader className="w-5 h-5 m-auto" /> : categoryName}</p>

      <p className="w-1/3 text-right">{formattedDate}</p>
    </button>
  );
};

export default ExpenseItem;
