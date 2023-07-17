import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import { TExpensesByCategory } from '@/types/expenses';
import { calculateSpendByCategory } from '@/utils/calculateSpendByCategory';
import { generateRandomColor } from '@/utils/generateRandomColor';

interface IExpensesChartProps {
  expensesByCategory: TExpensesByCategory;
}

const ExpensesChart: React.FC<IExpensesChartProps> = ({ expensesByCategory }) => {
  const labels = Object.keys(expensesByCategory);
  const backgroundColor = labels.map(() => generateRandomColor());

  const spendByCategory = calculateSpendByCategory(expensesByCategory);

  const data = {
    labels,
    datasets: [
      {
        data: Object.values(spendByCategory),
        backgroundColor,
        hoverBackgroundColor: backgroundColor,
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default ExpensesChart;
