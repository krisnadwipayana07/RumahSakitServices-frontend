import React from 'react';
import { Box, WrapItem, Avatar, Text, Button, Wrap } from '@chakra-ui/react';
import Link from 'next/link';

export default function ScheduleCard({ data, user }) {
  return (
    <Box
      borderRadius='10px'
      border='1px'
      color='gray.200'
      p='20px'
      display='flex'
      flexDir='column'
      alignItems='center'
      m='5'
    >
      <Box p='2'>
        <Avatar size='2xl' name={user?.nama} src={user?.profile_pic} />
      </Box>

      <Box p='2' textAlign='center'>
        <Text fontSize='md' lineHeight='5' fontWeight='bold' color='gray.700'>
          {user?.nama}
        </Text>
        <Text
          fontSize='sm'
          lineHeight='5'
          fontWeight='semibold'
          color='gray.700'
        >
          {data?.room.nama_ruangan}
        </Text>
        <Text
          fontSize='sm'
          lineHeight='5'
          fontWeight='semibold'
          color='gray.700'
        >
          {data?.tanggal_jaga} / {data?.jam_mulai.slice(0, 5)} :
          {data?.jam_berakhir.slice(0, 5)}
        </Text>
      </Box>

      <Box p='2'>
        <Link href={`/jadwal/${data?.id}`} passHref>
          <Button color='white' bgColor='gray.400'>
            lihat jadwal
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
