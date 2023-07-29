'use client';

import { Formik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { useCreateCategoryMutation } from '@/api/category.api';
import withAuth from '@/components/hocs/WithAuth';
import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import LoadingButton from '@/components/shared/LoadingButton';
import { addCategoryValidationSchema } from '@/constants/validation/add-category.schema';

interface IAddCategoryFormValues {
  name: string;
}

const AddCategory: React.FC = () => {
  const router = useRouter();

  const [createCategory] = useCreateCategoryMutation();

  const [isLoading, setIsLoading] = useState(false);

  const initialValues: IAddCategoryFormValues = {
    name: '',
  };

  const handleSubmit = async ({ name }: IAddCategoryFormValues): Promise<void> => {
    setIsLoading(true);

    try {
      await createCategory({ name });

      toast('Category created successfully');

      router.back();
    } catch (error) {
      toast('Something went wrong');
    }

    setIsLoading(false);
  };

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={addCategoryValidationSchema}>
      {({ values, handleChange, setFieldValue, handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <Input
              placeholder="name"
              value={values.name}
              onChange={handleChange('name')}
              isCrossVisible={!!values.name}
              onCrossClick={() => setFieldValue('name', '')}
              error={errors.name && touched.name ? errors.name : null}
            />
          </div>

          <div className="mb-5">
            <LoadingButton type="submit" isLoading={isLoading}>
              add
            </LoadingButton>
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
