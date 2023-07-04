import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'simple.keeper',
  description: 'just keep. nothing more',
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
