import React from 'react';
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
import AdminBaseLayout from '../../components/layouts/AdminBaseLayout';

export default function ListPasien() {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

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
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td isNumeric color='white'>
                <Button mx='3' bgColor='green.400'>
                  Selesai
                </Button>
                <Button
                  mx='3'
                  bgColor='red.400'
                  onClick={() => setIsOpen(true)}
                >
                  Tidak Hadir
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader>Tidak Hadir?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Apakah benar pasien atas nama ... tidak hadir?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Belum
              </Button>
              <Button colorScheme='red' ml={3} onClick={onClose}>
                Iya
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Container>
    </>
  );
}

ListPasien.getLayout = (page) => <AdminBaseLayout> {page} </AdminBaseLayout>;
