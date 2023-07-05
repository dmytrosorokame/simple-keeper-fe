'use client';

import Link from 'next/link';
import React, { useMemo, useState } from 'react';

import Button from '@/components/shared/Button/Button';
import Input from '@/components/shared/Input/Input';
import { INVALID_EMAIL_ERROR, INVALID_PASSWORD_ERROR } from '@/constants/errors.constants';
import { validateEmail } from '@/utils/validateEmail';
import { validatePassword } from '@/utils/validatePassword';

const Login: React.FC = () => {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!isFormValid) return;

    // eslint-disable-next-line no-console
    console.log('submit');

    handleEmailClear();
    handlePasswordClear();

    setIsEmailTouched(false);
    setIsPasswordTouched(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="email"
        value={email}
        onChange={handleEmailChange}
        isCrossVisible={!!email}
        onCrossClick={handleEmailClear}
        error={emailError}
      />

      <Input
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
        isCrossVisible={!!password}
        onCrossClick={handlePasswordClear}
        error={passwordError}
        type="password"
      />

      <Button disabled={!isFormValid} type="submit">
        login
      </Button>

      <div className="mt-2">
        <p>
          Don't have an account? –{' '}
          <Link href="/signup" className="underline">
            signup
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
