import { ICategory } from './categories';

export interface IExpense {
  id: string;
  amount: number;
  name?: string;
  comment?: string;
  createdAt: string;
  categoryId: number;
  category: ICategory;
}
