import React from 'react';

import Loader from '@/components/shared/Loader';

const PageLoader: React.FC = () => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-white">
    <div className="w-10 h-10">
      <Loader />
    </div>
  </div>
);

export default PageLoader;
