import { Box, Image, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';

export default function Projectpicshow({ picture }) {
  return (
    <Wrap spacing='4' borderRadius='md'>
      {picture &&
        picture.map(
          ({ imageSRC }, key) =>
            imageSRC && (
              <WrapItem
                key={key}
                maxW='xs'
                minW='52'
                boxShadow='md'
                overflow='hidden'
                borderRadius='sm'
              >
                <Image quality='100' src={imageSRC} />
              </WrapItem>
            )
        )}
    </Wrap>
  );
}
