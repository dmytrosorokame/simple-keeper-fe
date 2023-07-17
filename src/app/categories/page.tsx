'use client';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

import { useGetAllCategoriesQuery } from '@/api/category.api';
import withAuth from '@/components/hocs/WithAuth';
import CategoryList from '@/components/pages/category/CategoryList';
import Button from '@/components/shared/Button';

const Categories: React.FC = () => {
  const { data: categories = [] } = useGetAllCategoriesQuery();
  const router = useRouter();

  const handleAddCategory = useCallback(() => {
    router.push('/add-category');
  }, [router]);

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <>
      <div className="mb-10">
        {categories.length ? <CategoryList categories={categories} /> : <p className="text-center">No categories!</p>}
      </div>

      <div className="mb-5">
        <Button onClick={handleAddCategory}>add</Button>
      </div>

      <Button onClick={handleBack} isOutlined>
        back
      </Button>
    </>
  );
};

export default withAuth(Categories);
