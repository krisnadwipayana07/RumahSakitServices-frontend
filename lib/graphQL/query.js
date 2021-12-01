import gql from 'graphql-tag';

export const GET_DOCTOR_BY_EMAIL = gql`
  query MyQuery($email: String) {
    doctor(where: { email: { _eq: $email } }) {
      id
    }
  }
`;

export const GET_DOCTOR_SCHEDULE = gql`
  query MyQuery($doctorID: Int!) {
    schedules(
      where: { doctor_id: { _eq: $doctorID }, is_done: { _eq: false } }
    ) {
      doctor_id
      id
      jam_berakhir
      jam_mulai
      message
      tanggal_jaga
      room {
        nama_ruangan
      }
    }
  }
`;

export const GET_SCHEDULE_ID = gql`
  query MyQuery($id: Int!) {
    schedules(where: { id: { _eq: $id } }) {
      jam_berakhir
      jam_mulai
      message
      room {
        nama_ruangan
      }
      tanggal_jaga
      id
    }
  }
`;

export const GET_ALL_LIST_PATIENT = gql`
  query MyQuery($scheduleId: Int!) {
    patient(
      order_by: { antrian: asc }
      where: { schedule_id: { _eq: $scheduleId }, solusi: { _is_null: true } }
    ) {
      id
      antrian
      nama
      nik
      keluhan
    }
  }
`;

export const GET_ALL_SCHEDULE = gql`
  query MyQuery {
    schedules(where: { is_done: { _eq: false } }) {
      doctor {
        nama
      }
      jam_berakhir
      jam_mulai
      tanggal_jaga
      room {
        nama_ruangan
      }
      id
    }
  }
`;

export const GET_LAST_ANTRIAN = gql`
  query MyQuery($scheduleId: Int!) {
    patient(
      order_by: { antrian: desc }
      limit: 1
      where: { schedule_id: { _eq: $scheduleId } }
    ) {
      antrian
    }
  }
`;

export const GET_PATIENT_DETAIL = gql`
  query MyQuery($id: Int!) {
    patient(where: { id: { _eq: $id } }) {
      id
      antrian
      nama
      nik
      keluhan
      jenis_kelamin
      no_bpjs
      no_telp
      tanggal_lahir
      tempat_lahir
      schedule_id
    }
  }
`;

export const GET_ALL_DOCTOR = gql`
  query MyQuery {
    doctor {
      nama
      bidang
      profile_pic
      id
    }
  }
`;

export const GET_DOCTOR_SCHEDULE_PK = gql`
  query MyQuery($id: Int!) {
    doctor(where: { id: { _eq: $id } }, limit: 1) {
      nama
      bidang
      profile_pic
      bio
      schedules(where: { is_done: { _eq: false } }) {
        id
        jam_berakhir
        jam_mulai
        room {
          nama_ruangan
        }
        tanggal_jaga
      }
    }
  }
`;
