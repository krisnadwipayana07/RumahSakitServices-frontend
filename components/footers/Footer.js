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
          <StackItem>
            <Text size='lg' color='gray.700' d='inline-block'>
              Visit Us
            </Text>
            <Text size='lg' color='gray.500' d='inline-block' ml='4'>
              Jln. Mundeh No.1, Br. Dauhuma Bitera, Gianyar, Bali
            </Text>
          </StackItem>
          <StackItem>
            <Text size='lg' color='gray.700' d='inline-block'>
              Contact Us
            </Text>
            <Text size='lg' color='gray.500' d='inline-block' ml='4'>
              +62 878 6163 6910
            </Text>
          </StackItem>
          <Divider height='4' opacity='1' colorScheme='blackAlpha' />
          <StackItem>
            <Text>Copyright © Rumah Sakit Services All rights reserved.</Text>
          </StackItem>
        </Stack>
      </Container>
    </Box>
  );
}
