'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { useCreateCategoryMutation } from '@/api/category.api';
import withAuth from '@/components/hocs/WithAuth';
import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';

const AddCategory: React.FC = () => {
  const router = useRouter();

  const [createCategory] = useCreateCategoryMutation();

  const [name, setName] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleNameClear = (): void => {
    setName('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (!name) {
      return;
    }

    try {
      await createCategory({ name });

      router.back();

      handleNameClear();

      toast('Category created successfully');
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
          placeholder="name"
          value={name}
          onChange={handleNameChange}
          isCrossVisible={!!name}
          onCrossClick={handleNameClear}
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

export default withAuth(AddCategory);
