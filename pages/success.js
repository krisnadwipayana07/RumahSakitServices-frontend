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

export default function Success() {
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
        <title>SIC Unud - Success</title>
      </Head>
      <Box w='32' h='32' position='relative'>
        <Image
          layout='fill'
          objectFit='contain'
          src='/image/sic-logo-final.png'
          alt='sic logo'
        />
      </Box>
      <Heading mt='5'>Thank You For Your Application!</Heading>
      <Text>
        You&apos;re one step closer to become a part of SIC Functionary where
        you could enhance yourself to become a better self in Hard Skills and
        Soft Skills for a brighter future! <br />
        <br /> We will email you shortly for further steps 😄
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
          To SIC Main Page
        </Button>
      </Link>
    </Container>
  );
}
