'use client';

import cn from 'classnames';
import React, { PropsWithChildren } from 'react';

import { IButtonProps } from '../../../types/common';

const Button: React.FC<PropsWithChildren<IButtonProps>> = ({ children, disabled, isOutlined, ...rest }) => (
  <button
    disabled={disabled}
    className={cn(
      'flex justify-center border-2 border-black items-center w-full h-10 text-base transition-colors ease-in-out duration-300',
      { ['hover:bg-white hover:text-black']: !disabled && !isOutlined },
      { ['opacity-50 hover:text-white hover:bg-black cursor-default bg-black text-white']: disabled },
      { ['bg-black text-white hover:bg-white hover:text-black']: !isOutlined && !disabled },
      { ['bg-white text-black hover:bg-black hover:text-white']: isOutlined && !disabled },
    )}
    {...rest}
  >
    {children}
  </button>
);

export default React.memo(Button);
