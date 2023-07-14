'use client';
import cn from 'classnames';
import { Inter } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

import AppProvider from '@/components/generic/AppProvider';
import PopupManager from '@/components/generic/PopupManager';
import Heading from '@/components/shared/Heading';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'simple.keeper',
//   description: 'just keep. nothing more',
// };

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={cn(inter.className, 'p-6 h-screen flex flex-col justify-center')}>
      <AppProvider>
        <div className="max-w-screen-sm m-auto w-full">
          <Heading />

          {children}
        </div>

        <PopupManager />

        <ToastContainer hideProgressBar theme="light" autoClose={false} />
      </AppProvider>
    </body>
  </html>
);

export default RootLayout;
