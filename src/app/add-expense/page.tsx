'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import { useGetAllCategoriesQuery } from '@/api/category.api';
import { useCreateExpenseMutation } from '@/api/expense.api';
import withAuth from '@/components/hocs/WithAuth';
import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import Select from '@/components/shared/Select';
import { ISelectOption } from '@/types/common';

const AddExpense: React.FC = () => {
  const [createExpense] = useCreateExpenseMutation();
  const { data: categories = [] } = useGetAllCategoriesQuery();

  const categoriesOptions = useMemo(
    () =>
      categories.map((category) => ({
        value: category.id,
        label: category.name,
      })),
    [categories],
  );

  const router = useRouter();

  const [amount, setAmount] = useState(0);
  const [categoryOption, setCategoryOption] = useState<ISelectOption | null>(null);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAmount(Number(event.target.value));
  };

  const handleCategoryChange = (newCategoryOption: ISelectOption): void => {
    setCategoryOption(newCategoryOption);
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    try {
      await createExpense({ amount, categoryId: (categoryOption?.value as number) || 1, name, comment });

      router.back();

      handleAmountClear();
      handleNameClear();
      handleCommentClear();

      toast('Expense created successfully');
    } catch (error) {
      toast('Something went wrong');
    }
  };

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

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
        <Select options={categoriesOptions} selectedOption={categoryOption} onChange={handleCategoryChange} />
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

      <div className="mb-5">
        <Button type="submit">add</Button>
      </div>

      <Button type="button" onClick={handleBack} isOutlined>
        back
      </Button>
    </form>
  );
};

export default withAuth(AddExpense);
