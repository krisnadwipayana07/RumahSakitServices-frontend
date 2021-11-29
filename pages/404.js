import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Icon,
  Text
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Head from 'next/head';

export default function ErrorPage() {
  return (
    <Container
      maxW='container.md'
      h='100vh'
      pt='20'
      display='flex'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
      pb='60'
      textAlign='center'
    >
      <Head>
        <title>Rumah Sakit Services - 404</title>
      </Head>
      <Box w='32' h='32' position='relative'>
        <Image
          layout='fill'
          objectFit='contain'
          src='https://www.linkpicture.com/q/RUMAH-SAKIT-SERVICES-modified.png'
          alt='sic logo'
        />
      </Box>
      <Heading mt='5'>Page Not Found (404)</Heading>
      <Text>
        Mohon Maaf link yang ingin anda tuju tidak ada, Pastikan link yang ingin
        anda akses tepat
      </Text>
      <Link href='/' passHref>
        <Button
          variant='link'
          colorScheme='brand'
          as='a'
          href='/'
          rightIcon={<Icon as={FiArrowRight} />}
          mt='5'
        >
          To Homepage
        </Button>
      </Link>
    </Container>
  );
}
