import React, { useEffect, useRef, useState } from 'react';
import NavLink from 'next/link';
import {
  Box,
  Container,
  Link,
  Button,
  Icon,
  useMediaQuery,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  Text,
  Avatar,
  WrapItem,
  Heading
} from '@chakra-ui/react';

import { FiMenu } from 'react-icons/fi';
import { useRouter } from 'next/router';

export default function NavbarAdmin(props) {
  const navRef = useRef(null);
  const [isNavbarStick, setIsNavbarStick] = useState(false);
  const [isAboveMd] = useMediaQuery('(min-width: 48em)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    const scrollListener = () => {
      window.pageYOffset > 30
        ? setIsNavbarStick(true)
        : setIsNavbarStick(false);
    };
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  return (
    <Box
      id='main-nav'
      as='nav'
      position='sticky'
      w='100vw'
      h='56px'
      top='0'
      left='0'
      paddingY='4'
      boxShadow={isNavbarStick ? 'sm' : 'none'}
      bgColor='white'
      ref={navRef}
      zIndex='100'
    >
      <Container
        display='flex'
        alignItems='center'
        h='100%'
        maxW='container.xl'
        gridGap='4'
      >
        <Link as={NavLink} href='/'>
          <a>
            <Text
              fontSize='xl'
              lineHeight='7'
              fontWeight='extrabold'
              color='blue.400'
            >
              RUMAH SAKIT SERVICES
            </Text>
          </a>
        </Link>
        <Box flexGrow='1' />
        <Box display='flex' alignItems='center' gridGap='4'>
          {isAboveMd ? (
            <>
              {/* <NavLink href='/' passHref>
                <Button
                  variant='ghost'
                  fontSize='md'
                  fontWeight={router.pathname === '/' ? 'semibold' : 'normal'}
                  color='gray.500'
                  as='a'
                >
                  Home
                </Button>
              </NavLink> */}
              <NavLink href='/admin' passHref>
                <Button
                  variant='ghost'
                  fontSize='md'
                  fontWeight={
                    router.pathname.startsWith('/admin') ? 'semibold' : 'normal'
                  }
                  color='gray.500'
                  as='a'
                >
                  Jadwal Dokter
                </Button>
              </NavLink>
              <WrapItem>
                <Avatar name={props.user.name} src={props.user.image} />
              </WrapItem>
              {props.user.name}
              <Button
                variant='solid'
                bgColor='red.400'
                color='white'
                onClick={() => props.signOut()}
              >
                Logout
              </Button>
            </>
          ) : (
            <IconButton
              variant='ghost'
              onClick={onOpen}
              icon={<Icon as={FiMenu} />}
            />
          )}
        </Box>
      </Container>
      <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody display='flex' flexDirection='column'>
            <WrapItem justifyContent='center'>
              <Avatar name={props.user.name} src={props.user.image} />
            </WrapItem>
            <Text fontWeight='bold' my='2' textAlign='center'>
              {props.user.name}
            </Text>
            <NavLink href='/admin' passHref>
              <Button
                variant='ghost'
                fontSize='md'
                fontWeight={
                  router.pathname.startsWith('/admin') ? 'semibold' : 'normal'
                }
                color='gray.500'
                as='a'
              >
                Jadwal Dokter
              </Button>
            </NavLink>
            {/* <NavLink href='/dokter' passHref>
              <Button
                variant='ghost'
                fontSize='md'
                fontWeight={
                  router.pathname.startsWith('/dokter') ? 'semibold' : 'normal'
                }
                color='gray.500'
                as='a'
                href='/dokter'
              >
                Dokter
              </Button>
            </NavLink> */}
            <Button
              variant='solid'
              bgColor='red.400'
              color='white'
              onClick={() => props.signOut()}
            >
              Logout
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
