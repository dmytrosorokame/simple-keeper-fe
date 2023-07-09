import React from 'react';

import Button from '@/components/shared/Button';
import Popup from '@/components/shared/Popup';
import { popupDataSelector } from '@/store/popup/popup.selectors';
import { useAppSelector } from '@/store/store';

const SubmitPopup: React.FC = () => {
  const popupData = useAppSelector(popupDataSelector);

  return (
    <Popup>
      <h2 className="text-3xl text-center mb-10">Are you sure?</h2>

      <div className="flex gap-5">
        <Button onClick={popupData?.onCancel} isOutlined>
          no
        </Button>

        <Button onClick={popupData?.onConfirm}>yes</Button>
      </div>
    </Popup>
  );
};

export default SubmitPopup;
