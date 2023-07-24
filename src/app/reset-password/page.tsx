'use client';

import { Formik } from 'formik';
import Link from 'next/link';
import React from 'react';

import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import { resetPasswordValidationSchema } from '@/constants/validation/reset-password.schema';

interface IResetPasswordFormValues {
  email: string;
}

const ResetPassword: React.FC = () => {
  const initialValues: IResetPasswordFormValues = {
    email: '',
  };

  const handleSubmit = (values: IResetPasswordFormValues): void => {
    // eslint-disable-next-line no-console
    console.log({ values });
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={resetPasswordValidationSchema}>
      {({ values, handleChange, setFieldValue, handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <Input
              placeholder="email"
              value={values.email}
              onChange={handleChange('values')}
              isCrossVisible={!!values.email}
              onCrossClick={() => setFieldValue('email', '')}
              error={errors.email && touched.email ? errors.email : null}
            />
          </div>

          <Button type="submit">reset</Button>

          <div className="mt-2">
            <p>
              Remember your password? –{' '}
              <Link href="/login" className="underline">
                login
              </Link>
            </p>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ResetPassword;
