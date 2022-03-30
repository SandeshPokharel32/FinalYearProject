import { Box, Container } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const PageLayout = ({ children, page = '' }) => {
  return (
    <Box bg="linear-gradient(to top, #dfe9f3 0%, white 100%)" bgSize="cover">
      <Header page={page} />
      <Container minH="67vh" maxW="1140px">
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default PageLayout;
