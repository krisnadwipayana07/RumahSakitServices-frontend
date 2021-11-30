import React from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_DOCTOR_SCHEDULE } from '../graphQL/query';

export default function UseGetSchedule() {
  const { loading, error, data } = useQuery(GET_DOCTOR_SCHEDULE, {
    variables: { doctorID: localStorage.getItem('userId') },
    notifyOnNetworkStatusChange: true
  });
  console.log(localStorage.getItem('userId'));
  return {
    loading,
    error,
    data
  };
}
