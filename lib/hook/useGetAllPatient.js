import React from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_ALL_LIST_PATIENT } from '../graphQL/query';

export default function UseGetAllSchedule() {
  const [getAllPatient, { loading, error, data }] =
    useLazyQuery(GET_ALL_LIST_PATIENT);
  return {
    getAllPatient,
    loading,
    error,
    data
  };
}
