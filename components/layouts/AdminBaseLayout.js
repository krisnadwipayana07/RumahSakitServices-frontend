import React, { useEffect } from 'react';
import { Button } from '@chakra-ui/button';
import { Box, Center, Heading, Link } from '@chakra-ui/layout';
import NavbarAdmin from '../navbars/NavbarAdmin';
import { useSession, signIn, signOut } from 'next-auth/react';
import useGetDoctorByEmail from '../../lib/hook/useGetDoctorByEmail';
import useInsertDoctor from '../../lib/hook/useInsertDoctor';

export default function AdminBaseLayout({ children }) {
  const { data } = useSession();
  const { getDoctorEmail, data: resultGetDoctor } = useGetDoctorByEmail();
  const { insertDoctor, error } = useInsertDoctor();

  useEffect(() => {
    if (data) {
      getDoctorEmail({ variables: { email: data.user.email } });
    }
    // console.log(resultGetDoctor);
    console.log('ada ga ', resultGetDoctor?.doctor.length);
    console.log(data);
    if (resultGetDoctor?.doctor?.length === 0) {
      // console.log(data);
      console.log('insert Doctor');
      insertDoctor({
        variables: {
          nama: data.user.name,
          email: data.user.email,
          picture: data.user.image
        }
      });
    }
    if (error) {
      console.log(error);
    }
    if (resultGetDoctor?.doctor?.length === 1) {
      // console.log(resultGetDoctor.doctor[0].id);
      localStorage.setItem('userId', resultGetDoctor.doctor[0].id);
    }
  }, [data, resultGetDoctor]);

  if (data) {
    return (
      <Box as='main' pt='4'>
        <NavbarAdmin user={data.user} signOut={signOut} />
        {children}
      </Box>
    );
  }

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <>
      <Box
        position='fixed'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
      >
        <Heading textAlign='center' my='3'>
          Wellcome doctor to the <b>Rumah Sakit Services</b>
        </Heading>
        <Center>
          <Button bgColor='blue.400' color='white' onClick={() => signIn()}>
            Login
          </Button>
        </Center>
      </Box>
    </>
  );
}

// export const getServerSideProps = withPageAuthRequired({
//   async getServerSideProps() {
//     return <AdminBaseLayout />;
//   }
// });
