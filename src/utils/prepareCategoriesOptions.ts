import { DEFAULT_CATEGORY_OPTION } from '../constants/category.constants';
import { ICategory } from '../types/categories';
import { ISelectOption } from '../types/common';

export const prepareCategoriesOptions = (categories: ICategory[]): ISelectOption[] => {
  return [
    ...categories.map((category) => ({
      value: category.id,
      label: category.name,
    })),
    DEFAULT_CATEGORY_OPTION,
  ];
};
