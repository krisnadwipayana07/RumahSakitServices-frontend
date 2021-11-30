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
