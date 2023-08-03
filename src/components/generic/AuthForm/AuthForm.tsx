import { Formik, FormikHelpers } from 'formik';
import React, { useCallback } from 'react';

import { authValidationSchema } from '../../../constants/validation/auth.schema';
import { IAuthDto } from '../../../types/auth';
import Input from '../../shared/Input';
import LoadingButton from '../../shared/LoadingButton';
interface IAuthFormValues {
  email: string;
  password: string;
}

const initialValues: IAuthFormValues = {
  email: '',
  password: '',
};

export interface ISubmitAuthFormParams {
  values: IAuthDto;
  reset: () => void;
}

interface IAuthFormProps {
  onSubmit: (data: ISubmitAuthFormParams) => Promise<void>;
  buttonLabel?: string;
  isLoading: boolean;
}

const AuthForm: React.FC<IAuthFormProps> = ({ onSubmit, buttonLabel = 'signup', isLoading }) => {
  const handleSubmit = useCallback(
    async (values: IAuthFormValues, { resetForm: reset }: FormikHelpers<IAuthFormValues>): Promise<void> =>
      onSubmit({ values, reset }),

    [onSubmit],
  );

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={authValidationSchema}>
      {({ values, handleChange, handleSubmit, setFieldValue, errors, touched }) => (
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

          <div className="mb-5">
            <Input
              placeholder="password"
              value={values.password}
              onChange={handleChange('password')}
              isCrossVisible={!!values.password}
              onCrossClick={() => setFieldValue('password', '')}
              type="password"
              error={errors.password && touched.password ? errors.password : null}
            />
          </div>

          <LoadingButton isLoading={isLoading}>{buttonLabel}</LoadingButton>
        </form>
      )}
    </Formik>
  );
};

export default AuthForm;
