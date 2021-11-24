import { Container } from '@chakra-ui/react';

export default function FormLayout({ children, paddingTop }) {
  return (
    <Container
      maxW='container.md'
      paddingTop={paddingTop ? paddingTop : '52'}
      display='flex'
      flexDir='column'
      gridGap='4'
    >
      {children}
    </Container>
  );
}
