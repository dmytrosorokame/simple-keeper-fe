import Link from 'next/link';
import React from 'react';

import { isAuthenticated } from '@/utils/jwt';

const withAuth = (WrappedComponent: React.ComponentType): React.FC => {
  const IsAuth: React.FC = (props) => {
    if (!isAuthenticated()) {
      return (
        <div className="text-center absolute w-screen h-screen top-0 left-0 bg-white flex justify-center items-center">
          <div>
            <h1 className="text-xl">Not authenticated 🔒</h1>
            <p>
              Please,{' '}
              <Link href="/login" className="underline">
                login
              </Link>{' '}
              or{' '}
              <Link href="/signup" className="underline">
                signup
              </Link>
            </p>
          </div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return IsAuth;
};

export default withAuth;
