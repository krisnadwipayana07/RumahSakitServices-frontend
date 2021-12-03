import gql from 'graphql-tag';

export const GET_SCHEDULE_DETAIL = gql`
  subscription MySubscription($id: Int!) {
    schedules(limit: 1, where: { id: { _eq: $id } }) {
      patients(where: { solusi: { _is_null: true } }) {
        antrian
        nama
        keluhan
        id
      }
      patients_aggregate(where: { solusi: { _is_null: true } }) {
        aggregate {
          count(columns: antrian)
        }
      }
      jam_berakhir
      jam_mulai
      doctor {
        nama
        profile_pic
        bidang
        bio
      }
      tanggal_jaga
    }
  }
`;
