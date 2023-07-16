'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

import { useGetAllCategoriesQuery } from '@/api/category.api';
import withAuth from '@/components/hocs/WithAuth';
import CategoryList from '@/components/pages/category/CategoryList';
import Button from '@/components/shared/Button';

const Categories: React.FC = () => {
  const { data: categories } = useGetAllCategoriesQuery();
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <>
      <div className="mb-10">
        {categories ? (
          <CategoryList categories={categories} />
        ) : (
          <p>
            No categories, <Link href="/add-category">create</Link> one
          </p>
        )}
      </div>

      <Button onClick={handleBack} isOutlined>
        back
      </Button>
    </>
  );
};

export default withAuth(Categories);
