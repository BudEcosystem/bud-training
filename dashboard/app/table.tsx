// import {
//   Table,
//   TableHead,
//   TableRow,
//   TableHeaderCell,
//   TableBody,
//   TableCell,
//   Text
// } from '@tremor/react';

// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
// }

import { Box, Flex, Table, Text } from '@radix-ui/themes';

export default async function UsersTable({ users }: { users: User[] }) {
  return (
    // <Table className='px-0 dashboardTable'>
    //   <TableHead className='px-0'>
    //     <TableRow className='px-0' style={{color: 'var(--gray-12)'}}>
    //       <TableHeaderCell>Name</TableHeaderCell>
    //       <TableHeaderCell>Username</TableHeaderCell>
    //       <TableHeaderCell>Email</TableHeaderCell>
    //     </TableRow>
    //   </TableHead>
    //   <TableBody className='px-0'>
    //     {users.map((user) => (
    //       <TableRow key={user.id}>
    //         <TableCell>{user.name}</TableCell>
    //         <TableCell>
    //           <Text>{user.username}</Text>
    //         </TableCell>
    //         <TableCell>
    //           <Text>{user.email}</Text>
    //         </TableCell>
    //       </TableRow>
    //     ))}
    //   </TableBody>
    // </Table>
    <Table.Root size='3' className="rounded-lg overflow-x-hidden radixTable">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Username</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {users.map((user) => (
          <Table.Row key={user.id}>
            <Table.RowHeaderCell>{user.id}</Table.RowHeaderCell>
            <Table.RowHeaderCell>{user.name}</Table.RowHeaderCell>
            <Table.Cell>
              <Text>{user.username}</Text>
            </Table.Cell>
            <Table.Cell>
              <Text>{user.email}</Text>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
