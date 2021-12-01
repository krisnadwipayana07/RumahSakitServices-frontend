import gql from 'graphql-tag';

export const INSERT_DOCTOR = gql`
  mutation MyMutation($nama: String, $email: String, $picture: String) {
    insert_doctor_one(
      object: {
        nama: $nama
        email: $email
        bidang: ""
        bio: ""
        is_doctor: false
        profile_pic: $picture
      }
    ) {
      id
    }
  }
`;

export const UPDATE_PASIEN = gql`
  mutation MyMutation($id: Int!, $solusi: String) {
    update_patient(where: { id: { _eq: $id } }, _set: { solusi: $solusi }) {
      returning {
        keluhan
        solusi
      }
    }
  }
`;

export const DELETE_PASIEN = gql`
  mutation MyMutation($id: Int!) {
    delete_patient_by_pk(id: $id) {
      nama
      antrian
      keluhan
    }
  }
`;

export const INSERT_PASIEN = gql`
  mutation MyMutation(
    $antrian: Int
    $nama: String
    $nik: String
    $keluhan: String
    $jenis_kelamin: String
    $no_bpjs: String
    $no_telp: String
    $schedule_id: Int
    $tanggal_lahir: date
    $tempat_lahir: String
  ) {
    insert_patient(
      objects: {
        antrian: $antrian
        nama: $nama
        nik: $nik
        keluhan: $keluhan
        jenis_kelamin: $jenis_kelamin
        no_bpjs: $no_bpjs
        no_telp: $no_telp
        schedule_id: $schedule_id
        tanggal_lahir: $tanggal_lahir
        tempat_lahir: $tempat_lahir
      }
    ) {
      returning {
        antrian
        nama
        keluhan
      }
    }
  }
`;
