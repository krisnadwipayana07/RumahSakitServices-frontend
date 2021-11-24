import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import BaseLayout from '../components/layouts/BaseLayout';
import Section1 from '../components/libs/section_home/Section1';
import Section2 from '../components/libs/section_home/Section2';
import Section3 from '../components/libs/section_home/Section3';
import Section4 from '../components/libs/section_home/Section4';
import Section5 from '../components/libs/section_home/Section5';
import SectionInterns from '../components/libs/section_home/SectionInterns';

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
