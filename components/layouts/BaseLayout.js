import React from 'react';
import Navbar from '../navbars/Navbar';
import { Box } from '@chakra-ui/layout';
import Footer from '../footers/Footer';

export default function BaseLayout({ children }) {
  return (
    <Box as='main' pt='4'>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}
