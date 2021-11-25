import { Box } from '@chakra-ui/layout';
import React from 'react';
import NavbarAdmin from '../navbars/NavbarAdmin';

export default function AdminBaseLayout({ children }) {
  return (
    <Box as='main' pt='4'>
      <NavbarAdmin />
      {children}
    </Box>
  );
}
