import cn from 'classnames';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';

import './globals.css';
import Heading from '@/components/shared/Heading/Heading';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'simple.keeper',
  description: 'just keep. nothing more',
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={cn(inter.className, 'p-6 h-screen flex flex-col justify-center')}>
      <div className="max-w-screen-sm m-auto w-full">
        <Heading />

        {children}
      </div>
    </body>
  </html>
);

export default RootLayout;
