import React from 'react';

import CategoryItem from '@/components/pages/category/CategoryItem';
import { ICategory } from '@/types/categories';

interface ICategoriesListProps {
  categories: ICategory[];
}

const CategoryList: React.FC<ICategoriesListProps> = ({ categories }) => (
  <>
    <ul>
      {categories.map((category) => (
        <div className="mt-2" key={category.id}>
          <CategoryItem category={category} />
        </div>
      ))}
    </ul>
  </>
);

export default CategoryList;
