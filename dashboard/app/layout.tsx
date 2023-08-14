import './globals.css';

import Nav from './nav';
import Toast from './toast';
import { Suspense } from 'react';

import HomeLayout from './home-layout';

export const metadata = {
  title: 'Next.js 13 + PlanetScale + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, PlanetScale, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
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
        <HomeLayout>
            {children}
          </HomeLayout>
        {/* <Toast /> */}
      </body>
    </html>
  );
}
