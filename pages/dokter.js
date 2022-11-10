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
  Button,
  Grid
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
    <Box p='5' minH='76vh'>
      <Box color='gray.200' p='24px' mx={isAboveMd ? '32' : '0'} my='2'>
        <Center mb='7'>
          <Text fontWeight={700} fontSize='4xl'>
            Dokter
            <span style={{ color: '#4299e1' }}> Rumah Sakit</span>
          </Text>
        </Center>
        {loading && <p>loading...</p>}
        {error && (
          <p>pardon the interuption, gagal mengambil data silahkan refresh</p>
        )}
        <SimpleGrid columns={[1, 2, null, null, 4, 5]}>
          {data?.doctor.map((item, key) => (
            <DocterCard data={item} key={key} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

Dokter.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;
