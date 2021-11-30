import React, { useEffect } from 'react';
import { Center, Container, Heading, Link } from '@chakra-ui/layout';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton
} from '@chakra-ui/react';
import AdminBaseLayout from '../../../components/layouts/AdminBaseLayout';
import { useRouter } from 'next/router';
import UseGetAllSchedule from '../../../lib/hook/useGetAllPatient';
import PatientCard from '../../../components/tabel/PatientCard';

export default function ListPasien() {
  const router = useRouter();
  const { id } = router.query;

  const { getAllPatient, data, error, loading } = UseGetAllSchedule();

  useEffect(() => {
    getAllPatient({ variables: { scheduleId: id } });
  }, [id]);

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
              <PatientCard key={key} data={item} />
            ))}
          </Tbody>
        </Table>
      </Container>
    </>
  );
}

ListPasien.getLayout = (page) => <AdminBaseLayout> {page} </AdminBaseLayout>;
