'use client';

import cn from 'classnames';
import React, { PropsWithChildren } from 'react';

interface IButtonProps {
  onClick?: () => void;
  isDisabled?: boolean;
  isOutlined?: boolean;
}

const Button: React.FC<PropsWithChildren<IButtonProps>> = ({ children, onClick, isDisabled, isOutlined }) => {
  const handleClick = (): void => {
    if (isDisabled) return;

    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'flex justify-center border-2 border-black items-center w-full h-10 text-base transition-colors ease-in-out duration-300',
        { ['hover:bg-white hover:text-black']: !isDisabled && !isOutlined },
        { ['opacity-50 hover:text-white hover:bg-black cursor-default bg-black text-white']: isDisabled },
        { ['bg-black text-white hover:bg-white hover:text-black']: !isOutlined && !isDisabled },
        { ['bg-white text-black hover:bg-black hover:text-white']: isOutlined && !isDisabled },
      )}
    >
      {children}
    </button>
  );
};

export default Button;
