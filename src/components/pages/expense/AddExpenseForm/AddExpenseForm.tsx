import { Formik } from 'formik';
import React, { useMemo } from 'react';

import { useGetAllCategoriesQuery } from '../../../../api/category.api';
import { DEFAULT_CATEGORY_OPTION } from '../../../../constants/category.constants';
import { addExpenseValidationSchema } from '../../../../constants/validation/add-expense.schema';
import { IAddExpenseFormValues } from '../../../../types/forms';
import { prepareCategoriesOptions } from '../../../../utils/prepareCategoriesOptions';
import Input from '../../../shared/Input';
import LoadingButton from '../../../shared/LoadingButton';
import Select from '../../../shared/Select';

const initialValues: IAddExpenseFormValues = {
  amount: 0,
  categoryOption: DEFAULT_CATEGORY_OPTION,
  name: '',
  comment: '',
};

interface IAddExpenseFormProps {
  isLoading: boolean;
  onSubmit: (values: IAddExpenseFormValues) => Promise<void>;
}

const AddExpenseForm: React.FC<IAddExpenseFormProps> = ({ isLoading, onSubmit }) => {
  const { data: categories = [] } = useGetAllCategoriesQuery();

  const categoriesOptions = useMemo(() => prepareCategoriesOptions(categories), [categories]);

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={addExpenseValidationSchema}>
      {({ values, handleChange, setFieldValue, handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <Input
              placeholder="amount"
              value={values.amount}
              onChange={handleChange('amount')}
              isCrossVisible={!!values.amount}
              onCrossClick={() => setFieldValue('amount', 0)}
              error={errors.amount && touched.amount ? errors.amount : null}
              type="number"
              min={0}
            />
          </div>

          <div className="mb-5">
            <Select
              options={categoriesOptions}
              selectedOption={values.categoryOption}
              onChange={(newCategoryOption) => {
                setFieldValue('categoryOption', newCategoryOption);
              }}
            />
          </div>

          <div className="mb-5">
            <Input
              placeholder="name?"
              value={values.name}
              onChange={handleChange('name')}
              isCrossVisible={!!values.name}
              onCrossClick={() => setFieldValue('name', '')}
            />
          </div>

          <div className="mb-5">
            <Input
              placeholder="comment?"
              value={values.comment}
              onChange={handleChange('comment')}
              isCrossVisible={!!values.comment}
              onCrossClick={() => setFieldValue('comment', '')}
            />
          </div>

          <LoadingButton type="submit" isLoading={isLoading}>
            add
          </LoadingButton>
        </form>
      )}
    </Formik>
  );
};

export default AddExpenseForm;
