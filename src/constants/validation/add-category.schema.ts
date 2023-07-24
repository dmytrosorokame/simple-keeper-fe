import * as Yup from 'yup';

import { REQUIRED_NAME_ERROR_MESSAGE } from '@/constants/errors.constants';

export const addCategoryValidationSchema = Yup.object().shape({
  name: Yup.string().required(REQUIRED_NAME_ERROR_MESSAGE),
});
