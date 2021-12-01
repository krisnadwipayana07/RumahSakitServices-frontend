import React from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_ALL_LIST_PATIENT, GET_ALL_SCHEDULE } from '../graphQL/query';

export default function UseGetAllSchedule() {
  const { loading, error, data } = useQuery(GET_ALL_SCHEDULE);
  return {
    // getAllSchedule,
    loading,
    error,
    data
  };
}
