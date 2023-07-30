'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';
import { toast } from 'react-toastify';

import { useCreateCategoryMutation } from '@/api/category.api';
import withAuth from '@/components/hocs/WithAuth';
import AddCategoryForm from '@/components/pages/expense/AddCategoryForm';
import Button from '@/components/shared/Button';
import { IAddCategoryFormValues } from '@/types/forms';

const AddCategory: React.FC = () => {
  const router = useRouter();

  const [createCategory, { isLoading }] = useCreateCategoryMutation();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  const handleSubmit = useCallback(
    async ({ name }: IAddCategoryFormValues): Promise<void> => {
      try {
        await createCategory({ name });

        toast('Category created successfully');

        handleBack();
      } catch (error) {
        toast('Something went wrong');
      }
    },
    [createCategory, handleBack],
  );

  return (
    <>
      <div className="mb-5">
        <AddCategoryForm isLoading={isLoading} onSubmit={handleSubmit} />
      </div>

      <Button type="button" onClick={handleBack} isOutlined>
        back
      </Button>
    </>
  );
};

export default withAuth(AddCategory);
