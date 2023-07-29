import React, { PropsWithChildren } from 'react';

import Button from '@/components/shared/Button';
import Loader from '@/components/shared/Loader/Loader';
import { IButtonProps } from '@/types/common';

interface ILoadingButtonProps extends IButtonProps {
  isLoading: boolean;
}

const LoadingButton: React.FC<PropsWithChildren<ILoadingButtonProps>> = ({ children, isLoading, ...rest }) => (
  <Button {...rest}>
    {isLoading ? (
      <div className="w-6 h-6">
        <Loader />
      </div>
    ) : (
      children
    )}
  </Button>
);

export default LoadingButton;
