import React from 'react';

import { IIconProps } from '../../../types/common';

const Line: React.FC<IIconProps> = ({ className }) => (
  <svg className={className} width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 1L15 1" stroke="black" />
  </svg>
);

export default Line;
