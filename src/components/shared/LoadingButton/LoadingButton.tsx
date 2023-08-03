import React, { PropsWithChildren } from 'react';

import { IButtonProps } from '../../../types/common';
import Button from '../Button';
import Loader from '../Loader';

interface ILoadingButtonProps extends IButtonProps {
  isLoading: boolean;
}

const LoadingButton: React.FC<PropsWithChildren<ILoadingButtonProps>> = ({ children, isLoading, ...rest }) => (
  <Button {...rest}>{isLoading ? <Loader className="w-6 h-6" /> : children}</Button>
);

export default LoadingButton;
