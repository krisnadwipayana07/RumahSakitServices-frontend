import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton
} from '@chakra-ui/react';
import useDeletePasein from '../../lib/hook/useDeletePatient';
import Link from 'next/link';

export default function PatientCard({ data, reload }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const { deletePasien } = useDeletePasein();

  const onDelete = () => {
    console.log(data.id);
    deletePasien({ variables: { id: data.id } });
    reload();
    setIsOpen(false);
  };
  return (
    <>
      <Tr>
        <Td>{data.antrian} </Td>
        <Td>{data.nama} </Td>
        <Td>
          <Text noOfLines={[1, 1]}>{data.keluhan}</Text>
        </Td>
        <Td isNumeric color='white'>
          <Link href={`/admin/lihat-pasien/selesai/${data.id}`}>
            <Button m='1' bgColor='green.400'>
              Selesai
            </Button>
          </Link>
          <Button m='1' bgColor='red.400' onClick={() => setIsOpen(true)}>
            Tidak Hadir
          </Button>
        </Td>
      </Tr>
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
            Apakah benar pasien atas nama {data.nama} tidak hadir?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Belum
            </Button>
            <Button colorScheme='red' ml={3} onClick={onDelete}>
              Iya
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
