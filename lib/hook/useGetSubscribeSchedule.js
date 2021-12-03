import { useSubscription } from '@apollo/client';
import React from 'react';
import { GET_SCHEDULE_DETAIL } from '../graphQL/subscribition';

export default function useGetSubscribeSchedule() {
  const { loading, error, data, variables } =
    useSubscription(GET_SCHEDULE_DETAIL);
  return {
    loading,
    error,
    data,
    variables
  };
}
