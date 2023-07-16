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

  const [create] = useCreateCategoryMutation();

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
      await create({ name });

      router.push('/categories');
      handleNameClear();

      toast('Category created successfully');
    } catch (error) {
      toast(error.message || 'Something went wrong');
    }
  };

  const handleBack = useCallback(() => {
    router.push('/');
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

      <Button onClick={handleBack} isOutlined>
        back
      </Button>
    </form>
  );
};

export default withAuth(AddCategory);
