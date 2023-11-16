import React from 'react';
// import { Card, Title, Text } from '@tremor/react';
import { Card, Heading, Text, Section, Flex, Avatar, Box } from '@radix-ui/themes';
// import { queryBuilder } from '../lib/planetscale';
import Search from './components/search';
import UsersTable from './table';
import TableModel from './components/table-model';

export const dynamic = 'force-dynamic';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  // const users = await queryBuilder
  //   .selectFrom('users')
  //   .select(['id', 'name', 'username', 'email'])
  //   .where('name', 'like', `%${search}%`)
  //   .execute();
  const users = [{'id': 1, 'name': 'ditto', 'username':'@ditto', 'email': 'test@test.com'}, {'id': 2, 'name': 'ditto', 'username':'@ditto', 'email': 'test@test.com'}]

  return (
    <main>
      <Heading weight='medium' size='8' style={{color: 'var(--color-primary)'}}>Users</Heading>
      {/* <Text weight='medium' size='4' className='text-gray-600'>
        A list of users retrieved from a MySQL database (PlanetScale).
      </Text> */}
      <Box className='flex flex-col	justify-center items-center	pb-2 rounded-xl my-8 bg-[var(--nav-bg)]'  style={{boxShadow:'var(--shadow-4)'}}>
        <Search />
        <Section className="mt-2 w-full" p='0' style={{boxShadow: '0px -1px 0px 0px var(--gray-a5)'}}>
          <TableModel data={users} />          
        </Section>
        </Box>
    </main>
  );
}
