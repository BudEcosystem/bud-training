import { Suspense } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './globals.css';

import Nav from './nav';
import Toast from './toast';
import HomeLayout from './home-layout';
import Background from './background';

export const metadata = {
  title: 'Bud flow',
  description:
    'A dashboard which allow the management of foundational models'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className="h-full">
        <Suspense>
          {/* <Nav /> */}

        </Suspense>
        {/* <Background></Background> */}
        <HomeLayout>
          {children}
        </HomeLayout>
        <ToastContainer
          autoClose={false}
          hideProgressBar
          limit={2}
        />
      </body>
    </html>
  );
}
