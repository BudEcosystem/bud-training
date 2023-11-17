import React from 'react';
import { ThemeProvider } from './components/theme-provider';
import { Suspense } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './globals.css';
import Toast from './components/toast';
import HomeLayout from './home-layout';
import Background from './background';
import Loading from './loading';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ThemePanel } from '@radix-ui/themes';
import { ModeToggle } from './components/mode-toggle';

export const metadata = {
  title: 'Bud flow',
  description: 'A dashboard which allow the management of foundational models'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-white" suppressHydrationWarning>
      <body className="h-full">
        <Theme>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Suspense fallback={<Loading />}>
              <HomeLayout>{children}</HomeLayout>
            </Suspense>

            <ToastContainer />
            
            {/* <ThemePanel /> */}
          </ThemeProvider>
        </Theme>
      </body>
    </html>
  );
}

{
  /* <Theme style={{display: 'np'}} panelBackground="solid" appearance="light" accentColor="crimson" grayColor="sand" radius="large" scaling="100%" >
          <Suspense fallback={<Loading />}>
            <HomeLayout>
            {children}
          </HomeLayout>

          </Suspense>
          
          <ToastContainer />
          <ThemePanel />
        </Theme> */
}
