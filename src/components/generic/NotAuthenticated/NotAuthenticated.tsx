import Link from 'next/link';
import React from 'react';

import { Pages } from '../../../constants/pages.constants';

const NotAuthenticated: React.FC = () => (
  <div className="text-center absolute w-screen h-screen top-0 left-0 bg-white flex justify-center items-center">
    <div>
      <h1 className="text-xl">Not authenticated 🔒</h1>

      <p>
        Please,{' '}
        <Link href={Pages.LOGIN} className="underline">
          login
        </Link>{' '}
        or{' '}
        <Link href={Pages.SIGNUP} className="underline">
          signup
        </Link>
      </p>
    </div>
  </div>
);

export default NotAuthenticated;
