import {
  Heading,
  SimpleGrid,
  GridItem,
  Text,
  Box,
  Container,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import React from 'react';
import projectData from '../../project-data';
import ProjectPreview from '../../cards/ProjectPreview';

export default function Section4() {
  return (
    <Box py='20'>
      <Container maxW='container.xl' data-aos='fade-up'>
        <Heading as='h2' size='2xl' align='center'>
          Our Projects
        </Heading>

        <Text fontSize='lg' align='center' px={{ base: '', md: '24' }}>
          Our family has created and contributed to many projects, ranged from
          Mobile Application, Web Application, up into an Artificial
          Intelligence projects.
        </Text>

        <Wrap spacing='8' justify='center' mt='10'>
          {Object.keys(projectData).map((objKey, key) => (
            <WrapItem key={key}>
              <ProjectPreview
                title={projectData[objKey].name}
                shortDescription={projectData[objKey].shortDescription}
                projectId={objKey}
                previewImage={projectData[objKey].preview}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    </Box>
  );
}
