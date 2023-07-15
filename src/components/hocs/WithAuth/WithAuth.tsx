import React, { ComponentType, useEffect, useState } from 'react';

import { authorizeUser } from '@/api/user.api';
import NotAuthenticated from '@/components/generic/NotAuthenticated';
import PageLoader from '@/components/shared/PageLoader';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setCredentials } from '@/store/auth/auth.slice';
import { selectIsAuthenticated } from '@/store/auth/auth.selectors';

const WithAuth = (WrappedComponent: ComponentType): React.FC => {
  const WithAuthorization: React.FC = (props) => {
    const dispatch = useAppDispatch();

    const isAuthenticated = useAppSelector(selectIsAuthenticated);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
      const authorize = async (): Promise<void> => {
        try {
          const authData = await authorizeUser();

          dispatch(setCredentials(authData));
        } finally {
          setIsLoading(false);
        }
      };

      if (!isAuthenticated) {
        authorize();
      }
    }, []);

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    }

    if (isLoading) {
      return <PageLoader />;
    }

    return <NotAuthenticated />;
  };

  return WithAuthorization;
};

export default WithAuth;
