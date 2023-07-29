'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

import { useSignUpMutation } from '@/api/auth.api';
import AuthForm from '@/components/generic/AuthForm';
import { ISubmitAuthFormParams } from '@/components/generic/AuthForm/AuthForm';
import { setCredentials } from '@/store/auth/auth.slice';
import { useAppDispatch } from '@/store/store';
import { IError } from '@/types/error';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();

  const [signUp] = useSignUpMutation();
  const router = useRouter();

  const handleSubmit = async ({ values, reset }: ISubmitAuthFormParams): Promise<void> => {
    const result = await signUp(values);

    if ('error' in result) {
      const error = result.error as IError;

      toast(error.data.message);

      return;
    }

    dispatch(setCredentials(result.data));

    router.push('/');
    reset();
    toast('You registered successfully!');
  };

  return (
    <>
      <AuthForm onSubmit={handleSubmit} />

      <div className="mt-2">
        <p>
          Have an account? –{' '}
          <Link href="/login" className="underline">
            login
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
