'use client';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

import { useGetAllCategoriesQuery } from '@/api/category.api';
import withAuth from '@/components/hocs/WithAuth';
import CategoryList from '@/components/pages/category/CategoryList';
import Button from '@/components/shared/Button';
import Loader from '@/components/shared/Loader';

const Categories: React.FC = () => {
  const { data: categories = [], isFetching, isLoading } = useGetAllCategoriesQuery();
  const router = useRouter();

  const isShowLoader = isFetching || isLoading;

  const handleAddCategory = useCallback(() => {
    router.push('/add-category');
  }, [router]);

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <>
      <div className="mb-10">
        {isShowLoader ? (
          <div className="w-10 h-10 m-auto">
            <Loader />
          </div>
        ) : (
          <CategoryList categories={categories} />
        )}
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
