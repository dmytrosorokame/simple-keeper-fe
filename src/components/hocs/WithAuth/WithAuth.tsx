import React, { ComponentType, useEffect, useState } from 'react';

import { authorizeUser } from '../../../api/user.api';
import { selectIsAuthenticated } from '../../../store/auth/auth.selectors';
import { setCredentials } from '../../../store/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import NotAuthenticated from '../../generic/NotAuthenticated';
import PageLoader from '../../shared/PageLoader';

const WithAuth = (WrappedComponent: ComponentType): React.FC => {
  const WithAuthorization: React.FC = (props) => {
    const dispatch = useAppDispatch();

    const isAuthenticated = useAppSelector(selectIsAuthenticated);
    const [isLoading, setIsLoading] = useState(true);

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
    }, [dispatch]);

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
