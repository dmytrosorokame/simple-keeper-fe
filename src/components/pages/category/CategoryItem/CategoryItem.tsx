import React from 'react';

import Line from '@/components/icons/Line/Line';
import IconButton from '@/components/shared/IconButton/IconButton';
import { ICategory } from '@/types/categories';

interface ICategoryItemProps {
  category: ICategory;
}

const CategoryItem: React.FC<ICategoryItemProps> = ({ category }) => {
  const handleDeleteCategory = (): void => {};

  return (
    <div className="pb-2 border-b-black border-b-2 flex justify-between">
      {category.name}

      <IconButton onClick={handleDeleteCategory}>
        <Line className="w-full" />
      </IconButton>
    </div>
  );
};

export default CategoryItem;
