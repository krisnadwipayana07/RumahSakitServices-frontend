import React, { useEffect } from 'react';
import { Button } from '@chakra-ui/button';
import { Box, Center, Heading, Link } from '@chakra-ui/layout';
import NavbarAdmin from '../navbars/NavbarAdmin';
import { useSession, signIn, signOut } from 'next-auth/react';

//base admin layout
export default function AdminBaseLayout({ children }) {
  const { data: session } = useSession();

  useEffect(() => {
    console.log(process.env.GOOGLE_CLIENT_ID);
  }, []);

  if (session) {
    console.log(session);
    return (
      <Box as='main' pt='4'>
        <NavbarAdmin user={session.user} signOut={signOut} />
        {children}
      </Box>
    );
  }

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

        {/* <a href='https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=149577248564-bl61686v06uoeq5nlvqle0jicgcsdr3p.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&prompt=consent&access_type=offline&nextauth=signin%2Cgoogle&state=rl_RUR2IcEz89PeKCxkqVyxQaRhMaoq5VsAw2VdBXqU&code_challenge=H4XGI9pe4FYisvNNHLYyuGbiefZznxDpOrxKjcLS6DI&code_challenge_method=S256&flowName=GeneralOAuthFlow'>
        login
      </a> */}
      </Box>
    </>
  );
}

// export const getServerSideProps = withPageAuthRequired({
//   async getServerSideProps() {
//     return <AdminBaseLayout />;
//   }
// });
