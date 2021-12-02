import { Box } from '@chakra-ui/react';
import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

export default function jadwal() {
  return (
    <Box>
      <Box></Box>
    </Box>
  );
}

jadwal.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;
