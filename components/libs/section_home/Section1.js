import {
  Button,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Box,
  useMediaQuery
} from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Section1() {
  const [isAboveLg] = useMediaQuery('(min-width: 62em)');

  return (
    <Box py='40'>
      <SimpleGrid columns={{ base: 1, lg: 12 }} data-aos='fade-up'>
        <GridItem colStart={2} colEnd={7}>
          <Heading size='2xl'>
            Together, Build The Future with{' '}
            <Box as='span' color='brand.500'>
              SIC
            </Box>
          </Heading>
          <Text fontSize='lg' fontWeight='normal' mt='5'>
            We're at an exciting point in computing history, where we're
            committed to finding the best way to share knowledge about
            technology. We'll do our best to guide our members for a brighter
            future through projects, sharing sessions, studying, and discussing
            computer-science-relevant topics together.
          </Text>
          {/* <Text fontSize='lg' fontWeight='normal' mt='5'>
            We&apos;re at exciting point in computing history, the computing
            revolution is already under way, and we`re proud to be part of it.
            Here at, Student Innovation Centre (SIC) we&apos;re committed to
            find the best way to share knowledge about technology and any other
            relevant course work in computer science.
          </Text> */}
          {/* {!isAboveLg && (
            <Box position='relative'>
              <Box
                zIndex='2'
                position='relative'
                width='64'
                height='64'
                my='10'
              >
                <Image
                  src='/image/sic-logo-final.png'
                  quality='100'
                  layout='fill'
                  objectFit='contain'
                  objectPosition='left'
                />
              </Box>
            </Box>
          )} */}
          <Box mt='5'>
            <Link passHref href='/#features'>
              <Button as='a' href='/#features' colorScheme='brand'>
                Get Started
              </Button>
            </Link>
            {/* <Link passHref href='/join'>
              <Button as='a' href='/join' ml='2'>
                Join
              </Button>
            </Link> */}
          </Box>
        </GridItem>
        {isAboveLg && (
          <GridItem colStart='8' colEnd='11'>
            <Box as='aside' position='relative'>
              <Box position='absolute' zIndex='1' left='6'>
                <Box w='64' h='64'>
                  <Image
                    src='/image/sic-logo-final.png'
                    quality='100'
                    layout='fill'
                    objectFit='contain'
                  />
                </Box>
              </Box>
              <Box position='absolute' zIndex='0' top='0' left='15'>
                <Image width='400' height='400' src='/vektor/Blob.svg' />
              </Box>
            </Box>
          </GridItem>
        )}
      </SimpleGrid>
    </Box>
  );
}
