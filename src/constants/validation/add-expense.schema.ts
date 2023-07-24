import * as Yup from 'yup';

import {
  INVALID_AMOUNT_ERROR_MESSAGE,
  REQUIRED_AMOUNT_ERROR_MESSAGE,
  REQUIRED_CATEGORY_ERROR_MESSAGE,
} from '@/constants/errors.constants';

export const addExpenseValidationSchema = Yup.object().shape({
  amount: Yup.number().positive(INVALID_AMOUNT_ERROR_MESSAGE).required(REQUIRED_AMOUNT_ERROR_MESSAGE),
  categoryOption: Yup.string().required(REQUIRED_CATEGORY_ERROR_MESSAGE),
  name: Yup.string(),
  comment: Yup.string(),
});
