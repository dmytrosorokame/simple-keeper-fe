'use client';
import cn from 'classnames';
import { Inter } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

import AppProvider from '@/components/generic/AppProvider';
import PopupManager from '@/components/generic/PopupManager';
import Heading from '@/components/shared/Heading';
import { Pages } from '@/constants/pages.constants';
import { PAGES_WITHOUT_HEADING } from '@/constants/pagesWithoutHeading.constants';

const inter = Inter({ subsets: ['latin'] });

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  const isShowHeading = !PAGES_WITHOUT_HEADING.includes(pathname as Pages);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <title>Simple Keeper 💰</title>
      </head>
      <body className={cn(inter.className, 'p-6 h-screen flex flex-col justify-center')}>
        <AppProvider>
          <div className="max-w-screen-sm m-auto w-full">
            {isShowHeading && <Heading />}

            {children}
          </div>

          <PopupManager />

          <ToastContainer hideProgressBar theme="light" />
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
