import * as Yup from 'yup';

import { INVALID_EMAIL_ERROR_MESSAGE, REQUIRED_EMAIL_ERROR_MESSAGE } from '@/constants/errors.constants';

export const resetPasswordValidationSchema = Yup.object().shape({
  email: Yup.string().email(INVALID_EMAIL_ERROR_MESSAGE).required(REQUIRED_EMAIL_ERROR_MESSAGE),
});
