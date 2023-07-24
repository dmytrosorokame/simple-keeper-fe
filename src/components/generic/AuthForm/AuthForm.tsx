import { Formik, FormikHelpers } from 'formik';
import React from 'react';

import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import { authValidationSchema } from '@/constants/validation/auth.schema';
import { IAuthDto } from '@/types/auth';

interface IAuthFormValues {
  email: string;
  password: string;
}

export interface ISubmitAuthFormParams {
  values: IAuthDto;
  reset: () => void;
}

interface IAuthFormProps {
  onSubmit: (data: ISubmitAuthFormParams) => void;
  buttonLabel?: string;
}

const AuthForm: React.FC<IAuthFormProps> = ({ onSubmit, buttonLabel = 'signup' }) => {
  const initialValues: IAuthFormValues = {
    email: '',
    password: '',
  };

  const handleSubmit = ({ email, password }: IAuthFormValues, { resetForm }: FormikHelpers<IAuthFormValues>): void => {
    onSubmit({ values: { email, password }, reset: resetForm });
  };

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

          <Button type="submit">{buttonLabel}</Button>
        </form>
      )}
    </Formik>
  );
};

export default AuthForm;
