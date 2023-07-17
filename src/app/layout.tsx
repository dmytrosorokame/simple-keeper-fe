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

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={cn(inter.className, 'p-6 h-screen flex flex-col justify-center')}>
      <AppProvider>
        <div className="max-w-screen-sm m-auto w-full">
          <Heading />

          {children}
        </div>

        <PopupManager />

        <ToastContainer hideProgressBar theme="light" />
      </AppProvider>
    </body>
  </html>
);

export default RootLayout;
