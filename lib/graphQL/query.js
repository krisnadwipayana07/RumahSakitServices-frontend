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
    schedules(where: { doctor_id: { _eq: $doctorID } }) {
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
      where: { schedule_id: { _eq: $scheduleId } }
    ) {
      antrian
      nama
      nik
      keluhan
    }
  }
`;
