import { Suspense } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './globals.css';

import Nav from './nav';
import Toast from './toast';
import HomeLayout from './home-layout';
import Background from './background';
import Loading from './loading';

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
        <Suspense fallback={<Loading />}>
          {/* <Nav /> */}
          <HomeLayout>
          {children}
        </HomeLayout>

        </Suspense>
        {/* <Background></Background> */}
        
        <ToastContainer />
      </body>
    </html>
  );
}
