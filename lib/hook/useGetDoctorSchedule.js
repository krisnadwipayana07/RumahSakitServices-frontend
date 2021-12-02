import React from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_DOCTOR_SCHEDULE, GET_DOCTOR_SCHEDULE_PK } from '../graphQL/query';

export default function UseGetDoctorSchedule() {
  const [getDoctorSchedule, { loading, error, data }] = useLazyQuery(
    GET_DOCTOR_SCHEDULE_PK
  );
  return {
    getDoctorSchedule,
    loading,
    error,
    data
  };
}
