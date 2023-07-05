import React from 'react';

import { IIconProps } from '@/types/common';

const Arrow: React.FC<IIconProps> = ({ className }) => (
  <svg className={className} width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.8723 5.99175L11 11.4728L4.12776 5.99175C4.00498 5.89363 3.84015 5.8387 3.66851 5.8387C3.49688 5.8387 3.33205 5.89363 3.20926 5.99175C3.14981 6.03941 3.10258 6.0963 3.07034 6.15908C3.03809 6.22186 3.02148 6.28928 3.02148 6.35738C3.02148 6.42548 3.03809 6.49289 3.07034 6.55568C3.10258 6.61846 3.14981 6.67534 3.20926 6.723L10.5201 12.555C10.6485 12.6574 10.8207 12.7147 11 12.7147C11.1793 12.7147 11.3515 12.6574 11.4799 12.555L18.7908 6.72413C18.8506 6.67643 18.8982 6.61941 18.9307 6.55642C18.9632 6.49343 18.9799 6.42575 18.9799 6.35738C18.9799 6.28901 18.9632 6.22133 18.9307 6.15834C18.8982 6.09535 18.8506 6.03832 18.7908 5.99063C18.668 5.8925 18.5032 5.83757 18.3315 5.83757C18.1599 5.83757 17.995 5.8925 17.8723 5.99063V5.99175Z"
      fill="black"
    />
  </svg>
);

export default Arrow;
