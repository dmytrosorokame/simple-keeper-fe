import { TRootState } from '../store';

export const selectIsAuthenticated = (state: TRootState): boolean => state.auth.isAuthenticated;
