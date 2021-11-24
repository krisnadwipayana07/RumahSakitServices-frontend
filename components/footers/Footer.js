import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  IconButton,
  Icon,
  StackItem,
  Divider
} from '@chakra-ui/react';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <Box as='footer' w='100vw' bgColor='gray.50' py='4'>
      <Container maxW='container.xl'>
        <Stack>
          <StackItem display='flex' alignItems='center'>
            <Text size='lg' color='gray.700' d='inline-block'>
              Follow Us
            </Text>
            <Link passHref href='https://www.instagram.com/sic.unud/'>
              <IconButton
                variant='link'
                icon={<Icon as={AiFillInstagram} />}
                as='a'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.instagram.com/sic.unud/'
              />
            </Link>
            <Link
              passHref
              href='https://www.linkedin.com/company/student-innovation-centre'
            >
              <IconButton
                variant='link'
                icon={<Icon as={AiFillLinkedin} />}
                as='a'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/company/student-innovation-centre'
              />
            </Link>
          </StackItem>
          <StackItem>
            <Text size='lg' color='gray.700' d='inline-block'>
              Visit Us
            </Text>
            <Text size='lg' color='gray.500' d='inline-block' ml='4'>
              Sekretariat SIC, Gedung BD Lt. 2, Informatika FMIPA Udayana
            </Text>
          </StackItem>
          <StackItem>
            <Text size='lg' color='gray.700' d='inline-block'>
              Contact Us
            </Text>
            <Text size='lg' color='gray.500' d='inline-block' ml='4'>
              +62 8776 0462 483
            </Text>
          </StackItem>
          <Divider height='4' opacity='1' colorScheme='blackAlpha' />
          <StackItem>
            <Text>
              © Student Innovation Centre All rights reserved. Website by SIC
              2021/2022 (generation 2019).
            </Text>
          </StackItem>
        </Stack>
      </Container>
    </Box>
  );
}
