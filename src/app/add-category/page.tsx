'use client';

import { Formik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';
import { toast } from 'react-toastify';

import { useCreateCategoryMutation } from '@/api/category.api';
import withAuth from '@/components/hocs/WithAuth';
import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';

interface IAddCategoryFormValues {
  name: string;
}

const AddCategory: React.FC = () => {
  const router = useRouter();

  const [createCategory] = useCreateCategoryMutation();

  const initialValues: IAddCategoryFormValues = {
    name: '',
  };

  const handleSubmit = async ({ name }: IAddCategoryFormValues): Promise<void> => {
    try {
      await createCategory({ name });

      toast('Category created successfully');

      router.back();
    } catch (error) {
      toast('Something went wrong');
    }
  };

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      {({ values, handleChange, setFieldValue, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <Input
              placeholder="name"
              value={values.name}
              onChange={handleChange('name')}
              isCrossVisible={!!values.name}
              onCrossClick={() => setFieldValue('name', '')}
            />
          </div>

          <div className="mb-5">
            <Button type="submit">add</Button>
          </div>

          <Button type="button" onClick={handleBack} isOutlined>
            back
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default withAuth(AddCategory);
