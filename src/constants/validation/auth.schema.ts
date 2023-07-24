import * as Yup from 'yup';

import {
  INVALID_EMAIL_ERROR_MESSAGE,
  INVALID_PASSWORD_ERROR_MESSAGE,
  REQUIRED_EMAIL_ERROR_MESSAGE,
  REQUIRED_PASSWORD_ERROR_MESSAGE,
} from '@/constants/errors.constants';
import { PASSWORD_REGEX } from '@/constants/regex.constants';

export const authValidationSchema = Yup.object().shape({
  email: Yup.string().email(INVALID_EMAIL_ERROR_MESSAGE).required(REQUIRED_EMAIL_ERROR_MESSAGE),
  password: Yup.string()
    .matches(PASSWORD_REGEX, INVALID_PASSWORD_ERROR_MESSAGE)
    .required(REQUIRED_PASSWORD_ERROR_MESSAGE),
});
