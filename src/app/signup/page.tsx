'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';
import { toast } from 'react-toastify';

import { useSignUpMutation } from '../../api/auth.api';
import AuthForm from '../../components/generic/AuthForm';
import { ISubmitAuthFormParams } from '../../components/generic/AuthForm/AuthForm';
import { Pages } from '../../constants/pages.constants';
import { setCredentials } from '../../store/auth/auth.slice';
import { useAppDispatch } from '../../store/store';
import { IError } from '../../types/error';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [signUp, { isLoading }] = useSignUpMutation();

  const handleSubmit = useCallback(
    async ({ values, reset }: ISubmitAuthFormParams): Promise<void> => {
      const result = await signUp(values);

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
      toast('You registered successfully!');
    },
    [dispatch, router, signUp],
  );

  return (
    <>
      <AuthForm onSubmit={handleSubmit} isLoading={isLoading} />

      <div className="mt-2">
        <p>
          Have an account? –{' '}
          <Link href={Pages.LOGIN} className="underline">
            login
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
