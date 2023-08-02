'use client';
import { usePathname } from 'next/navigation';
import React, { MouseEventHandler, useCallback, useEffect } from 'react';

import { POPUPS_CONFIG } from '@/constants/popup.constants';
import { shownPopupSelector } from '@/store/popup/popup.selectors';
import { hidePopup } from '@/store/popup/popup.slice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { Popup } from '@/types/popup';

const PopupManager: React.FC = () => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const shownPopupName = useAppSelector(shownPopupSelector);

  const PopupToShow = shownPopupName ? POPUPS_CONFIG[shownPopupName as Popup] : null;
  const hasPopupToShow = !!PopupToShow;

  const onBackdropClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        dispatch(hidePopup());
      }
    },
    [dispatch],
  );

  useEffect(() => {
    if (hasPopupToShow) {
      window.document.body.style.overflow = 'hidden';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window.document.body.style as any)['-webkit-overflow-scrolling'] = 'auto';
    } else {
      window.document.body.style.overflow = 'auto';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window.document.body.style as any)['-webkit-overflow-scrolling'] = 'touch';
    }
  }, [hasPopupToShow]);

  useEffect(() => {
    if (hasPopupToShow) {
      dispatch(hidePopup());
    }
  }, [pathname, dispatch]);

  if (!hasPopupToShow) {
    return null;
  }

  return (
    <div
      onClick={onBackdropClick}
      className="fixed z-50 top-0 left-0 w-full h-full backdrop-filter backdrop-blur-8 bg-black bg-opacity-40"
      role="button"
      tabIndex={0}
      onTouchMove={(e) => e.preventDefault()}
    >
      <PopupToShow />
    </div>
  );
};

export default PopupManager;
