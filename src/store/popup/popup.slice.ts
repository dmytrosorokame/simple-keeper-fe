import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IPopupData, Popup } from '../../types/popup';

interface IPopupState {
  shownPopup: Popup | null;
  popupData: IPopupData | null;
}

const initialState: IPopupState = {
  shownPopup: null,
  popupData: null,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    showPopup: (state, action: PayloadAction<{ popup: Popup; data?: IPopupData }>) => {
      state.shownPopup = action.payload.popup;
      state.popupData = action.payload?.data ?? null;
    },
    hidePopup: (state) => {
      state.shownPopup = null;
      state.popupData = null;
    },
  },
});

export const { showPopup, hidePopup } = popupSlice.actions;

export default popupSlice.reducer;
