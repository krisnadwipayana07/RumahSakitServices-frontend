import React from 'react';
import { useMutation } from '@apollo/client';
import { INSERT_DOCTOR } from '../../lib/graphQL/mutation';

export default function useInsertDoctor() {
  const [insertDoctor, { loading, error, data }] = useMutation(INSERT_DOCTOR);
  return {
    insertDoctor,
    loading,
    error
  };
}
