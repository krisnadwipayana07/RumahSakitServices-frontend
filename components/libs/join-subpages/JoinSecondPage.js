import React, { useEffect } from 'react';
import FormLayout from '../../layouts/FormLayout';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Button,
  Textarea,
  Checkbox
} from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useRegistrationData } from '../providers/RegistratonProvider';

const validationSchema = Yup.object().shape({
  choice1: Yup.string().required('mohon diisi'),
  choice1Reason: Yup.string().required('mohon diisi'),
  choice2: Yup.string().required('mohon diisi'),
  choice2Reason: Yup.string().required('mohon diisi'),
  otherDivision: Yup.boolean()
});

export default function JoinSecondPage({
  onNextButtonClick,
  onPreviousButtonClick
}) {
  const [registrationdata, setRegistrationData] = useRegistrationData();

  return (
    <FormLayout paddingTop='20'>
      <Formik
        initialValues={{
          choice1: '',
          choice1Reason: '',
          choice2: '',
          choice2Reason: '',
          otherDivision: false
        }}
        validationSchema={validationSchema}
        validateOnMount={true}
        onSubmit={async (values) => {
          setRegistrationData({ ...registrationdata, ...values });
        }}
      >
        {(props) => (
          <Form autoComplete='off' onSubmit={props.handleSubmit}>
            <Field name='choice1' as='select'>
              {({ field, meta }) => (
                <FormControl isRequired isInvalid={meta.touched && meta.error}>
                  <FormLabel>Pilihan 1</FormLabel>
                  <Select {...field} placeholder='Pilih Divisi'>
                    <option>Engineering</option>
                    <option>Tech & Dev</option>
                    <option>Graphic Design</option>
                    <option>Public Relations</option>
                  </Select>
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='choice1Reason'>
              {({ field, meta }) => (
                <FormControl
                  isRequired
                  isInvalid={meta.touched && meta.error}
                  marginTop='5'
                >
                  <FormLabel>Alasan Pilihan 1</FormLabel>
                  <Textarea {...field} resize='none' height='52' />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='choice2' as='select'>
              {({ field, meta }) => (
                <FormControl
                  isRequired
                  isInvalid={meta.touched && meta.error}
                  marginTop='5'
                >
                  <FormLabel>Pilihan 2</FormLabel>
                  <Select {...field} placeholder='Pilih Divisi'>
                    <option>Engineering</option>
                    <option>Tech & Dev</option>
                    <option>Graphic Design</option>
                    <option>Public Relations</option>
                  </Select>
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='choice2Reason'>
              {({ field, meta }) => (
                <FormControl
                  isRequired
                  isInvalid={meta.touched && meta.error}
                  marginTop='5'
                >
                  <FormLabel>Alasan Pilihan 2</FormLabel>
                  <Textarea {...field} resize='none' height='52' />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='otherDivision'>
              {({ field, meta }) => (
                <FormControl
                  isInvalid={meta.touched && meta.error}
                  marginTop='5'
                >
                  <FormLabel>Bersedia Ditempatkan di Divisi Lain</FormLabel>
                  <Checkbox {...field} />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <FormControl mt='4'>
              <Button
                variant='solid'
                maxW='20'
                type='submit'
                disabled={
                  props.isSubmitting ||
                  props.errors.choice1 ||
                  props.errors.choice1Reason ||
                  props.errors.choice2 ||
                  props.errors.choice2Reason
                }
                onClick={() => {
                  if (props.isValid) onNextButtonClick();
                }}
              >
                Next
              </Button>
              <Button
                variant='ghost'
                maxW='20'
                ml='2'
                type='submit'
                onClick={onPreviousButtonClick}
              >
                Previous
              </Button>
            </FormControl>
          </Form>
        )}
      </Formik>
    </FormLayout>
  );
}
