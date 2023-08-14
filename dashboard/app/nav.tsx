'use client';

import Navbar from './home-layout';
import { getServerSession } from 'next-auth/next';

export default async function Nav() {
  // const session = await getServerSession();
  const session = {}
  return <Navbar user={session?.user} />;
}
