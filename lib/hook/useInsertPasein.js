import React from 'react';
import { useMutation } from '@apollo/client';
import { INSERT_PASIEN } from '../../lib/graphQL/mutation';

export default function useInsertPasein() {
  const [insertPasien, { loading, error, data }] = useMutation(INSERT_PASIEN);
  return {
    insertPasien,
    loading,
    error,
    data
  };
}
