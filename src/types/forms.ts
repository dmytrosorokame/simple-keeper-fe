import { ISelectOption } from './common';

export interface IAddExpenseFormValues {
  amount: number;
  categoryOption: ISelectOption;
  name: string;
  comment: string;
}

export interface IAddCategoryFormValues {
  name: string;
}

export interface IResetPasswordFormValues {
  email: string;
}
