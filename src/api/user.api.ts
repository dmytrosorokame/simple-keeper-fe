import axios from 'axios';
import Cookies from 'js-cookie';

import { IAuthResponse } from '@/types/auth';
import { IUser } from '@/types/user';

const fetchUserData = async (accessToken: string): Promise<IUser> => {
  const response = await axios.get<IUser>(`${process.env.NEXT_PUBLIC_API_PATH}/users/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};

const refreshTokens = async (refreshToken: string): Promise<IAuthResponse> => {
  const response = await axios.get<{ accessToken: string; refreshToken: string }>(
    `${process.env.NEXT_PUBLIC_API_PATH}/auth/refresh`,
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    },
  );

  return response.data;
};

export const authorizeUser = async (): Promise<IUser & IAuthResponse> => {
  try {
    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');

    if (!accessToken || !refreshToken) {
      throw new Error('No tokens found');
    }

    const userData = await fetchUserData(accessToken);

    return { ...userData, accessToken, refreshToken };
  } catch (error) {
    const isNotAuthorizeError = axios.isAxiosError(error) && error.response?.status === 401;

    if (isNotAuthorizeError) {
      const refreshToken = Cookies.get('refreshToken');

      if (refreshToken) {
        try {
          const { refreshToken: newRefreshToken, accessToken } = await refreshTokens(refreshToken);

          Cookies.set('accessToken', accessToken, { expires: 7 });
          Cookies.set('refreshToken', newRefreshToken, { expires: 7 });

          const userData = await fetchUserData(accessToken);

          return { ...userData, accessToken, refreshToken: newRefreshToken };
        } catch (refreshError) {
          throw new Error('Failed to refresh access token');
        }
      }
    }

    throw error;
  }
};
