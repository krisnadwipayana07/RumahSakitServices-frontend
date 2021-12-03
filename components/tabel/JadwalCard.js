import React from 'react';
import { Tr, Td, Button } from '@chakra-ui/react';
import Link from 'next/link';

export default function JadwalCard({ data }) {
  console.log('masukk');
  return (
    <Tr>
      <Td>{data.room.nama_ruangan} </Td>
      <Td>{data.tanggal_jaga}</Td>
      <Td>
        {data.jam_mulai} : {data.jam_berakhir}
      </Td>
      <Td isNumeric color='white'>
        <Link
          passHref
          href={{
            pathname: '/admin/lihat-pasien/[id]',
            query: { id: data.id }
          }}
        >
          <Button mx='3' bgColor='blue.400'>
            Lihat
          </Button>
        </Link>
        {/* <Link href='/admin/jadwal/[id]' as={`/admin/jadwal/${data.id}`}>
          <Button mx='3' bgColor='yellow.400'>
            Edit
          </Button>
        </Link> */}
        {/* <Button mx='3' bgColor='red.400'>
          Hapus
        </Button> */}
      </Td>
    </Tr>
  );
}
