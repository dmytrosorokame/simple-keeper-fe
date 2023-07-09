import { TRootState } from '@/store/store';
import { IPopupData, Popup } from '@/types/popup';

export const popupDataSelector = (state: TRootState): IPopupData | null => state.popup.popupData;

export const shownPopupSelector = (state: TRootState): Popup | null => state.popup.shownPopup;
