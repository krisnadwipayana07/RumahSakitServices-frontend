import { Box, Center, Container, Heading } from '@chakra-ui/layout';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  Link
} from '@chakra-ui/react';
import React from 'react';
import AdminBaseLayout from '../../components/layouts/AdminBaseLayout';

export default function jadwal() {
  return (
    <Container maxW='container.xl'>
      <Center m='10'>
        <Heading size='2xl'>Jadwal Anda</Heading>
      </Center>
      <Table variant='simple'>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
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

jadwal.getLayout = (page) => <AdminBaseLayout> {page} </AdminBaseLayout>;
