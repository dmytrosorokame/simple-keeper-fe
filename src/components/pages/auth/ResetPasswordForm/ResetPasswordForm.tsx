import { Formik } from 'formik';
import React from 'react';

import Input from '@/components/shared/Input';
import LoadingButton from '@/components/shared/LoadingButton/LoadingButton';
import { resetPasswordValidationSchema } from '@/constants/validation/reset-password.schema';
import { IResetPasswordFormValues } from '@/types/forms';

const initialValues: IResetPasswordFormValues = {
  email: '',
};

interface IResetPasswordFormProps {
  onSubmit: (values: IResetPasswordFormValues) => void;
  isLoading: boolean;
}

const ResetPasswordForm: React.FC<IResetPasswordFormProps> = ({ onSubmit, isLoading }) => (
  <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={resetPasswordValidationSchema}>
    {({ values, handleChange, setFieldValue, handleSubmit, errors, touched }) => (
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <Input
            placeholder="email"
            value={values.email}
            onChange={handleChange('email')}
            isCrossVisible={!!values.email}
            onCrossClick={() => setFieldValue('email', '')}
            error={errors.email && touched.email ? errors.email : null}
          />
        </div>

        <LoadingButton type="submit" isLoading={isLoading}>
          reset
        </LoadingButton>
      </form>
    )}
  </Formik>
);

export default ResetPasswordForm;
