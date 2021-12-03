import { Avatar } from '@chakra-ui/avatar';
import { Box, Center, Heading, Text } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import BaseLayout from '../../components/layouts/BaseLayout';
import UseGetDoctorSchedule from '../../lib/hook/useGetDoctorSchedule';
import { useRouter } from 'next/router';
import ScheduleCard from '../../components/libs/section_detail/ScheduleCard';

export default function Jadwal() {
  const router = useRouter();
  const { id } = router.query;

  const [isAboveMd] = useMediaQuery('(min-width: 48em)');
  const { getDoctorSchedule, data, error, loading } = UseGetDoctorSchedule();

  useEffect(() => {
    getDoctorSchedule({ variables: { id: id } });
    console.log(data);
  }, [id, data]);

  if (loading) {
    <p>loading...</p>;
  }

  if (data?.doctor === []) {
    <Box
      position='fixed'
      top='50%'
      left='50%'
      transform='translate(-50%, -50%)'
    >
      <Heading textAlign='center' my='3'>
        Mohon maaf data tidak ditemukan
      </Heading>
    </Box>;
  }
  return (
    <Box>
      <Center m='2'>
        <Avatar
          size='2xl'
          name={data?.doctor[0].nama}
          src={data?.doctor[0].profile_pic}
        />
      </Center>
      <Center m='2'>
        <Text fontSize='4xl' fontWeight='bold' lineHeight='10' color='black'>
          {data?.doctor[0].nama}
        </Text>
      </Center>
      <Center>
        <Text
          fontSize='lg'
          fontWeight='semibold'
          lineHeight='7'
          color='gray.700'
        >
          bidang : {data?.doctor[0].bidang}
        </Text>
      </Center>
      <Box
        borderRadius='25px'
        border='1px'
        color='gray.200'
        p='24px'
        mx={isAboveMd ? '32' : '0'}
        my='2'
        bor
      >
        <Text fontSize='md' fontWeight='medium' lineHeight='6' color='gray.700'>
          Bio :{data?.doctor[0].bio}
        </Text>
      </Box>
      <Center m='10'>
        <Heading color='blue.400'> Jadwal Dokter</Heading>
      </Center>
      {data?.doctor[0].schedules.map((item, key) => (
        <ScheduleCard key={key} data={item} user={data?.doctor[0]} />
      ))}
    </Box>
  );
}

Jadwal.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;
