import React from 'react';

import { IIconProps } from '../../../types/common';

const Cross: React.FC<IIconProps> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.46399 15.535L15.536 8.465M8.46399 8.465L15.536 15.535"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default Cross;
