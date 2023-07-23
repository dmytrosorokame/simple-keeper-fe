import React from 'react';

interface IExpenseDetailProps {
  name: string;
  value: string | number;
}

const ExpenseDetail: React.FC<IExpenseDetailProps> = ({ name, value }) => (
  <div className="flex w-full justify-between pb-2 mt-2 border-b-black border-b-2">
    <p>{name}</p>

    <p>{value}</p>
  </div>
);

export default ExpenseDetail;
