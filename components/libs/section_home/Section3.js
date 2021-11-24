import {
  Heading,
  Text,
  Box,
  Container,
  Wrap,
  WrapItem,
  Image,
  useMediaQuery,
  LinkOverlay
} from '@chakra-ui/react';
import React from 'react';
import NextImage from 'next/image';

export default function Section3() {
  const [isAboveLg] = useMediaQuery('(min-width: 62em)');
  return (
    <Box py='60' backgroundColor='#495375'>
      <Container maxW='container.xl' data-aos='fade-up'>
        <Heading as='h2' size='2xl' color='white' align='center'>
          Our Startups
        </Heading>
        <Text
          fontSize='lg'
          align='center'
          color='#C7D3FC'
          mt='2'
          px={{ base: '', md: '24' }}
        >
          Through the years, our family has succeeded in creating great many
          startups together. As for today, there are two startups that is
          currently running which is founded and ran by our family.
        </Text>

        <Wrap justify='center' mt='5' spacing='10'>
          <WrapItem
            width={{ base: '100%', lg: 'auto' }}
            display='flex'
            justifyContent='center'
          >
            <Box>
              <a href='https://kuykerja.com' target='_blank'>
                <Image
                  w='100'
                  h='100'
                  borderRadius='100'
                  src='/image/Kuy_Kerja.jpg'
                />
                <Heading pt='3' color='white' size='sm' align='center'>
                  Kuy Kerja
                </Heading>
              </a>
            </Box>
          </WrapItem>
          <WrapItem
            width={{ base: '100%', lg: 'auto' }}
            display='flex'
            justifyContent='center'
          >
            <a href='https://inspix.tech' target='_blank'>
              <Box align='center'>
                <Box
                  overflow='hidden'
                  position='relative'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  borderRadius='100%'
                  backgroundColor='#fff'
                  h='100'
                  w='100'
                >
                  <NextImage
                    align='center'
                    src='/image/Inspix.jpg'
                    layout='fill'
                    objectFit='contain'
                  />
                </Box>
                <Heading pt='3' color='white' size='sm' align='center'>
                  INSPIX<Box> Technologies</Box>
                </Heading>
              </Box>
            </a>
          </WrapItem>
        </Wrap>

        {/* VERSI LAMA DIBAWAH */}
        {/* {isAboveLg && (
          <Wrap justify='center'>
            <WrapItem>
              <Box pr='10'>
                <Image
                  w='100'
                  h='100'
                  borderRadius='100'
                  src='/image/Kuy_Kerja.jpg'
                />
                <Heading pt='3' color='white' size='sm' align='center'>
                  Kuy Kerja
                </Heading>
              </Box>
              <Box align='center'>
                <Box
                  overflow='hidden'
                  position='relative'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  borderRadius='100%'
                  backgroundColor='#fff'
                  h='100'
                  w='100'
                >
                  <NextImage
                    align='center'
                    src='/image/Inspix.jpg'
                    layout='fill'
                    objectFit='contain'
                  />
                </Box>
                <Heading pt='3' color='white' size='sm' align='center'>
                  INSPIX<Box> Technologies</Box>
                </Heading>
              </Box>
            </WrapItem>
          </Wrap>
        )}
        {!isAboveLg && (
          <Box align='center'>
            <Box pb='10'>
              <Image
                w='100'
                h='100'
                borderRadius='100'
                src='/image/Kuy_Kerja.jpg'
              />
              <Heading pt='3' color='white' size='sm' align='center'>
                Kuy Kerja
              </Heading>
            </Box>
            <Box>
              <Image
                w='100'
                h='100'
                src='/image/Inspix.jpg'
                borderRadius='100'
              />
              <Heading pt='3' color='white' size='sm' align='center'>
                Inspix
              </Heading>
            </Box>
          </Box>
        )} */}
        {/* <Box
                bg='white'
                h='120'
                w='100%'
                color='white'
                borderRadius='md'
                style={{ marginRight: '5%' }}
              />
              <Box bg='white' h='120' w='10%' color='white' borderRadius='md' /> */}
      </Container>
    </Box>
  );
}
