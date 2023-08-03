import { IPopupData, Popup } from '../../types/popup';
import { TRootState } from '../store';

export const popupDataSelector = (state: TRootState): IPopupData | null => state.popup.popupData;

export const shownPopupSelector = (state: TRootState): Popup | null => state.popup.shownPopup;
