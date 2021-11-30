import React from 'react';
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

export default function PatientCard({ data }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  return (
    <>
      <Tr>
        <Td>{data.nama} </Td>
        <Td>{data.nik} </Td>
        <Td>{data.keluhan}</Td>
        <Td isNumeric color='white'>
          <Button mx='3' bgColor='green.400'>
            Selesai
          </Button>
          <Button mx='3' bgColor='red.400' onClick={() => setIsOpen(true)}>
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
    </>
  );
}
