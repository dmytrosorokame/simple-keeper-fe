'use client';

import cn from 'classnames';
import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import Cross from '@/components/icons/Cross/Cross';

interface IInputProps {
  onCrossClick?: () => void;
  isCrossVisible?: boolean;
  error?: string | null;
}

type TInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & IInputProps;

const Input: React.FC<TInputProps> = ({ onCrossClick, isCrossVisible, error, ...rest }) => (
  <div>
    <div className="relative">
      <input
        {...rest}
        className={cn(
          'w-full h-10 pl-3 placeholder:text-black border-2 block outline-none appearance-none',
          { ['border-black focus:border-black']: !error },
          { ['border-red-400 focus:border-red']: error },
        )}
      />

      {isCrossVisible && (
        <button onClick={onCrossClick} className="absolute right-3 top-1/2 -translate-y-1/2">
          <Cross />
        </button>
      )}
    </div>

    {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
  </div>
);

export default Input;
