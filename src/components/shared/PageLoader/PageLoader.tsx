import React from 'react';

import Loader from '@/components/shared/Loader';

const PageLoader: React.FC = () => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-white">
    <Loader />
  </div>
);

export default PageLoader;
