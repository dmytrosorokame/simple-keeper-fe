import { TRootState } from '@/store/store';

export const selectIsAuthenticated = (state: TRootState): boolean => state.auth.isAuthenticated;
