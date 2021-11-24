import { Box, Text, IconButton, Icon } from '@chakra-ui/react';
import React from 'react';
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaArrowRight
} from 'react-icons/fa';
import Image from 'next/image';

export default function MemberCard({
  name,
  role,
  instagramLink,
  githubLink,
  linkedInLink,
  photo
}) {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      textAlign='center'
      w='48'
    >
      <Box
        backgroundColor='gray'
        borderRadius='100%'
        width='32'
        height='32'
        position='relative'
        overflow='hidden'
      >
        {photo && (
          <Image
            layout='fill'
            objectFit='cover'
            src={`/assets/images/members/${photo}`}
            priority
            quality='100'
          />
        )}
      </Box>
      <Text
        size='lg'
        fontWeight='semibold'
        color='gray.700'
        marginTop='5'
        textOverflow='ellipsis'
        whiteSpace='nowrap'
      >
        {name}
      </Text>
      {role && (
        <Text
          size='lg'
          fontWeight='normal'
          color='gray.500'
          textOverflow='ellipsis'
          whiteSpace='nowrap'
        >
          {role}
        </Text>
      )}
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        marginTop='1'
      >
        {instagramLink && (
          <IconButton
            as='a'
            href={instagramLink}
            target='_blank'
            rel='noopener noreferrer'
            variant='link'
            size='lg'
            icon={<Icon as={FaInstagram} />}
          />
        )}
        {githubLink && (
          <IconButton
            as='a'
            href={githubLink}
            target='_blank'
            rel='noopener noreferrer'
            variant='link'
            size='lg'
            icon={<Icon as={FaGithub} />}
          />
        )}
        {linkedInLink && (
          <IconButton
            as='a'
            href={linkedInLink}
            target='_blank'
            rel='noopener noreferrer'
            variant='link'
            size='lg'
            icon={<Icon as={FaLinkedin} />}
          />
        )}
      </Box>
      {/* <Button
        variant='link'
        rightIcon={<Icon as={FaArrowRight} />}
        mt='1'
        fontWeight='normal'
        color='gray.500'
      >
        View More
      </Button> */}
    </Box>
  );
}
