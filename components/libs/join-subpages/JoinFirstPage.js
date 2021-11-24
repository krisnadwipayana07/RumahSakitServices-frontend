import React from 'react';
import FormLayout from '../../layouts/FormLayout';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Select,
  Button
} from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useRegistrationData } from '../providers/RegistratonProvider';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('mohon isi email anda')
    .email('mohon masukkan email yang tepat'),
  name: Yup.string().required('mohon isi nama anda'),
  nim: Yup.string().required('mohon isi nim anda'),
  lineWa: Yup.string().required('mohon isi line dan/atau wa anda'),
  joinedYear: Yup.string().required('mohon isi angkatan anda')
});

export default function JoinFirstPage({ onNextButtonClick }) {
  const [registrationData, setRegistrationData] = useRegistrationData();

  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        nim: '',
        lineWa: '',
        joinedYear: ''
      }}
      validationSchema={validationSchema}
      validateOnMount={true}
      onSubmit={async ({ nim, ...values }) => {
        setRegistrationData({
          ...registrationData,
          ...values,
          nim: nim.toString()
        });
      }}
    >
      {(props) => (
        <FormLayout paddingTop={{ base: '14', md: '32' }}>
          <Form autoComplete='off' onSubmit={props.handleSubmit}>
            <Field name='email'>
              {({ field, meta }) => (
                <FormControl
                  isRequired
                  isInvalid={(meta.touched || props.isSubmitting) && meta.error}
                >
                  <FormLabel>Email</FormLabel>
                  <Input {...field} />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='name'>
              {({ field, meta }) => (
                <FormControl
                  isRequired
                  isInvalid={(meta.touched || props.isSubmitting) && meta.error}
                  marginTop='5'
                >
                  <FormLabel>Nama Lengkap</FormLabel>
                  <Input {...field} />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='nim'>
              {({ field, meta }) => (
                <FormControl
                  isRequired
                  isInvalid={(meta.touched || props.isSubmitting) && meta.error}
                  marginTop='5'
                >
                  <FormLabel>NIM</FormLabel>
                  <Input {...field} type='number' appearance='none' />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='lineWa'>
              {({ field, meta }) => (
                <FormControl
                  isRequired
                  isInvalid={(meta.touched || props.isSubmitting) && meta.error}
                  marginTop='5'
                >
                  <FormLabel>ID Line / WA</FormLabel>
                  <Input {...field} appearance='none' />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='joinedYear' as='select'>
              {({ field, meta }) => (
                <FormControl
                  isRequired
                  isInvalid={meta.touched && meta.error}
                  marginTop='5'
                >
                  <FormLabel>Angkatan</FormLabel>
                  <Select {...field} placeholder='Pilih Angkatan'>
                    <option>2019</option>
                    <option>2020</option>
                  </Select>
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              variant='solid'
              maxW='20'
              mt='4'
              type='submit'
              disabled={
                props.isSubmitting ||
                props.errors.email ||
                props.errors.joinedYear ||
                props.errors.name ||
                props.errors.nim
              }
              onClick={() => {
                if (props.isValid) onNextButtonClick();
              }}
            >
              Next
            </Button>
          </Form>
        </FormLayout>
      )}
    </Formik>
  );
}
