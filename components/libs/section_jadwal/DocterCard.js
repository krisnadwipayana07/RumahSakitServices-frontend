import React from 'react';
import { Box, WrapItem, Avatar, Text, Button, Wrap } from '@chakra-ui/react';
import Link from 'next/link';

export default function DocterCard({ data }) {
  return (
    <Box
      borderRadius='10px'
      border='1px'
      color='gray.200'
      p='20px'
      display='inline-table'
      alignItems='center'
      m='5'
    >
      <Box p='2'>
        <Avatar size='2xl' name={data.nama} src={data.profile_pic} />
      </Box>

      <Box p='2'>
        <Text fontSize='md' lineHeight='5' fontWeight='bold' color='gray.700'>
          {data.nama}
        </Text>
        <Text
          fontSize='sm'
          lineHeight='5'
          fontWeight='semibold'
          color='gray.700'
        >
          Bidang : {data.bidang}
        </Text>
      </Box>

      <Box p='2'>
        <Link href={`/dokter/${data.id}`}>
          <Button color='white' bgColor='gray.400'>
            lihat jadwal
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
