import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_PASIEN } from '../../lib/graphQL/mutation';

export default function useDeletePasein() {
  const [deletePasien, { loading, error, data }] = useMutation(DELETE_PASIEN);
  return {
    deletePasien,
    loading,
    error,
    data
  };
}
