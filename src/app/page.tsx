'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

import WithAuth from '@/components/hocs/WithAuth/WithAuth';
import Button from '@/components/shared/Button';
import { Pages } from '@/constants/pages.constants';
import { logout } from '@/store/auth/auth.slice';
import { showPopup } from '@/store/popup/popup.slice';
import { useAppDispatch } from '@/store/store';
import { Popup } from '@/types/popup';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleNavigateToExpenses = useCallback((): void => {
    router.push(Pages.EXPENSES);
  }, [router]);

  const handleNavigateToCategories = useCallback((): void => {
    router.push(Pages.CATEGORIES);
  }, [router]);

  const handleLogout = useCallback((): void => {
    dispatch(
      showPopup({
        popup: Popup.SUBMIT,
        data: {
          onConfirm: () => {
            dispatch(logout());

            router.push(Pages.LOGIN);
            toast('Logout successfully!');
          },
        },
      }),
    );
  }, [dispatch, router]);

  return (
    <>
      <div className="mb-5">
        <Button onClick={handleNavigateToExpenses}>expenses</Button>
      </div>

      <div className="mb-5">
        <Button onClick={handleNavigateToCategories}>categories</Button>
      </div>

      <Button onClick={handleLogout}>logout</Button>
    </>
  );
};

export default WithAuth(Home);
