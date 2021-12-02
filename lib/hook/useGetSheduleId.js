import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_SCHEDULE_ID } from '../graphQL/query';

export default function useGetSheduleId() {
  const [getScheduleDetail, { loading, error, data }] =
    useLazyQuery(GET_SCHEDULE_ID);
  return {
    getScheduleDetail,
    loading,
    error,
    data
  };
}
