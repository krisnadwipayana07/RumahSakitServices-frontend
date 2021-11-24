import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import BaseLayout from '../components/layouts/BaseLayout';
import Section2 from '../components/libs/section_home/Section2';

export default function Home() {
  return (
    <Box overflowX='hidden'>
      <Head>
        <title>Rumah Sakit Services - Home</title>
      </Head>
      <Container maxW='container.xl'>
        <Section2 />
      </Container>
    </Box>
  );
}

Home.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;
