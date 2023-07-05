import { EMAIL_REGEX } from '@/constants/regex.constants';

export const validateEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email);
};
