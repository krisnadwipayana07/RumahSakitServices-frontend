import { useSprings, animated, update } from 'react-spring';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import JoinFirstPage from '../components/libs/join-subpages/JoinFirstPage';
import JoinSecondPage from '../components/libs/join-subpages/JoinSecondPage';
import JoinThirdPage from '../components/libs/join-subpages/JoinThirdPage';
import RegistratonProvider, {
  useRegistrationData
} from '../components/libs/providers/RegistratonProvider';
import {
  Center,
  Modal,
  ModalContent,
  ModalOverlay,
  Spinner,
  useToast,
  Container,
  Box,
  Button,
  Heading,
  Text
} from '@chakra-ui/react';
import RegistrationAPI from '../components/api/registration-api';
import { useRouter } from 'next/router';
import Image from 'next/image';

const PAGE_LENGTH = 4;

export default function Index() {
  // if (typeof window === undefined) return <p>wait</p>;

  const [page, setPage] = useState(0);
  const toast = useToast();
  const router = useRouter();

  const [props, setSprings] = useSprings(PAGE_LENGTH, (i) => ({
    x: i * (typeof window !== 'undefined' ? window.innerWidth : 1920)
  }));

  const [registrationData, setRegistrationData] = useRegistrationData();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bgColor, setBgColor] = useState('linear(to-l, #63A8E7, #77C4EE)');

  useEffect(() => {
    const updateSpring = () =>
      setSprings((i) => ({ x: (i - page) * window.outerWidth }));
    if (page > 1) {
      setBgColor('#fff');
    } else {
      setTimeout(() => {
        if (page === 0 || page === 1) {
          setBgColor('linear(to-l, #63A8E7, #77C4EE)');
        } else {
          setBgColor('#fff');
        }
      }, [1000]);
    }
    window.addEventListener('resize', updateSpring);
    updateSpring();
    return () => window.removeEventListener('resize', updateSpring);
  }, [page]);

  const onSubmitData = async (values) => {
    setIsSubmitting(true);
    setRegistrationData({ ...registrationData, ...values });
    const finalRegistrationData = { ...registrationData, ...values };
    try {
      // mengirim ke backend
      await RegistrationAPI.insertCandidate(finalRegistrationData);
      toast({
        title: 'Registration success!',
        description: `Thank you ${registrationData.name} for your application to become SIC 2021/2022 Functionary!`,
        position: 'bottom-right',
        status: 'success',
        isClosable: true
      });
      router.push('/success');
    } catch (e) {
      e.response ? console.error(e.response) : console.error(e);
      toast({
        title: 'Registration failed',
        description: `Something is wrong at the registration system: ${e}`,
        position: 'bottom-right',
        status: 'error',
        isClosable: true
      });
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      style={{
        width: '100vw',
        height: '100vh',
        overflowX: 'hidden',
        position: 'absolute'
      }}
      bgGradient={bgColor}
    >
      <Head>
        <title>SIC Unud - Join</title>
      </Head>

      <animated.div
        style={{
          transform: props[0].x.to((mx) => `translate3d(${mx}px, 0, 0)`)
        }}
      >
        <Box position='absolute' width='100vw' height='100vh'>
          <Container
            maxW='container.md'
            pt={{ base: '10', md: '40' }}
            display='flex'
            flexDir='column'
            alignItems='center'
            textAlign='center'
            pb='12'
          >
            <Box h='24' w='40' pos='relative'>
              <Image
                layout='fill'
                objectFit='contain'
                src='/assets/logo/sic-logo-white.svg'
              />
            </Box>

            <Heading color='white'>Official Recruitment</Heading>
            <Text color='#F6FCFF'>
              You're one step closer to join SIC where you can enhance yourself
              for a brighter future. Feel free to use Bahasa Indonesia to fill
              the forms!
            </Text>
            <Text fontWeight='bold' color='#F6FCFF' mt='5'>
              IMPORTANT:
            </Text>
            <Text color='#F6FCFF'>
              SIC respects your privacy 100% 😄,{' '}
              <strong>
                <i>
                  <u>your name will not be listed to the public </u>
                </i>
              </strong>{' '}
              when you're applying for SIC. Communication and coordination will
              be held in private via Email or LINE/WA.
              <br />
              <br />
              Registration is open from 12 August 2021 to 16 August 2021. For
              further questions, please send us a DM at our Instagram: @sic.unud
              😄
            </Text>
            <Button
              variant='solid'
              colorScheme='whiteAlpha'
              mt='5'
              onClick={() => setPage(1)}
            >
              Start
            </Button>
          </Container>
        </Box>
      </animated.div>

      <animated.div
        style={{
          position: 'absolute',
          width: '100vw',
          minHeight: '100vh',
          backgroundColor: '#fff',
          transform: props[1].x.to((mx) => `translate3d(${mx}px, 0, 0)`)
        }}
      >
        <JoinFirstPage onNextButtonClick={() => setPage(2)} />
      </animated.div>
      <animated.div
        style={{
          position: 'absolute',
          width: '100vw',
          height: '100vh',
          overflowY: props[2].x.to((mx) => (mx === 0 ? 'overlay' : 'hidden')),
          paddingBottom: '2rem',
          backgroundColor: '#fff',
          transform: props[2].x.to((mx) => `translate3d(${mx}px, 0, 0)`)
        }}
      >
        <JoinSecondPage
          onNextButtonClick={() => setPage(3)}
          onPreviousButtonClick={() => setPage(1)}
        />
      </animated.div>
      <animated.div
        style={{
          position: 'absolute',
          width: '100vw',
          height: '100vh',
          overflowY: props[3].x.to((mx) => (mx === 0 ? 'overlay' : 'hidden')),
          paddingBottom: '2rem',
          backgroundColor: '#fff',
          transform: props[3].x.to((mx) => `translate3d(${mx}px, 0, 0)`)
        }}
      >
        <JoinThirdPage
          onPreviousButtonClick={() => setPage(2)}
          onNextButtonClick={onSubmitData}
        />
      </animated.div>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isSubmitting}
        onClose={() => {}}
        isCentered
      >
        <ModalOverlay />
        <ModalContent backgroundColor='unset' boxShadow='unset'>
          <Center>
            <Spinner color='white' size='xl' />
          </Center>
        </ModalContent>
      </Modal>
    </Box>
  );
}

Index.getLayout = (page) => <RegistratonProvider>{page}</RegistratonProvider>;
