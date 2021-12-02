import React, { useState, useEffect } from 'react';
import useGetSheduleId from '../../../lib/hook/useGetSheduleId';
import { Center, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import AdminBaseLayout from '../../../components/layouts/AdminBaseLayout';

export default function EditJadwal() {
  const router = useRouter();
  const { id } = router.query;
  const { getScheduleDetail, data, loading, error } = useGetSheduleId();

  const [edit, setEdit] = useState(false);
  if (loading) {
    <Center>Loading...</Center>;
  }

  useEffect(() => {
    getScheduleDetail({ variables: { id: id } });
  }, [id]);

  return <Box></Box>;
}

// EditJadwal.getLayout = page = <AdminBaseLayout> {page} </AdminBaseLayout>;
