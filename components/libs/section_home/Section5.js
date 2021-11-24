import {
  Heading,
  SimpleGrid,
  GridItem,
  Text,
  Box,
  Center,
  Container,
  Button
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

export default function Section5() {
  return (
    <Box py='60' backgroundColor='#495375'>
      <Container
        maxW='container.lg'
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDir='column'
        data-aos='fade-up'
      >
        <Heading as='h2' size='2xl' align='center' color='white'>
          Stay Tuned for SIC 2021 Recruitment
        </Heading>
        <Text
          fontSize='lg'
          align='center'
          color='#C7D3FC'
          mt='2'
          maxW='container.md'
        >
          Stay tuned to join our family and enhance yourself to become a better
          person in the terms of hard skills and soft skills.
        </Text>

        <Box>
          {/* <Link href='/join' passHref>
            <Button
              as='a'
              href='/join'
              variant='solid'
              colorScheme='brand'
              mt='5'
            >
              Join
            </Button>
          </Link> */}
          <Link href='/faq' passHref>
            <Button ml='5' as='a' href='/faq' variant='solid' mt='5'>
              FaQ
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
