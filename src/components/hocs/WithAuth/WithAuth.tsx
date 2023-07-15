import React, { ComponentType, useEffect, useState } from 'react';

import { authorizeUser } from '@/api/user.api';
import NotAuthenticated from '@/components/generic/NotAuthenticated';
import PageLoader from '@/components/shared/PageLoader';

const WithAuth = (WrappedComponent: ComponentType): React.FC => {
  const WithAuthorization: React.FC = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
      const authorize = async (): Promise<void> => {
        try {
          await authorizeUser();

          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          setIsError(true);
        }
      };

      authorize();
    }, []);

    if (isLoading) {
      return <PageLoader />;
    }

    if (isError) {
      return <NotAuthenticated />;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthorization;
};

export default WithAuth;
