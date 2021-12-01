import React from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_LAST_ANTRIAN } from '../graphQL/query';

export default function useGetLastAntrian() {
  const [getLastAntrian, { loading, error, data }] =
    useLazyQuery(GET_LAST_ANTRIAN);
  return {
    getLastAntrian,
    loading,
    error,
    data
  };
}
