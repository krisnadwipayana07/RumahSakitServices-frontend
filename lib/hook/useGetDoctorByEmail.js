import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_DOCTOR_BY_EMAIL } from '../graphQL/query';

export default function useGetDoctorByEmail() {
  const [getDoctorEmail, { loading, error, data }] =
    useLazyQuery(GET_DOCTOR_BY_EMAIL);
  return {
    getDoctorEmail,
    loading,
    error,
    data
  };
}
