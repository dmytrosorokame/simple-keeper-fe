import { JwtPayload, verify } from 'jsonwebtoken';

const verifyToken = (token: string): JwtPayload | null => {
  try {
    return verify(token, process.env.NEXT_PUBLIC_JWT_ACCESS_SECRET as string) as JwtPayload;
  } catch (error) {
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('accessToken');

  return !!token && !!verifyToken(token);
};
