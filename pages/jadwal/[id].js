import { Avatar } from '@chakra-ui/avatar';
import {
  Box,
  Container,
  Text,
  Center,
  Stack,
  Wrap,
  Heading
} from '@chakra-ui/layout';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import React, { useEffect } from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import { useSubscription } from '@apollo/client';
import { useRouter } from 'next/router';
import { GET_SCHEDULE_DETAIL } from '../../lib/graphQL/subscribition';

export default function Jadwal() {
  const router = useRouter();
  const { id } = router.query;
  const [isAboveMd] = useMediaQuery('(min-width: 48em)');

  const { loading, error, data } = useSubscription(GET_SCHEDULE_DETAIL, {
    variables: { id: id }
  });

  if (loading) {
    <Box
      position='fixed'
      top='50%'
      left='50%'
      transform='translate(-50%, -50%)'
    >
      <Heading textAlign='center' my='3'>
        loading...
      </Heading>
    </Box>;
  }

  return (
    <Box mx={isAboveMd ? '36' : '0'}>
      <Box bgColor='gray.400' my='5' p='10' color='white' borderRadius='20'>
        <Stack spacing='5'>
          <Center>
            <Text
              fontSize='lg'
              lineHeight='7'
              fontWeight='extrabold'
              color='white'
            >
              {data?.schedules[0].tanggal_jaga}/{data?.schedules[0].jam_mulai} -{' '}
              {data?.schedules[0].jam_berakhir}
            </Text>
          </Center>
          <Center>
            <Text
              fontSize='4xl'
              lineHeight='10'
              fontWeight='bold'
              color='white'
            >
              Antrian Ke - {data?.schedules[0].patients[0].antrian}
            </Text>
          </Center>
          <Center>
            <Text
              fontSize='lg'
              lineHeight='7'
              fontWeight='extrabold'
              color='white'
            >
              Sisa Antrian :{' '}
              {data?.schedules[0].patients_aggregate.aggregate.count}
            </Text>
          </Center>
        </Stack>
      </Box>
      <Box borderRadius='25px' border='1px' color='gray.200' p='24px' my='2'>
        <Wrap>
          <Box>
            <Avatar
              size='xl'
              name={data?.schedules[0].doctor.nama}
              src={data?.schedules[0].doctor.profile_pic}
            />
          </Box>

          <Stack spacing='2' p='3' my='2'>
            <Text
              fontSize='4xl'
              lineHeight='5'
              fontWeight='bold'
              color='gray.700'
            >
              {data?.schedules[0].doctor.nama}
            </Text>
            <Text
              fontSize='lg'
              lineHeight='7'
              fontWeight='semibold'
              color='gray.700'
            >
              Bidang : {data?.schedules[0].doctor.bidang}
            </Text>
          </Stack>
        </Wrap>
        <Text
          fontSize='md'
          fontWeight='medium'
          lineHeight='6'
          color='gray.700'
          my='2'
        >
          Bio : {data?.schedules[0].doctor.bio}
        </Text>
      </Box>
      <Center>
        <Heading color='blue.400' m='10'>
          Antrian Yang Terdaftar
        </Heading>
      </Center>

      <Box borderRadius='25px' border='1px' p='24px' my='2'>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>ANTRIAN</Th>
              <Th>NAMA PASIEN</Th>
              <Th>KELUHAN</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.schedules[0].patients.map((item, key) => (
              <Tr key={key}>
                <Td>{item.antrian}</Td>
                <Td>{item.nama}</Td>
                <Td>{item.keluhan}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}

Jadwal.getLayout = (page) => <BaseLayout> {page} </BaseLayout>;
