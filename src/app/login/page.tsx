'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

import { useLoginMutation } from '@/api/auth.api';
import AuthForm from '@/components/generic/AuthForm';
import { ISubmitAuthFormParams } from '@/components/generic/AuthForm/AuthForm';
import { setCredentials } from '@/store/auth/auth.slice';
import { useAppDispatch } from '@/store/store';
import { IError } from '@/types/error';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();
  const router = useRouter();

  const handleSubmit = async ({ values, reset }: ISubmitAuthFormParams): Promise<void> => {
    const result = await login(values);

    if ('error' in result) {
      const error = result.error as IError;

      toast(error.data.message);

      return;
    }

    dispatch(setCredentials(result.data));

    router.push('/');
    reset();
    toast('You logged in successfully!');
  };

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
