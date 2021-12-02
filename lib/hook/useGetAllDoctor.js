import React from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_ALL_DOCTOR, GET_ALL_LIST_PATIENT } from '../graphQL/query';

export default function useGetAllDoctor() {
  const { loading, error, data } = useQuery(GET_ALL_DOCTOR);
  return { loading, error, data };
}
