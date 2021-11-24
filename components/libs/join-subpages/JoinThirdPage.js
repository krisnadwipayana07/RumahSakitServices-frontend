import React, { useEffect } from 'react';
import FormLayout from '../../layouts/FormLayout';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Textarea
} from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useRegistrationData } from '../providers/RegistratonProvider';

const validationSchema = Yup.object().shape({
  overallReason: Yup.string().required('mohon diisi'),
  ideasForSIC: Yup.string()
});

export default function JoinThirdPage({
  onNextButtonClick,
  onPreviousButtonClick
}) {
  const [registrationData, setRegistrationData] = useRegistrationData();

  return (
    <FormLayout paddingTop='20'>
      <Formik
        initialValues={{
          overallReason: '',
          ideasForSIC: ''
        }}
        validationSchema={validationSchema}
        validateOnMount={true}
        onSubmit={async (values) => {
          setRegistrationData({ ...registrationData, ...values });
        }}
      >
        {(props) => (
          <Form autoComplete='off' onSubmit={props.handleSubmit}>
            <Field name='overallReason'>
              {({ field, meta }) => (
                <FormControl isRequired isInvalid={meta.touched && meta.error}>
                  <FormLabel>Alasan Ingin Bergabung dengan SIC</FormLabel>
                  <Textarea {...field} resize='none' height='52' />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='ideasForSIC'>
              {({ field, meta }) => (
                <FormControl
                  isInvalid={meta.touched && meta.error}
                  marginTop='5'
                >
                  <FormLabel>Saran untuk SIC</FormLabel>
                  <Textarea {...field} resize='none' height='52' />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <FormControl mt='4'>
              <Button
                variant='solid'
                maxW='20'
                type='submit'
                disabled={props.isSubmitting || props.errors.overallReason}
                onClick={() => {
                  if (props.isValid) onNextButtonClick(props.values);
                }}
              >
                Submit
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
