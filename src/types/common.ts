import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IIconProps {
  className?: string;
}

export interface ISelectOption {
  value: string | number | null;
  label: string;
}

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isOutlined?: boolean;
}
