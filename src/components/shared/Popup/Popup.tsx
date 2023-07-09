import React, { PropsWithChildren } from 'react';

const Popup: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="bg-white max-w-xs w-full p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    {children}
  </div>
);

export default Popup;
