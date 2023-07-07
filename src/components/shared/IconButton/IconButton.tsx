import React, { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react';

type TIconButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const IconButton: React.FC<PropsWithChildren<TIconButtonProps>> = ({ children, ...rest }) => (
  <button
    {...rest}
    className="hover:bg-gray-100 transition-colors duration-150 w-7 h-7 p-1 flex justify-center items-center rounded-full"
  >
    <div className="w-10">{children}</div>
  </button>
);

export default IconButton;
