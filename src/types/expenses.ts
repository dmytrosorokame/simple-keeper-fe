export interface IExpense {
  id: string;
  amount: number;
  name?: string;
  comment?: string;
  date: string;
  categoryId: number;
}
