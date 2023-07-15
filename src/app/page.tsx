'use client';

import { useRouter } from 'next/navigation';

import WithAuth from '@/components/hocs/WithAuth/WithAuth';
import Button from '@/components/shared/Button';

const Home: React.FC = () => {
  const router = useRouter();

  const handleNavigateToExpenses = (): void => {
    router.push('/expenses');
  };

  const handleNavigateToAddExpense = (): void => {
    router.push('/add-expense');
  };

  const handleNavigateToCategories = (): void => {
    router.push('/categories');
  };

  const handleNavigateToAddCategory = (): void => {
    router.push('/add-category');
  };

  return (
    <>
      <div className="mb-5">
        <Button onClick={handleNavigateToExpenses}>expenses</Button>
      </div>

      <div className="mb-5">
        <Button onClick={handleNavigateToAddExpense}>add expense</Button>
      </div>

      <div className="mb-5">
        <Button onClick={handleNavigateToCategories}>categories</Button>
      </div>

      <div className="mb-5">
        <Button onClick={handleNavigateToAddCategory}>add category</Button>
      </div>

      <Button isOutlined>logout</Button>
    </>
  );
};

export default WithAuth(Home);
