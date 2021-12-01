import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useGetPaseinById from '../../../../lib/hook/useGetPaseinById';
import { Box, Center, Heading, Text } from '@chakra-ui/layout';
import {
  FormControl,
  FormLabel,
  Textarea,
  useMediaQuery,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  FormErrorMessage
} from '@chakra-ui/react';
import Link from 'next/link';

import AdminBaseLayout from '../../../../components/layouts/AdminBaseLayout';
import useUpdatePasein from '../../../../lib/hook/useUpdatePatient';

export default function SelesaiPasien() {
  const router = useRouter();
  const { id } = router.query;

  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const [isAboveMd] = useMediaQuery('(min-width: 48em)');
  const [solusi, setSolusi] = useState('');

  const { getPatientDetail, data, loading, error } = useGetPaseinById();
  const {
    updatePasien,
    data: insertData,
    loading: loadingData,
    error: errorData
  } = useUpdatePasein();

  useEffect(() => {
    getPatientDetail({ variables: { id: id } });
    console.log(data);
  }, [data, id]);

  const onSubmit = () => {
    console.log(data);
    console.log(solusi);
    updatePasien({ variables: { id: id, solusi: solusi } });
    setIsOpen(true);
  };

  return (
    <Box p='5'>
      <Center>
        <Heading>Pasien Detail</Heading>
      </Center>

      <Box
        borderRadius='25px'
        border='1px'
        color='gray.200'
        p='20px'
        mx={isAboveMd ? '32' : '0'}
        my='2'
      >
        <Box color='black' m={isAboveMd ? '5' : '0'} fontWeight='semibold'>
          <Text my='1'>Nama : {data?.patient[0].nama} </Text>
          <Text my='1'>Jenis Kelamin : {data?.patient[0].jenis_kelamin}</Text>
          <Text my='1'>NIK : {data?.patient[0].nik}</Text>
          <Text my='1'>No_BPJS : {data?.patient[0].no_bpjs}</Text>
          <Text my='1'>Tempat Lahir : {data?.patient[0].tempat_lahir}</Text>
          <Text my='1'>Tanggal Lahir : {data?.patient[0].tanggal_lahir}</Text>
          <Text my='1'>No Telp : {data?.patient[0].no_telp}</Text>
          <Text my='1'>Keluhan : {data?.patient[0].keluhan}</Text>
        </Box>
      </Box>
      <Box p='20px' mx={isAboveMd ? '48' : '0'} my='2'>
        <form>
          <FormControl name='solusi'>
            <FormLabel>Solusi</FormLabel>
            <Textarea
              size='md'
              onChange={(e) => setSolusi(e.target.value)}
              placeholder='hal yang menjadi catatan buat si pasien'
            />
          </FormControl>
          <Center>
            <Button
              bgColor='green.400'
              color='white'
              my='3'
              onClick={() => onSubmit()}
            >
              Kirim
            </Button>
          </Center>
        </form>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            {errorData && (
              <AlertDialogContent>
                <AlertDialogHeader
                  fontSize='lg'
                  fontWeight='bold'
                ></AlertDialogHeader>

                <AlertDialogBody>Error!</AlertDialogBody>
              </AlertDialogContent>
            )}
            {loadingData && (
              <AlertDialogContent>
                <AlertDialogHeader
                  fontSize='lg'
                  fontWeight='bold'
                ></AlertDialogHeader>

                <AlertDialogBody>loading insert...</AlertDialogBody>
              </AlertDialogContent>
            )}
            {insertData && (
              <AlertDialogContent>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                  Solusi Berhasil Diinput
                </AlertDialogHeader>

                <AlertDialogBody>
                  Pendaftaran Kunjungan berhasil
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Link
                    passHref
                    href={`/admin/lihat-pasien/${data.patient[0].schedule_id}`}
                  >
                    <Button bgColor='blue.400' onClick={onClose} ml={3}>
                      Back
                    </Button>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            )}
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    </Box>
  );
}

SelesaiPasien.getLayout = (page) => <AdminBaseLayout> {page} </AdminBaseLayout>;
