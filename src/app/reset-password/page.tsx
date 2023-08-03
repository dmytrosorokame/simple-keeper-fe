'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';
import { toast } from 'react-toastify';

import { useResetPasswordMutation } from '../../api/auth.api';
import ResetPasswordForm from '../../components/pages/auth/ResetPasswordForm';
import { Pages } from '../../constants/pages.constants';
import { IError } from '../../types/error';
import { IResetPasswordFormValues } from '../../types/forms';

const ResetPassword: React.FC = () => {
  const router = useRouter();

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const handleSubmit = useCallback(
    async ({ email }: IResetPasswordFormValues): Promise<void> => {
      const result = await resetPassword(email);

      const isError = 'error' in result;

      if (isError) {
        const error = result.error as IError;
        const errorMessage = error.data.message;

        toast(errorMessage);

        return;
      }

      toast('Check your email to reset password!');

      router.push(Pages.LOGIN);
    },
    [resetPassword, router],
  );

  return (
    <>
      <ResetPasswordForm onSubmit={handleSubmit} isLoading={isLoading} />

      <div className="mt-2">
        <p>
          Remember your password? –{' '}
          <Link href={Pages.LOGIN} className="underline">
            login
          </Link>
        </p>
      </div>
    </>
  );
};

export default ResetPassword;
