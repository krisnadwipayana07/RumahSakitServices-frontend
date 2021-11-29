import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import BaseLayout from '../components/layouts/BaseLayout';
import Section1 from '../components/libs/section_home/Section1';

export default function Home() {
  return (
    <Box overflowX='hidden'>
      <Head>
        <title>Rumah Sakit Services - Home</title>
      </Head>
      <Container maxW='container.xl'>
        <Section1 />
      </Container>
    </Box>
  );
}

Home.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;
