'use client';

import React, { useState } from 'react';

import Button from '@/components/shared/Button/Button';
import Input from '@/components/shared/Input/Input';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const handleEmailClear = (): void => {
    setEmail('');
  };

  const handlePasswordClear = (): void => {
    setPassword('');
  };

  return (
    <>
      <Input
        placeholder="email"
        value={email}
        onChange={handleEmailChange}
        isCrossVisible={!!email}
        onCrossClick={handleEmailClear}
      />

      <Input
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
        isCrossVisible={!!password}
        onCrossClick={handlePasswordClear}
      />

      <Button>signup</Button>
    </>
  );
};

export default SignUp;
