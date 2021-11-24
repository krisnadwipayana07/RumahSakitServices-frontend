import { WrapItem } from '@chakra-ui/react';
import React from 'react';
import MemberCard from '../../cards/MemberCard';

export default function MemberShow(membersData) {
  return (
    <div>
      {membersData &&
        membersData.map(
          ({ name, role, instagramLink, githubLink, linkedInLink }, key) => (
            <WrapItem
              width={{ base: '100%', lg: 'auto' }}
              display='flex'
              justifyContent='center'
              key={key}
            >
              <MemberCard
                name={name}
                role={role}
                instagramLink={instagramLink}
                githubLink={githubLink}
                linkedInLink={linkedInLink}
              />
            </WrapItem>
          )
        )}
    </div>
  );
}
