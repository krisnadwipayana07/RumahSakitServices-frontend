import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  nama: Yup.string().required('mohon masukan nama anda'),
  nik: Yup.string().required('mohon masukan nik anda'),
  no_bpjs: Yup.string(),
  jenis_kelamin: Yup.string().required('mohon masukan jenis kelamin anda'),
  tempat_lahir: Yup.string().required('mohon masukan tempat lahir anda'),
  tanggal_lahir: Yup.date().required('mohon masukan tanggal lahir anda'),
  no_telp: Yup.string().required('mohon masukan no telp yang bisa dihubungi'),
  keluhan: Yup.string().required('mohon masukan keluhan yang anda rasakan')
});
