import { Box, Center, Container, Heading, Link } from '@chakra-ui/layout';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button
} from '@chakra-ui/react';
import React from 'react';
import AdminBaseLayout from '../../components/layouts/AdminBaseLayout';

export default function listPasien() {
  return (
    <Container maxW='container.xl'>
      <Center m='10'>
        <Heading size='xl'>List Pasien</Heading>
      </Center>
      <Table variant='simple'>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>NAMA PASIEN</Th>
            <Th>NIK</Th>
            <Th>Keluhan</Th>
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
                <Button mx='3' bgColor='green.400'>
                  Selesai
                </Button>
              </Link>
              <Button mx='3' bgColor='red.400'>
                Tidak Hadir
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  );
}

listPasien.getLayout = (page) => <AdminBaseLayout> {page} </AdminBaseLayout>;
