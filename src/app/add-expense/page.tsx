'use client';

import React, { useState } from 'react';

import Button from '@/components/shared/Button/Button';
import Input from '@/components/shared/Input/Input';
import Select from '@/components/shared/Select';

const AddExpense: React.FC = () => {
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('food');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAmount(Number(event.target.value));
  };

  const handleCategoryChange = (newCategory: string): void => {
    setCategory(newCategory);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setComment(event.target.value);
  };

  const handleAmountClear = (): void => {
    setAmount(0);
  };

  const handleNameClear = (): void => {
    setName('');
  };

  const handleCommentClear = (): void => {
    setComment('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // eslint-disable-next-line no-console
    console.log('submit');

    handleAmountClear();
    handleNameClear();
    handleCommentClear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <Input
          placeholder="amount"
          value={amount}
          onChange={handleAmountChange}
          isCrossVisible={!!amount}
          onCrossClick={handleAmountClear}
          type="number"
          min={0}
        />
      </div>

      <div className="mb-5">
        <Select options={['food', 'clothes']} value={category} onChange={handleCategoryChange} />
      </div>

      <div className="mb-5">
        <Input
          placeholder="name?"
          value={name}
          onChange={handleNameChange}
          isCrossVisible={!!name}
          onCrossClick={handleNameClear}
        />
      </div>

      <div className="mb-5">
        <Input
          placeholder="comment?"
          value={comment}
          onChange={handleCommentChange}
          isCrossVisible={!!comment}
          onCrossClick={handleCommentClear}
        />
      </div>

      <Button type="submit">add</Button>
    </form>
  );
};

export default AddExpense;
