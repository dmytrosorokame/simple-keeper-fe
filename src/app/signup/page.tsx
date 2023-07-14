'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import { useSignUpMutation } from '@/api/auth.api';
import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import { INVALID_EMAIL_ERROR, INVALID_PASSWORD_ERROR } from '@/constants/errors.constants';
import { validateEmail } from '@/utils/validateEmail';
import { validatePassword } from '@/utils/validatePassword';

const SignUp: React.FC = () => {
  const [signUp] = useSignUpMutation();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);

  const isFormValid = useMemo(() => validateEmail(email) && validatePassword(password), [email, password]);

  const emailError = useMemo(
    () => (validateEmail(email) || !isEmailTouched ? null : INVALID_EMAIL_ERROR),
    [email, isEmailTouched],
  );
  const passwordError = useMemo(
    () => (validatePassword(password) || !isPasswordTouched ? null : INVALID_PASSWORD_ERROR),
    [password, isPasswordTouched],
  );

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);

    setIsEmailTouched(true);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);

    setIsPasswordTouched(true);
  };

  const handleEmailClear = (): void => {
    setEmail('');
  };

  const handlePasswordClear = (): void => {
    setPassword('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (!isFormValid) return;

    // eslint-disable-next-line no-console
    console.log('submit');

    const result = await signUp({ email, password });

    if ('error' in result) return;

    toast('You have successfully signed up!');

    router.push('/login');

    handleEmailClear();
    handlePasswordClear();

    setIsEmailTouched(false);
    setIsPasswordTouched(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <Input
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
          isCrossVisible={!!email}
          onCrossClick={handleEmailClear}
          error={emailError}
        />
      </div>

      <div className="mb-5">
        <Input
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
          isCrossVisible={!!password}
          onCrossClick={handlePasswordClear}
          error={passwordError}
          type="password"
        />
      </div>

      <Button disabled={!isFormValid} type="submit">
        signup
      </Button>

      <div className="mt-2">
        <p>
          Have an account? –{' '}
          <Link href="/login" className="underline">
            login
          </Link>
        </p>
      </div>
      <button
        onClick={() => {
          toast('You have successfully signed up!');
        }}
      >
        asd
      </button>
    </form>
  );
};

export default SignUp;
