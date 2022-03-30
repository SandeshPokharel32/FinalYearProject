import { Box, Container, useTheme } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import Headroom from 'react-headroom';
import Link from 'next/link';

const NavLink = ({ text, link, isActive = false }) => {
  const theme = useTheme();
  return (
    <Box
      as="li"
      pb="3px"
      pos="relative"
      sx={
        isActive
          ? {
              cursor: 'pointer',
              '&::after': {
                position: 'absolute',
                display: 'block',
                content: '""',
                width: '100%',
                height: '2px',
                background: theme.colors?.primary['700'],
                bottom: 0,
              },
              '&::before': {
                position: 'absolute',
                display: 'block',
                content: '""',
                width: '6px',
                height: '6px',
                top: '35%',
                borderRadius: '50%',
                background: '#a4c9cf',
                left: '-12px',
              },
            }
          : {
              cursor: 'pointer',
              '&:hover::after': {
                position: 'absolute',
                display: 'block',
                content: '""',
                width: '100%',
                height: '2px',
                background: theme.colors?.primary['700'],
                bottom: 0,
              },
              '&:hover::before': {
                position: 'absolute',
                display: 'block',
                content: '""',
                width: '6px',
                height: '6px',
                top: '35%',
                borderRadius: '50%',
                background: '#a4c9cf',
                left: '-12px',
              },
            }
      }
      fontSize="xl"
      color="primary.700"
    >
      <Link href={link}>
        <a>{text}</a>
      </Link>
    </Box>
  );
};

const Header = ({ page }) => {
  return (
    <Headroom>
      <Box as="header" padding="50px 0">
        <Container
          maxW="1140px"
          d={{
            base: 'flex',
            sm: 'flex',
            md: 'flex',
            lg: 'flex',
          }}
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box>
            <Link href="/">
              <a>
                <Image
                  src="/logo.png"
                  width="150px"
                  height="80px"
                  alt="try on tech"
                />
              </a>
            </Link>
          </Box>
          <Box as="nav">
            <Box
              as="ul"
              d="grid"
              listStyleType="none"
              gridTemplateColumns="1fr"
              columnGap="30px"
            >
              <NavLink
                text="Products"
                isActive={page === 'products'}
                link="/products"
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Headroom>
  );
};

export default Header;
