import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

export default function InternCard({
  name,
  role,
  photo,
  companyPhoto,
  description
}) {
  return (
    <Box
      w={{ base: '80', sm: 'md' }}
      px='8'
      pt='20'
      pb='10'
      bg='white'
      borderRadius='md'
      boxShadow='md'
      position='relative'
      display='flex'
      alignItems='center'
      flexDir='column'
      borderTopWidth='4px'
      borderTopColor='brand.500'
      height={{ base: 'auto', sm: 'xl' }}
    >
      <Box
        position='absolute'
        top='-12'
        width='28'
        height='28'
        borderRadius='100%'
        backgroundColor='gray.500'
        overflow='hidden'
        borderWidth='4px'
        borderColor='brand.500'
      >
        <Image
          layout='fill'
          objectFit='cover'
          src={`/assets/images/members/${photo}`}
          priority
          quality='100'
        />
      </Box>
      <Heading as='p' size='md' textAlign='center' color='gray.700' mt='4'>
        {name}
      </Heading>
      <Text color='gray.700' textAlign='center'>
        {role}
      </Text>
      <Box w='100%' pos='relative' h='10'>
        <Image
          layout='fill'
          objectFit='contain'
          src={`/assets/images/companies/${companyPhoto}`}
          priority
          quality='100'
        />
      </Box>
      <Text mt='4'>{description}</Text>
    </Box>
  );
}
