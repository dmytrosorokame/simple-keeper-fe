import React, { useMemo } from 'react';
import { Doughnut as Chart } from 'react-chartjs-2';

import { TExpensesByCategory } from '../../../../types/expenses';
import { calculateSpendByCategory } from '../../../../utils/calculateSpendByCategory';
import { generateRandomColor } from '../../../../utils/generateRandomColor';

interface IExpensesChartProps {
  expensesByCategory: TExpensesByCategory;
}

const ExpensesChart: React.FC<IExpensesChartProps> = ({ expensesByCategory }) => {
  const labels = useMemo(() => Object.keys(expensesByCategory), [expensesByCategory]);
  const backgroundColor = useMemo(() => labels.map(() => generateRandomColor()), [labels]);

  const spendByCategory = useMemo(() => calculateSpendByCategory(expensesByCategory), [expensesByCategory]);

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          data: Object.values(spendByCategory),
          backgroundColor,
          hoverBackgroundColor: backgroundColor,
        },
      ],
    }),
    [labels, spendByCategory, backgroundColor],
  );

  return <Chart data={data} />;
};

export default ExpensesChart;
