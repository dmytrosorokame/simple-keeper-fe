'use client';

import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type TInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: React.FC<TInputProps> = ({ ...rest }) => (
  <input
    {...rest}
    className="w-full h-10 pl-3 placeholder:text-black mb-5 border-2 border-black block focus:border-black outline-none"
  />
);

export default Input;
