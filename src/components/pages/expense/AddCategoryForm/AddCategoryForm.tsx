import { Formik } from 'formik';
import React from 'react';

import Input from '@/components/shared/Input';
import LoadingButton from '@/components/shared/LoadingButton';
import { addCategoryValidationSchema } from '@/constants/validation/add-category.schema';
import { IAddCategoryFormValues } from '@/types/forms';

const initialValues: IAddCategoryFormValues = {
  name: '',
};

interface IAddCategoryFormProps {
  isLoading: boolean;
  onSubmit: (values: IAddCategoryFormValues) => Promise<void>;
}

const AddCategoryForm: React.FC<IAddCategoryFormProps> = ({ onSubmit, isLoading }) => (
  <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={addCategoryValidationSchema}>
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

        <LoadingButton type="submit" isLoading={isLoading}>
          add
        </LoadingButton>
      </form>
    )}
  </Formik>
);

export default AddCategoryForm;
