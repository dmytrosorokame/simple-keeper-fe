import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import { TSpendByCategory } from '@/types/expenses';
import { generateRandomColor } from '@/utils/generateRandomColor';

interface IExpensesChartProps {
  spendByCategory: TSpendByCategory;
}

const ExpensesChart: React.FC<IExpensesChartProps> = ({ spendByCategory }) => {
  const labels = Object.keys(spendByCategory);
  const backgroundColor = labels.map(() => generateRandomColor());

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
