import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import DivisionHero from '../components/libs/divisions-subpages/DivisionHero';
import DivisionSection from '../components/libs/divisions-subpages/DivisionSection';
import divisionsData from '../components/divisions-data';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
export default function Divisions() {
  return (
    <Box pb='80'>
      <Head>
        <title>SIC Unud - Divisions</title>
      </Head>
      <DivisionHero />
      {divisionsData &&
        divisionsData.map(({ name, description, membersData, leadData }, key) => (
          <DivisionSection
            key={key}
            divisionName={name}
            divisionDescription={description}
            membersData={membersData}
            leadData={leadData}
          />
        ))}
      {/* <DivisionSection 
        divisionName="Important Note"
        divisionDescription="Just because you're at Engineering Division, doesn't mean you cannot "
      /> */}
    </Box>
  );
}

Divisions.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;
