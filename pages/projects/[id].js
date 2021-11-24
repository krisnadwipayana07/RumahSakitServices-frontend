import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
// import MemberCard from '../../components/cards/MemberCard';
import BaseLayout from '../../components/layouts/BaseLayout';
import Projectpicshow from '../../components/libs/project_com/project-picshow';
import projectData from '../../components/project-data';
import Head from 'next/head';
import ContributorCard from '../../components/cards/ContributorCard';

export default function ProjectSelection({ data }) {
  const { name, description, membersData, pictures } = data;
  return (
    // <Box py='32'>
    //   <Container maxWidth='container.lg'>
    //     <SimpleGrid columns={{ base: '1', lg: '12' }}>
    //       <Box gridColumnStart='1' gridColumnEnd='6'>
    //         <Wrap w='100%'>
    //           {pictures &&
    //             pictures.map(({ imageSRC }, key) => (
    //               <WrapItem key={key} position='relative' w='96' h='64'>
    //                 <Image layout='fill' objectFit='contain' src={imageSRC} />
    //               </WrapItem>
    //             ))}
    //         </Wrap>
    //       </Box>
    //       <Box gridColumnStart='7' gridColumnEnd='12'></Box>
    //     </SimpleGrid>
    //   </Container>
    // </Box>
    <div style={{ paddingTop: '3%', paddingBottom: '5%' }}>
      <Head>
        <title>SIC Unud Projects - {name}</title>
      </Head>
      <Container maxW='container.lg'>
        <Heading size='xl' style={{ marginTop: '2%' }}>
          {name}
        </Heading>
        <Text>{description}</Text>
        <Heading size='md' style={{ marginTop: '5%', marginBottom: '2%' }}>
          Preview
        </Heading>
        <Projectpicshow picture={pictures} />
        <Heading
          size='md'
          textAlign='center'
          style={{ marginTop: '5%', marginBottom: '2%' }}
        >
          Contributors
        </Heading>
        <Wrap spacing='24' justify='center'>
          {membersData &&
            membersData.map(
              (
                { name, role, instagramLink, githubLink, linkedInLink, photo },
                key
              ) => (
                <WrapItem
                  width={{ base: '100%', lg: 'auto' }}
                  display='flex'
                  justifyContent='center'
                  key={key}
                >
                  <ContributorCard
                    name={name}
                    role={role}
                    photo={photo}
                    instagramLink={instagramLink}
                    githubLink={githubLink}
                    linkedInLink={linkedInLink}
                  />
                </WrapItem>
              )
            )}
        </Wrap>
      </Container>
    </div>
    // <div style={{ paddingTop: '3%', paddingBottom: '5%' }}>
    //   <Container maxW='container.xl'>
    //     <SimpleGrid column={12} spacing={1}>
    //       <GridItem colStart={2} colEnd={12}>
    //         <Projectpicshow picture={pictures} />
    //         <Heading size='xl' style={{ marginTop: '2%' }}>
    //           {name}
    //         </Heading>
    //       </GridItem>
    //       <GridItem colStart={2} colEnd={7}>
    //         <Text textAlign='justify' maxW='xl'>
    //           {description}
    //         </Text>
    //       </GridItem>
    //       <GridItem colStart={2} colEnd={7} rowStart={3}>
    //         <Heading size='md' style={{ marginTop: '5%', marginBottom: '2%' }}>
    //           Contributors
    //         </Heading>
    //       </GridItem>
    //       <GridItem colStart={2} colEnd={12}>
    //         <Wrap spacing='12'>
    //           {membersData &&
    //             membersData.map(
    //               (
    //                 { name, role, instagramLink, githubLink, linkedInLink },
    //                 key
    //               ) => (
    //                 <WrapItem
    //                   width={{ base: '100%', lg: 'auto' }}
    //                   display='flex'
    //                   justifyContent='center'
    //                 >
    //                   <MemberCard
    //                     key={key}
    //                     name={name}
    //                     role={role}
    //                     instagramLink={instagramLink}
    //                     githubLink={githubLink}
    //                     linkedInLink={linkedInLink}
    //                   />
    //                 </WrapItem>
    //               )
    //             )}
    //         </Wrap>
    //       </GridItem>
    //     </SimpleGrid>
    //   </Container>
    // </div>
  );
}

export async function getStaticPaths() {
  const paths = Object.keys(projectData).map((val) => ({
    params: { id: val }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const data = projectData[params.id];

  return {
    props: {
      data: data
    }
  };
}

ProjectSelection.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;
