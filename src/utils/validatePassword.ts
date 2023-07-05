import { PASSWORD_REGEX } from '@/constants/regex.constants';

export const validatePassword = (password: string): boolean => {
  return PASSWORD_REGEX.test(password);
};
