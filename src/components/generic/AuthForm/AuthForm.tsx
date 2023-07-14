import React, { useMemo, useState } from 'react';

import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import { INVALID_EMAIL_ERROR, INVALID_PASSWORD_ERROR } from '@/constants/errors.constants';
import { IAuthDto } from '@/types/auth';
import { validateEmail } from '@/utils/validateEmail';
import { validatePassword } from '@/utils/validatePassword';

export interface ISubmitAuthFormParams {
  values: IAuthDto;
  reset: () => void;
}

interface IAuthFormProps {
  onSubmit: (data: ISubmitAuthFormParams) => void;
  buttonLabel?: string;
}

const AuthForm: React.FC<IAuthFormProps> = ({ onSubmit, buttonLabel = 'signup' }) => {
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

  const handleReset = (): void => {
    handleEmailClear();
    handlePasswordClear();

    setIsEmailTouched(false);
    setIsPasswordTouched(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!isFormValid) return;

    onSubmit({ values: { email, password }, reset: handleReset });
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
        {buttonLabel}
      </Button>
    </form>
  );
};

export default AuthForm;
