'use client';

import Link from 'next/link';
import React, { useMemo, useState } from 'react';

import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import { INVALID_EMAIL_ERROR } from '@/constants/errors.constants';
import { validateEmail } from '@/utils/validateEmail';

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const isFormValid = useMemo(() => validateEmail(email), [email]);

  const emailError = useMemo(
    () => (validateEmail(email) || !isEmailTouched ? null : INVALID_EMAIL_ERROR),
    [email, isEmailTouched],
  );

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);

    setIsEmailTouched(true);
  };

  const handleEmailClear = (): void => {
    setEmail('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!isFormValid) return;

    // eslint-disable-next-line no-console
    console.log('submit');

    handleEmailClear();

    setIsEmailTouched(false);
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

      <Button disabled={!isFormValid} type="submit">
        reset
      </Button>

      <div className="mt-2">
        <p>
          Remember your password? –{' '}
          <Link href="/login" className="underline">
            login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default ResetPassword;
