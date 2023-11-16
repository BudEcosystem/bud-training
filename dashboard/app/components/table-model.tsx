"use client"
import {Table, Text } from '@radix-ui/themes';
import React, { useEffect } from 'react';

export default async function UsersTable({ data }: { data: any }) {
    let getTableHeads = Object.keys(data[0])
  return (
    <Table.Root size='3' className="rounded-lg overflow-x-hidden radixTable">
      <Table.Header>
        <Table.Row>
        {getTableHeads.map((head) => (
          // eslint-disable-next-line react/jsx-key
          <Table.ColumnHeaderCell key={head}>{head}</Table.ColumnHeaderCell>
        ))}
        </Table.Row>
        
      </Table.Header>

      <Table.Body>
        {data.map((row: { [x: string]: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, rowIndex: React.Key | null | undefined) => (
          <Table.Row key={rowIndex}>
            {getTableHeads.map((columnName) => (
                <Table.Cell key={columnName}>{row[columnName]}</Table.Cell>
              ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
