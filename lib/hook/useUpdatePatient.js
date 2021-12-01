import React from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_PASIEN } from '../../lib/graphQL/mutation';

export default function useUpdatePasein() {
  const [updatePasien, { loading, error, data }] = useMutation(UPDATE_PASIEN);
  return {
    updatePasien,
    loading,
    error,
    data
  };
}
