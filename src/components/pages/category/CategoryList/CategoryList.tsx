import React from 'react';

import { ICategory } from '../../../../types/categories';
import CategoryItem from '../CategoryItem';

interface ICategoriesListProps {
  categories: ICategory[];
}

const CategoryList: React.FC<ICategoriesListProps> = ({ categories }) => (
  <>
    {categories.length ? (
      <ul>
        {categories.map((category) => (
          <div className="mt-2" key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </ul>
    ) : (
      <p className="text-center">No categories!</p>
    )}
  </>
);

export default CategoryList;
