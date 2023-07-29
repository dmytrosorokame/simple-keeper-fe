'use client';

import cn from 'classnames';
import React, { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react';

import CloseEye from '@/components/icons/CloseEye';
import Cross from '@/components/icons/Cross';
import Eye from '@/components/icons/Eye';

interface IInputProps {
  onCrossClick?: () => void;
  isCrossVisible?: boolean;
  error?: string | null;
}

type TInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & IInputProps;

const Input: React.FC<TInputProps> = ({ onCrossClick, isCrossVisible, error, type, ...rest }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPasswordType = type === 'password';

  const onEyeClick = (): void => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div>
      <div className="relative">
        <input
          {...rest}
          type={isPasswordVisible ? 'text' : type}
          className={cn(
            'w-full h-10 pl-3 placeholder:text-black border-2 block outline-none appearance-none',
            { ['border-black focus:border-black']: !error },
            { ['border-red-400 focus:border-red']: error },
          )}
        />

        {isCrossVisible && !isPasswordType && (
          <button onClick={onCrossClick} className="absolute right-3 top-1/2 -translate-y-1/2">
            <Cross />
          </button>
        )}

        {isPasswordType && (
          <button onClick={onEyeClick} className="absolute right-3 top-1/2 -translate-y-1/2">
            {isPasswordVisible ? <CloseEye /> : <Eye />}
          </button>
        )}
      </div>

      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
