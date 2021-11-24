import {
  Heading,
  SimpleGrid,
  GridItem,
  Text,
  Button,
  Box,
  Image,
  useMediaQuery
} from '@chakra-ui/react';
import React from 'react';
import NextImage from 'next/image';

export default function Section2() {
  const [isAboveMd] = useMediaQuery('(min-width: 48em)');
  return (
    <Box id='features' py='40'>
      <div style={{ textAlign: 'center' }} data-aos='fade-up'>
        <Image
          src='https://www.linkpicture.com/q/RUMAH-SAKIT-SERVICES-modified.png'
          alt='rumah sakit services logo'
          width='40'
          marginLeft='auto'
          marginRight='auto'
          marginBottom='5'
        />
        <Heading as='h2' size='4xl'>
          Rumah Sakit Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 12 }}>
          <GridItem colStart={4} colEnd={10}>
            <Text fontSize='lg' mt='2'>
              Services <b>Rumah Sakit</b> berbasis web agar memudahkan para user
              dalam menggunakannya dimanapun kapanpun...
            </Text>
          </GridItem>
        </SimpleGrid>
      </div>

      <Box pt='10' mt='40'>
        <SimpleGrid
          columns={{ base: 1, md: 12 }}
          data-aos='fade-up'
          data-aos-offset='250'
        >
          <GridItem
            colStart='2'
            colEnd='6'
            display='flex'
            flexDir='column'
            justifyContent='center'
          >
            <Heading size='lg'>Jadwal Dokter</Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} mt='2'>
              Lihat langsung jadwal - jadwal yang ada yang telah dibuat oleh
              dokter tersebut. jadi memudahkan para <b>Pasien</b> dalam mencari
              jadwal yang telah dokter sediakan secara langsung
            </Text>
            {!isAboveMd && (
              <Box zIndex='2' position='relative' mt={{ base: '5', md: '0' }}>
                {/* <Image
                  src='/assets/others/immerse-art.svg'
                  quality='100'
                  objectFit='contain'
                  objectPosition='left'
                /> */}
              </Box>
            )}
          </GridItem>
          {isAboveMd && (
            <GridItem colStart='8' colEnd='12'>
              <Box as='aside' position='relative'>
                <Box w='md' h='md'>
                  {/* <NextImage
                    src='/assets/others/immerse-art.svg'
                    quality='100'
                    layout='fill'
                    objectFit='contain'
                  /> */}
                </Box>
              </Box>
            </GridItem>
          )}
        </SimpleGrid>
      </Box>

      <Box pt='10' mt='10'>
        <SimpleGrid
          columns={{ base: '1', md: '12' }}
          data-aos='fade-up'
          data-aos-offset='250'
        >
          <GridItem
            colStart={{ base: '1', md: '7' }}
            colEnd={{ base: '1', md: '12' }}
            display='flex'
            flexDir='column'
            justifyContent='center'
          >
            <Heading size='lg'>Live antrian</Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} mt='2'>
              Pasien dapat melihat antrian yang sedang berlangsung secara{' '}
              <b>Live</b> atau <b>Langsung</b> dari mana-pun dan kapanpun pasien
              ingin melihatnya
            </Text>
          </GridItem>
          <GridItem
            rowStart={{ base: '2', md: '1' }}
            colStart={{ base: '1' }}
            colEnd={{ base: '1', md: '6' }}
          >
            <Box as='aside' position='relative' mt={{ base: '5', md: '0' }}>
              <Box w={{ base: '44', md: 'md' }} h={{ base: '44', md: 'md' }}>
                <NextImage
                  src='/assets/others/groups-art.svg'
                  quality='100'
                  layout='fill'
                  objectFit='contain'
                  objectPosition='left'
                />
              </Box>
            </Box>
          </GridItem>
          {/* <GridItem colStart='2' colEnd='6'>
            <Box>
              <Heading size='lg'>Career-Focused Group Discussion</Heading>
              <Text fontSize='lg' mt='2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
                rerum sint voluptatem fugit voluptatum nostrum saepe vitae
                repellendus ratione, illo velit soluta perspiciatis, molestias
                debitis aliquam suscipit. Culpa, nesciunt nobis.
              </Text>
            </Box>
            {!isAboveLg && (
              <Box zIndex='2'>
                <Image
                  src='/image/discussion.png'
                  quality='100'
                  w='320'
                  h='180'
                  objectFit='contain'
                  objectPosition='left'
                />
              </Box>
            )}
            {isAboveLg && (
              <Box as='aside' position='relative'>
                <Box position='absolute' zIndex='2'>
                  <Image
                    src='/image/discussion.png'
                    quality='100'
                    w='320'
                    h='180'
                    objectFit='contain'
                    objectPosition='left'
                  />
                </Box>
                <Box position='absolute' zIndex='0' top='-32' left='0'>
                  <Image width='100%' height='100%' src='/vektor/Blob3.svg' />
                </Box>
              </Box>
            )}
          </GridItem>
          {isAboveLg && (
            <GridItem colStart='7' colEnd='12'>
              <Heading size='lg'>Career-Focused Group Discussion</Heading>
              <Text fontSize='lg' mt='2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
                rerum sint voluptatem fugit voluptatum nostrum saepe vitae
                repellendus ratione, illo velit soluta perspiciatis, molestias
                debitis aliquam suscipit. Culpa, nesciunt nobis.{' '}
              </Text>
            </GridItem>
          )} */}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
