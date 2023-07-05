'use client';

import Link from 'next/link';
import React, { useMemo, useState } from 'react';

import Button from '@/components/shared/Button/Button';
import Input from '@/components/shared/Input/Input';
import Select from '@/components/shared/Select';
import { INVALID_PASSWORD_ERROR } from '@/constants/errors.constants';
import { validatePassword } from '@/utils/validatePassword';

const AddExpense: React.FC = () => {
  const [amount, setAmount] = useState(0);
  const [password, setPassword] = useState('');
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);

  const isFormValid = useMemo(() => validatePassword(password), [password]);

  const passwordError = useMemo(
    () => (validatePassword(password) || !isPasswordTouched ? null : INVALID_PASSWORD_ERROR),
    [password, isPasswordTouched],
  );

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);

    setIsPasswordTouched(true);
  };

  const handlePasswordClear = (): void => {
    setPassword('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!isFormValid) return;

    // eslint-disable-next-line no-console
    console.log('submit');

    handlePasswordClear();

    setIsPasswordTouched(false);
  };

  const [category, setCategory] = useState('food');

  const handleCategoryChange = (newCategory: string): void => {
    setCategory(newCategory);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
        isCrossVisible={!!password}
        onCrossClick={handlePasswordClear}
        error={passwordError}
        type="password"
      />

      <div className="mb-5">
        <Select options={['food', 'clothes']} value={category} onChange={handleCategoryChange} />
      </div>

      <Button disabled={!isFormValid} type="submit">
        login
      </Button>

      <div className="mt-2 flex justify-between">
        <p>
          Don't have an account? –{' '}
          <Link href="/signup" className="underline">
            signup
          </Link>
        </p>

        <p>
          Forgot your password? –{' '}
          <Link href="/reset-password" className="underline">
            reset password
          </Link>
        </p>
      </div>
    </form>
  );
};

export default AddExpense;
