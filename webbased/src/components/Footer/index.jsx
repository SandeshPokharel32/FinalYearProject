import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box p={5} d="flex" justifyContent="space-between">
      <Container maxW="1140px">
        <Text color="primary.500" fontWeight="550">
          Try on tech &copy;2022
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
