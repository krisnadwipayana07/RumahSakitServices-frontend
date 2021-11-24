import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import React from 'react';
import MemberCard from '../../cards/MemberCard';

export default function DivisionSection({
  divisionName,
  divisionDescription,
  membersData,
  leadData
}) {
  return (
    <Box as='section' py='20' data-aos='fade-up' data-aos-offset='250'>
      <Container maxW='container.xl'>
        <Heading textAlign='center'>{divisionName}</Heading>
        <Text textAlign='center' maxW='xl' margin='auto'>
          {divisionDescription}
        </Text>
        <Wrap
          spacing={{ base: '16', lg: '24' }}
          justify='center'
          mt='10'
          px='24'
        >
          {leadData &&
            leadData.map(
              (
                { name, photo, role, instagramLink, githubLink, linkedInLink },
                key
              ) => (
                <WrapItem
                  width={{ base: '100%', lg: 'auto' }}
                  key={key}
                  display='flex'
                  justifyContent='center'
                >
                  <MemberCard
                    name={name}
                    photo={photo}
                    role={role}
                    instagramLink={instagramLink}
                    githubLink={githubLink}
                    linkedInLink={linkedInLink}
                  />
                </WrapItem>
              )
            )}
        </Wrap>
        <Wrap
          spacing={{ base: '25', lg: '24' }}
          justify='center'
          mt='10'
          px='24'
        >
          {membersData &&
            membersData.map(
              (
                { name, photo, role, instagramLink, githubLink, linkedInLink },
                key
              ) => (
                <WrapItem
                  width={{ base: '100%', lg: '20%' }}
                  pt='5'
                  key={key}
                  display='flex'
                  justifyContent='center'
                >
                  <MemberCard
                    name={name}
                    photo={photo}
                    role={role}
                    instagramLink={instagramLink}
                    githubLink={githubLink}
                    linkedInLink={linkedInLink}
                  />
                </WrapItem>
              )
            )}
        </Wrap>
      </Container>
    </Box>
  );
}
