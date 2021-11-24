import { AiOutlineArrowRight } from 'react-icons/ai';
import { Box, Heading, Text, Button, Icon } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectPreview({
  title,
  shortDescription,
  projectId,
  previewImage
}) {
  return (
    <Box
      borderRadius='md'
      backgroundColor='white'
      boxShadow='md'
      width='80'
      height='md'
      overflow='hidden'
    >
      <Box height='40' backgroundColor='gray' overflow='hidden' pos='relative'>
        {previewImage && (
          <Image layout='fill' objectFit='cover' src={previewImage} />
        )}
      </Box>
      <Box overflow='hidden' px='5' pt='5' pb='10' color='white'>
        <Heading size='md'>{title}</Heading>
        <Text height='48' overflowY='hidden'>
          {shortDescription}
        </Text>
        <Link href={`/projects/${projectId}`} passHref>
          <Button
            as='a'
            href={`/projects/${projectId}`}
            variant='link'
            colorScheme='brand'
            p='0'
            rightIcon={<Icon as={AiOutlineArrowRight} />}
          >
            View More
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
