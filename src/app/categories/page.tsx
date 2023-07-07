'use client';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

import CategoryList from '@/components/pages/category/CategoryList/CategoryList';
import Button from '@/components/shared/Button/Button';
import { ICategory } from '@/types/categories';

const CATEGORIES: ICategory[] = [
  {
    id: 1,
    name: 'Food',
  },
  {
    id: 2,
    name: 'Transport',
  },
  {
    id: 3,
    name: 'Entertainment',
  },
  {
    id: 4,
    name: 'Health',
  },
  {
    id: 5,
    name: 'Other',
  },
];

const Page: React.FC = () => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <>
      <div className="mb-10">
        <CategoryList categories={CATEGORIES} />
      </div>

      <Button onClick={handleBack} isOutlined>
        back
      </Button>
    </>
  );
};

export default Page;
