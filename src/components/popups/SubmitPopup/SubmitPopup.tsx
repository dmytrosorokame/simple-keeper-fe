import React, { useCallback } from 'react';

import { popupDataSelector } from '../../../store/popup/popup.selectors';
import { hidePopup } from '../../../store/popup/popup.slice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import Button from '../../shared/Button';
import Popup from '../../shared/Popup';

const SubmitPopup: React.FC = () => {
  const dispatch = useAppDispatch();

  const popupData = useAppSelector(popupDataSelector);

  const handleNoClick = useCallback((): void => {
    if (popupData && popupData.onCancel) {
      popupData.onCancel();
    }

    dispatch(hidePopup());
  }, [dispatch, popupData]);

  const handleYesClick = useCallback((): void => {
    if (popupData && popupData.onConfirm) {
      popupData.onConfirm();
    }

    dispatch(hidePopup());
  }, [dispatch, popupData]);

  return (
    <Popup>
      <h2 className="text-3xl text-center mb-10">Are you sure?</h2>

      <div className="flex gap-5">
        <Button onClick={handleNoClick} isOutlined>
          no
        </Button>

        <Button onClick={handleYesClick}>yes</Button>
      </div>
    </Popup>
  );
};

export default SubmitPopup;
