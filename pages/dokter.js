import React, { useEffect } from 'react';
import {
  Box,
  Center,
  useMediaQuery,
  Heading,
  WrapItem,
  Avatar,
  SimpleGrid,
  GridItem,
  Text,
  Button
} from '@chakra-ui/react';
import BaseLayout from '../components/layouts/BaseLayout';
import DocterCard from '../components/libs/section_jadwal/DocterCard';
import useGetAllDoctor from '../lib/hook/useGetAllDoctor';

export default function Dokter() {
  const [isAboveMd] = useMediaQuery('(min-width: 48em)');
  const { loading, data, error } = useGetAllDoctor();
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Box p='5'>
      <Box color='gray.200' p='24px' mx={isAboveMd ? '32' : '0'} my='2'>
        <Center mb='7'>
          <Heading>{'Dokter '} </Heading>
          <Heading color='white'>s</Heading>
          <Heading color='blue.400'>{''} Rumah Sakit</Heading>
        </Center>
        {loading && <p>loading...</p>}
        {error && (
          <p>pardon the interuption, gagal mengambil data silahkan refresh</p>
        )}
        {data?.doctor.map((item, key) => (
          <DocterCard data={item} key={key} />
        ))}
      </Box>
    </Box>
  );
}

Dokter.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;
