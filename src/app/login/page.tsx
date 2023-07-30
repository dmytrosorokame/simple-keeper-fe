'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';
import { toast } from 'react-toastify';

import { useLoginMutation } from '@/api/auth.api';
import AuthForm from '@/components/generic/AuthForm';
import { ISubmitAuthFormParams } from '@/components/generic/AuthForm/AuthForm';
import { Pages } from '@/constants/pages.constants';
import { setCredentials } from '@/store/auth/auth.slice';
import { useAppDispatch } from '@/store/store';
import { IError } from '@/types/error';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [login] = useLoginMutation();

  const handleSubmit = useCallback(
    async ({ values, reset }: ISubmitAuthFormParams): Promise<void> => {
      const result = await login(values);

      const isError = 'error' in result;

      if (isError) {
        const error = result.error as IError;
        const errorMessage = error.data.message;

        toast(errorMessage);

        return;
      }

      dispatch(setCredentials(result.data));

      router.push(Pages.MAIN);
      reset();
      toast('You logged in successfully!');
    },
    [dispatch, login, router],
  );

  return (
    <>
      <AuthForm onSubmit={handleSubmit} buttonLabel="login" />

      <div className="mt-2 flex justify-between">
        <p>
          Don't have an account? –{' '}
          <Link href="/signup" className="underline">
            signup
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
