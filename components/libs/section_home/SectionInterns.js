import {
  Box,
  Container,
  Heading,
  Text,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import React from 'react';
import InternCard from '../../cards/InternCard';

export default function SectionInterns() {
  return (
    <Box py='40' backgroundColor='#171923'>
      <Container maxW='container.lg' data-aos='fade-up'>
        <Heading textAlign='center' color='white' size='2xl'>
          SIC{' '}
          <Box as='span' color='brand.500'>
            Interns
          </Box>
        </Heading>
        <Text
          fontSize='lg'
          align='center'
          color='#cccdcf'
          mt='2'
          px={{ base: '', md: '24' }}
        >
          Two of our SIC members and one SIC alumnus has achieved an Internship
          in this year. One in a Big Tech Company and one in an Official
          National Government Instance.
        </Text>
        <Wrap spacing='5' mt='12' justify='center'>
          <WrapItem>
            <Box mt='16'>
              <InternCard
                name='Putu Audi Pasuatmadi'
                role='Backend Engineer Intern'
                photo='audipasuatmadi.jpg'
                companyPhoto='tiket-com.png'
                description='From more than a staggering 15.000 students (per 31 July) who registered at PT Global Tiket Network (tiket.com), Audi "Odi" managed to become one of the 3 accepted Backend Engineer Interns (one from ITB, another one from ITS), a subset of 81 chosen students spread into 23 positions and 6 division from 15.000 applicants. He has a great passion for Software Engineering and is experienced with projects ranged from Android Apps up to Cloud-Native Microservices. Aside from Software Engineering, he does business and has run more than 4 businesses.'
              />
            </Box>
          </WrapItem>
          <WrapItem>
            <Box mt='16'>
              <InternCard
                name='I Komang Tryana Mertayasa'
                role='Data Science Intern'
                photo='tryanamertayasa.jpg'
                companyPhoto='bank-indonesia.png'
                description={`
                  From more than a staggering 7500+ (per 1 August) students who registered at Bank Indonesia, 
                  Tryana managed to become an intern as a data scientist at Bank Indonesia. Tryana is an active student at Udayana University with great passion at machine learning and data science. 
                  He had perseverance in learning about data science, now he got intern at Bank Indonesia as a data scientist. 
                  Apart from being an active student, he is also actively involved in off-campus activities. 
                  One of them is volunteering in the Google Bangkit program, where he is a machine learning advisor. 
                `}
              />
            </Box>
          </WrapItem>
          <WrapItem>
            <Box mt='16'>
              <InternCard
                name='Hairul Lana'
                role='Web Developer Intern'
                photo='hairul-lana.jpg'
                companyPhoto='telkom-indonesia.png'
                description='From a staggering 49.304 students (per 1 August), Hairul Lana managed to land a Web Developer Internship at PT Telkom Indonesia (Persero) Tbk, as one of the 229 chosen students spread into many positions. He goes from graphic designs and applies his skills to Web Development at which the result is high-quality and beautiful websites. Aside from Web Developing and Graphic Designing, he was running a freelance Graphic Designing business at various platforms online where he met clients and partners.'
              />
            </Box>
          </WrapItem>
        </Wrap>
      </Container>
    </Box>
  );
}
