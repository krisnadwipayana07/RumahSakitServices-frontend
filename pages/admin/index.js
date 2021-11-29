import { Box, Center, Container, Heading } from '@chakra-ui/layout';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  Link
} from '@chakra-ui/react';
import React, { useState } from 'react';
import AdminBaseLayout from '../../components/layouts/AdminBaseLayout';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function jadwal() {
  return (
    <Container maxW='container.xl'>
      <Center m='10'>
        <Heading size='2xl'>Jadwal Anda</Heading>
      </Center>
      <Table variant='simple'>
        <TableCaption>Rumah Sakit Services Data</TableCaption>
        <Thead>
          <Tr>
            <Th>RUANGAN</Th>
            <Th>TANGGAL JAGA</Th>
            <Th>JAM JAGA</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
            <Td isNumeric color='white'>
              <Link href='/admin/listPasien'>
                <Button mx='3' bgColor='blue.400'>
                  Lihat
                </Button>
              </Link>
              <Button mx='3' bgColor='yellow.400'>
                Edit
              </Button>
              <Button mx='3' bgColor='red.400'>
                Hapus
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  );
}

// export const getServerSideProps = withPageAuthRequired({
//   async getServerSideProps() {
//     return <h1>TESTTT LOGIN GA?</h1>;
//   }
// });

jadwal.getLayout = (page) => <AdminBaseLayout> {page} </AdminBaseLayout>;
