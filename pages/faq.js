import React from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/layout';
import BaseLayout from '../components/layouts/BaseLayout';
import faqData from '../components/faq-data';
import { Stack } from '@chakra-ui/react';

export default function FAQ() {
  return (
    <Box py='20'>
      <Heading>
        <title>SIC - FAQ</title>
      </Heading>
      <Container maxW='container.lg'>
        <Heading>Frequently Asked Questions</Heading>
        <Stack py='10' spacing='5'>
          {faqData.map(({ question, answer }, key) => (
            <Box key={key}>
              <Heading size='md'>Q: {question}</Heading>
              <Text>A: {answer}</Text>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

FAQ.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;
