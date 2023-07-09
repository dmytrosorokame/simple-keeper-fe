/* eslint-disable @typescript-eslint/no-explicit-any */

export enum Popup {
  SUBMIT = 'Submit',
}

export interface IPopupData {
  onConfirm?: (...args: any[]) => any;
  onCancel?: (...args: any[]) => any;
}
