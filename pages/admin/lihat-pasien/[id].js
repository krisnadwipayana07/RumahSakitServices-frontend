import React, { useEffect, useState } from 'react';
import { Center, Container, Heading, Link } from '@chakra-ui/layout';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react';
import AdminBaseLayout from '../../../components/layouts/AdminBaseLayout';
import { useRouter } from 'next/router';
import UseGetAllSchedule from '../../../lib/hook/useGetAllPatient';
import PatientCard from '../../../components/tabel/PatientCard';

export default function ListPasien() {
  const router = useRouter();
  const { id } = router.query;
  const [refresh, setRefresh] = useState(0);

  const { getAllPatient, data, error, loading, refetch } = UseGetAllSchedule();
  const reload = () => {
    setRefresh(refresh + 1);
  };
  useEffect(() => {
    getAllPatient({ variables: { scheduleId: id } });
  }, [id]);

  useEffect(() => {
    refetch();
  }, [refresh]);

  return (
    <>
      <Container maxW='container.xl'>
        <Center m='10'>
          <Heading size='xl'>List Pasien</Heading>
        </Center>
        <Table variant='simple'>
          <TableCaption>List Pasien yang mendaftar pada jadwal</TableCaption>
          <Thead>
            <Tr>
              <Th>NAMA PASIEN</Th>
              <Th>NIK</Th>
              <Th>Keluhan</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.patient.map((item, key) => (
              <PatientCard key={key} data={item} reload={reload} />
            ))}
          </Tbody>
        </Table>
      </Container>
    </>
  );
}

ListPasien.getLayout = (page) => <AdminBaseLayout> {page} </AdminBaseLayout>;
