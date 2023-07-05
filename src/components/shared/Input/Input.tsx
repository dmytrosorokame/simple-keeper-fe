'use client';

import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import Cross from '@/components/icons/Cross/Cross';

interface IInputProps {
  onCrossClick?: () => void;
  isCrossVisible?: boolean;
}

type TInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & IInputProps;

const Input: React.FC<TInputProps> = ({ onCrossClick, isCrossVisible, ...rest }) => (
  <div className="relative">
    <input
      {...rest}
      className="w-full h-10 pl-3 placeholder:text-black mb-5 border-2 border-black block focus:border-black outline-none"
    />

    {isCrossVisible && (
      <button onClick={onCrossClick} className="absolute right-3 top-1/2 -translate-y-1/2">
        <Cross />
      </button>
    )}
  </div>
);

export default Input;
