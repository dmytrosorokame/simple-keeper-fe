'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/shared/Button';

const Home: React.FC = () => {
  const router = useRouter();

  const handleNavigateToExpenses = (): void => {
    router.push('/expenses');
  };

  const handleNavigateToCategories = (): void => {
    router.push('/categories');
  };

  return (
    <>
      <div className="mb-5">
        <Button onClick={handleNavigateToExpenses}>expenses</Button>
      </div>

      <div className="mb-5">
        <Button onClick={handleNavigateToCategories}>categories</Button>
      </div>

      <Button isOutlined>logout</Button>
    </>
  );
};

export default Home;
