'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import WithAuth from '@/components/hocs/WithAuth/WithAuth';
import Button from '@/components/shared/Button';
import { logout } from '@/store/auth/auth.slice';
import { hidePopup, showPopup } from '@/store/popup/popup.slice';
import { useAppDispatch } from '@/store/store';
import { Popup } from '@/types/popup';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleNavigateToExpenses = (): void => {
    router.push('/expenses');
  };

  const handleNavigateToCategories = (): void => {
    router.push('/categories');
  };

  const handleLogout = (): void => {
    dispatch(
      showPopup({
        popup: Popup.SUBMIT,
        data: {
          onConfirm: () => {
            dispatch(logout());
            router.push('/login');
            dispatch(hidePopup());

            toast('Logout successfully!');
          },
          onCancel: () => {
            dispatch(hidePopup());
          },
        },
      }),
    );
  };

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
