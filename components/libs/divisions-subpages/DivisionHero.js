import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Button,
  useMediaQuery
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function DivisionHero() {
  const [isAboveMd] = useMediaQuery('(min-width: 48em)');

  return (
    <Box as='section' pb='0' pt={{ base: '40', md: '20' }} mb='20'>
      <Container maxW='container.xl' data-aos='fade-up' data-aos-offset='250'>
        <SimpleGrid columns={{ base: 1, md: 12 }}>
          <Box
            as='article'
            gridColumnStart='2'
            gridColumnEnd='7'
            display='flex'
            flexDir='column'
            justifyContent='center'
          >
            <Heading size='2xl' lineHeight='100%'>
              4 Divisions,
              <br />
              <Box as='span' color='brand.500'>
                1 Vision
              </Box>
            </Heading>
            <Text size={{ base: 'md', md: 'lg' }} fontWeight='normal' mt='5'>
              We divide experience into 4 divisions. Tech & Dev with the purpose
              to share knowledge, Engineering Division for Leading the SIC
              Immerse Projects, Graphic Design Division for creating and
              delivering design graphics for any SIC program, and Public
              Relation with a program of <i>Ngobrol Santuy</i> with an alumnus.
            </Text>

            <Box mt='5'>
              <Link href='/join' passHref>
                <Button as='a' href='/join' variant='solid' colorScheme='gray'>
                  Stay Tuned
                </Button>
              </Link>
            </Box>

            {/* {!isAboveLg && (
              <Box position='relative'>
                <Box zIndex='2'>
                  <Image
                    width='300'
                    height='225'
                    src='/assets/images/code-hero.png'
                    quality='100'
                  />
                </Box>
                <Box position='absolute' zIndex='-1' top='0' left='15'>
                  <Image
                    width='200'
                    height='200'
                    src='/assets/others/blob-01.svg'
                  />
                </Box>
              </Box>
            )} */}
          </Box>
          {isAboveMd && (
            <Box
              as='aside'
              gridColumnStart='8'
              gridColumnEnd='12'
              position='relative'
            >
              <Box zIndex='1' w='md' h='md'>
                <Image
                  layout='fill'
                  objectFit='contain'
                  src='/assets/images/code-hero-03.svg'
                  quality='100'
                />
              </Box>
            </Box>
          )}
          <Box />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
