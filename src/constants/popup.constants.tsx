import SubmitPopup from '../components/popups/SubmitPopup';
import { Popup } from '../types/popup';

export const POPUPS_CONFIG: Record<Popup, React.FC> = {
  [Popup.SUBMIT]: SubmitPopup,
};
