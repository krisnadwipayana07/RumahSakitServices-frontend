import React, { useState } from 'react';
import { Box, Center, Container, Heading } from '@chakra-ui/layout';
import { Table, Thead, Tbody, Tr, Th, TableCaption } from '@chakra-ui/react';
import AdminBaseLayout from '../../components/layouts/AdminBaseLayout';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import UseGetSchedule from '../../lib/hook/useGetSchedule';
import JadwalCard from '../../components/tabel/JadwalCard';

export default function jadwal() {
  const { data, loading, error } = UseGetSchedule();

  console.log(data);
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
          {data?.schedules.map((item, key) => (
            <JadwalCard key={key} data={item} />
          ))}
        </Tbody>
      </Table>
    </Container>
  );
}
jadwal.getLayout = (page) => <AdminBaseLayout> {page} </AdminBaseLayout>;
