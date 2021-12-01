import React, { useEffect, useState } from 'react';
import {
  Container,
  Heading,
  Center,
  FormControl,
  FormLabel,
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
  AlertDialogOverlay,
  FormErrorMessage
} from '@chakra-ui/react';
import { validationSchema } from '../components/schema/validationRegistration';
import { useFormik, Form, Formik, Field } from 'formik';
import UseGetAllSchedule from '../lib/hook/useGetAllSchedule';
import useInsertPasein from '../lib/hook/useInsertPasein';
import useGetLastAntrian from '../lib/hook/useGetLastAntrian';

export default function Daftar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const [lastAntrian, setLastAntrian] = useState(0);

  const { data, loading, error } = UseGetAllSchedule();
  const {
    getLastAntrian,
    data: dataLastAntrian,
    loading: loadingLastAntrian,
    error: errorLastAntrian
  } = useGetLastAntrian();

  const {
    insertPasien,
    loading: loadingInsert,
    data: dataInsert,
    error: errorInsert
  } = useInsertPasein();

  const [jadwal, setJadwal] = React.useState(null);

  useEffect(() => {
    getLastAntrian({ variables: { scheduleId: jadwal } });
  }, [jadwal]);

  useEffect(() => {
    console.log(dataLastAntrian);
    setLastAntrian(dataLastAntrian?.patient[0].antrian + 1);
    console.log(lastAntrian);
  }, [dataLastAntrian]);

  return (
    <Formik
      initialValues={{
        nama: '',
        nik: '',
        jenis_kelamin: '',
        no_bpjs: '',
        tempat_lahir: '',
        tanggal_lahir: null,
        no_telp: '',
        keluhan: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('kirim data');
        console.log(values);
        console.log(lastAntrian);
        insertPasien({
          variables: {
            antrian: lastAntrian,
            nama: values.nama,
            nik: values.nik.toString(),
            keluhan: values.keluhan,
            jenis_kelamin: values.jenis_kelamin,
            no_bpjs: values.no_bpjs.toString(),
            no_telp: values.no_telp,
            schedule_id: jadwal,
            tanggal_lahir: values.tanggal_lahir,
            tempat_lahir: values.tempat_lahir
          }
        });
        console.log(dataInsert);
        setIsOpen(true);
        actions.setSubmitting(false);
      }}
    >
      {(props) => (
        <Container maxW='container.xl'>
          <Center my='10'>
            <Heading size='2xl'>Daftar Ke Jadwal Dokter</Heading>
          </Center>
          <Form onSubmit={props.handleSubmit}>
            <FormControl my='3' isRequired>
              <FormLabel>Jadwal</FormLabel>
              <Select
                onChange={(e) => setJadwal(e.target.value)}
                placeholder='pilih jadwal'
              >
                {loading && <option>loading...</option>}
                {data?.schedules.map((item, key) => (
                  <option key={key} value={item.id}>
                    {item.doctor.nama} - {item.room.nama_ruangan} -{' '}
                    {item.tanggal_jaga} - {item.jam_mulai} - {item.jam_berakhir}
                  </option>
                ))}
              </Select>
              {dataLastAntrian === undefined && (
                <FormErrorMessage>Mohon Pilih Jadwal</FormErrorMessage>
              )}
            </FormControl>
            <Field name='nama'>
              {({ field, meta }) => (
                <FormControl
                  isRequired
                  isInvalid={(meta.touched || props.isSubmitting) && meta.error}
                  my='3'
                >
                  <FormLabel>Nama Pasien :</FormLabel>
                  <Input {...field} />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='jenis_kelamin'>
              {({ field, meta }) => (
                <FormControl
                  as='fieldset'
                  isRequired
                  isInvalid={(meta.touched || props.isSubmitting) && meta.error}
                  my='3'
                >
                  <FormLabel as='legend'>Jenis Kelamin :</FormLabel>
                  <RadioGroup>
                    <HStack spacing='24px'>
                      <Radio {...field} value='Pria'>
                        Pria
                      </Radio>
                      <Radio {...field} value='Wanita'>
                        Wanita
                      </Radio>
                      <Radio {...field} value='Other'>
                        Other
                      </Radio>
                    </HStack>
                  </RadioGroup>
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='nik'>
              {({ field, meta }) => (
                <FormControl
                  isRequired
                  isInvalid={(meta.touched || props.isSubmitting) && meta.error}
                  my='3'
                >
                  <FormLabel>NIK :</FormLabel>
                  <Input {...field} type='number' />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='no_bpjs'>
              {({ field, meta }) => (
                <FormControl
                  isInvalid={(meta.touched || props.isSubmitting) && meta.error}
                  my='3'
                >
                  <FormLabel>No BPJS (jika ada) :</FormLabel>
                  <Input {...field} type='number' />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='tempat_lahir'>
              {({ field, meta }) => (
                <FormControl
                  isRequired
                  isInvalid={(meta.touched || props.isSubmitting) && meta.error}
                  my='3'
                >
                  <FormLabel>Tempat Lahir :</FormLabel>
                  <Input {...field} />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='tanggal_lahir'>
              {({ field, meta }) => (
                <FormControl
                  isRequired
                  isInvalid={(meta.touched || props.isSubmitting) && meta.error}
                  my='3'
                >
                  <FormLabel>Tanggal Lahir :</FormLabel>
                  <Input type='date' {...field} />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='no_telp'>
              {({ field, meta }) => (
                <FormControl
                  isRequired
                  isInvalid={(meta.touched || props.isSubmitting) && meta.error}
                  my='3'
                >
                  <FormLabel>No Telp yang bisa dihubungi :</FormLabel>
                  <Input {...field} />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='keluhan'>
              {({ field, meta }) => (
                <FormControl
                  isRequired
                  isInvalid={(meta.touched || props.isSubmitting) && meta.error}
                  my='3'
                >
                  <FormLabel>Keluhan anda :</FormLabel>
                  <Textarea size='md' {...field} />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            {/* <FormControl id='keluhan' my='3'>
              <FormLabel>Keluhan :</FormLabel>
              <Textarea
                size='md'
                name='keluhan'
                value={formik.values.keluhan}
                onChange={formik.handleChange}
              />
            </FormControl> */}
            <Center m='10'>
              <Link href='/'>
                <Button mx='5'>Batal</Button>
              </Link>
              <Button
                bgColor='blue.400'
                color='white'
                mx='5'
                type='submit'
                isLoading={props.isSubmitting}
                // isDisabled={loadingLastAntrian ? 'true' : 'false'}
              >
                Kirim
              </Button>
            </Center>
          </Form>

          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              {loadingInsert && (
                <AlertDialogContent>
                  <AlertDialogHeader
                    fontSize='lg'
                    fontWeight='bold'
                  ></AlertDialogHeader>

                  <AlertDialogBody>loading...</AlertDialogBody>

                  <AlertDialogFooter></AlertDialogFooter>
                </AlertDialogContent>
              )}
              {errorInsert && (
                <AlertDialogContent>
                  <AlertDialogHeader
                    fontSize='lg'
                    fontWeight='bold'
                  ></AlertDialogHeader>

                  <AlertDialogBody>error!</AlertDialogBody>

                  <AlertDialogFooter></AlertDialogFooter>
                </AlertDialogContent>
              )}
              {dataInsert && (
                <AlertDialogContent>
                  <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                    Daftar Kunjungan
                  </AlertDialogHeader>

                  <AlertDialogBody>
                    Pendaftaran Kunjungan berhasil dengan no urut -{' '}
                    {lastAntrian} boleh di ss sebagai bukti
                  </AlertDialogBody>

                  <AlertDialogFooter>
                    <Link href='/'>
                      <Button bgColor='blue.400' onClick={onClose} ml={3}>
                        Home
                      </Button>
                    </Link>
                  </AlertDialogFooter>
                </AlertDialogContent>
              )}
            </AlertDialogOverlay>
          </AlertDialog>
        </Container>
      )}
    </Formik>
  );
}
