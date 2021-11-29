import React from 'react';
import {
  Container,
  Heading,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Textarea,
  Button,
  Link,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay
} from '@chakra-ui/react';

export default function Daftar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  return (
    <Container maxW='container.xl'>
      <Center my='10'>
        <Heading size='2xl'>Daftar Ke Jadwal Dokter</Heading>
      </Center>
      <FormControl id='jadwal' my='3'>
        <FormLabel>Jadwal</FormLabel>
        <Select placeholder='pilih jadwal'>
          <option>A</option>
          <option>B</option>
        </Select>
      </FormControl>
      <FormControl id='nama' my='3'>
        <FormLabel>Nama Pasien :</FormLabel>
        <Input type='text' />
      </FormControl>
      <FormControl as='fieldset' my='3'>
        <FormLabel as='legend'>Jenis Kelamin :</FormLabel>
        <RadioGroup>
          <HStack spacing='24px'>
            <Radio value='Sasuke'>Pria</Radio>
            <Radio value='Nagato'>Wanita</Radio>
            <Radio value='Itachi'>Other</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      <FormControl id='nik' my='3'>
        <FormLabel>NIK :</FormLabel>
        <Input type='text' />
      </FormControl>
      <FormControl id='no_bpjs' my='3'>
        <FormLabel>No BPJS (jika ada) :</FormLabel>
        <Input type='text' />
      </FormControl>
      <FormControl id='tempat_lahir' my='3'>
        <FormLabel>Tempat Lahir :</FormLabel>
        <Input type='text' />
      </FormControl>
      <FormControl id='tanggal_lahir' my='3'>
        <FormLabel>Tanggal Lahir :</FormLabel>
        <Input type='date' />
      </FormControl>
      <FormControl id='no_telp' my='3'>
        <FormLabel>No Telp yang bisa dihubungi :</FormLabel>
        <Input type='text' />
      </FormControl>
      <FormControl id='keluhan' my='3'>
        <FormLabel>Keluhan :</FormLabel>
        <Textarea size='md' />
      </FormControl>
      <Center m='10'>
        <Link href='/'>
          <Button mx='5'>Batal</Button>
        </Link>
        <Button
          bgColor='blue.400'
          color='white'
          mx='5'
          onClick={() => setIsOpen(true)}
        >
          Kirim
        </Button>
      </Center>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Daftar Kunjungan
            </AlertDialogHeader>

            <AlertDialogBody>Pendaftaran Kunjungan berhasil</AlertDialogBody>

            <AlertDialogFooter>
              <Link href='/'>
                <Button bgColor='blue.400' onClick={onClose} ml={3}>
                  Home
                </Button>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Container>
  );
}
