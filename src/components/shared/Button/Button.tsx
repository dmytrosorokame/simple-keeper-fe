'use client';

import React, { PropsWithChildren } from 'react';
import cn from 'classnames';

interface IButtonProps {
  onClick?: () => void;
  isDisabled?: boolean;
  isActive?: boolean;
}

export const Button: React.FC<PropsWithChildren<IButtonProps>> = ({ children, onClick, isDisabled, isActive }) => {
  const handleClick = () => {
    if (isDisabled) return;

    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        // { ['border-black hover:bg-black hover:text-white']: !isDisabled },
        'flex justify-center border-2 border-black items-center w-full h-10 ml-4 bg-black text-white text-base hover:bg-white hover:text-black transition-colors ease-in-out duration-300',
        { ['bg-white text-black hover:bg-black hover:text-white']: isActive && !isDisabled },
        { ['opacity-50 hover:bg-black hover:text-white cursor-default']: isDisabled },
      )}
    >
      {children}
    </button>
  );
};
