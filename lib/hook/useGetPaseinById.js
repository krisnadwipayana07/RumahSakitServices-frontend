import React from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_PATIENT_DETAIL } from '../../lib/graphQL/query';

export default function useGetPaseinById() {
  const [getPatientDetail, { loading, data, error }] =
    useLazyQuery(GET_PATIENT_DETAIL);
  return {
    getPatientDetail,
    loading,
    data,
    error
  };
}
