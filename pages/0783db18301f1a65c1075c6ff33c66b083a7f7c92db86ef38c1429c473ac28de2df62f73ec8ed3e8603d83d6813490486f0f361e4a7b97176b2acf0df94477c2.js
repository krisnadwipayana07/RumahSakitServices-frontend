import React from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Text,
  FormControl,
  FormErrorMessage,
  Modal,
  ModalOverlay,
  Spinner,
  Center,
  ModalContent,
  useToast
} from '@chakra-ui/react';
import BaseLayout from '../components/layouts/BaseLayout';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import RegistrationApi from '../components/api/registration-api';
import Head from 'next/head';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('please input your email before submitting')
    .email('please input a proper email')
});

const mockRequest = (isTrue) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      isTrue ? res() : rej();
    }, 1000);
  });

export default function Join() {
  const toast = useToast();
  return (
    <Box py='40' h='80vh'>
      <Head>
        <title>SIC Unud - Join</title>
      </Head>
      <Container
        maxW='container.md'
        textAlign='center'
        display='flex'
        flexDir='column'
        justifyContent='center'
        alignItems='center'
        data-aos='fade-up'
        data-aos-offset='250'
      >
        <Heading>Stay Tuned for SIC Recruitment</Heading>
        <Text>
          Join our family as SIC Functionary where you could enhance yourself to
          become a better self in Hard Skills and Soft Skills as well as joining
          SIC Projects to decorate your CV for a brighter future. Please
          don&apos;t hesitate to drop your email below so that we could email
          you when the recruitment day is due.
        </Text>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            email: ''
          }}
          onSubmit={async ({ email }, { setSubmitting }) => {
            //TODO: request implementation
            try {
              await RegistrationApi.insertSubscription({ email });
              toast({
                title: 'Email sent successfully',
                description:
                  'We will make sure to email you when SIC recruitment is due!',
                status: 'success',
                position: 'bottom-right',
                isClosable: true
              });
            } catch (e) {
              console.error(e);
              toast({
                title: 'Email sent failed',
                description: 'Please let us know about this problem :(',
                status: 'error',
                position: 'bottom-right',
                isClosable: true
              });
            }
          }}
        >
          {(props) => (
            <Form style={{ width: '100%' }}>
              <Box
                display='flex'
                flexDir='column'
                justifyContent='center'
                alignItems='center'
              >
                <Field name='email'>
                  {({ field, meta }) => (
                    <FormControl
                      mt='5'
                      maxW='lg'
                      isInvalid={meta.touched && meta.error}
                    >
                      <Input
                        type='email'
                        textAlign='center'
                        placeholder='example@domain.com'
                        disabled={props.isSubmitting}
                        {...field}
                      />
                      <FormErrorMessage w='100%' textAlign='center'>
                        {meta.error}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Box>
              <Button
                colorScheme='brand'
                mt='3'
                w='44'
                type='submit'
                disabled={props.isSubmitting}
              >
                Subscribe
              </Button>

              <Modal
                closeOnOverlayClick={false}
                isOpen={props.isSubmitting}
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
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
}

Join.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;
