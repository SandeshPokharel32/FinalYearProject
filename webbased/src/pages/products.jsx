import { Box, Grid, Heading } from '@chakra-ui/react';
import React from 'react';
import PageLayout from '../layouts/PageLayout';
import Image from 'next/image';

const products = [
  {
    name: 'New Lace Up Oxford Shoes For Men',
    updatedAt: '15 hour ago',
    description:
      'Great for the party and other occasions.Got delivered in time and the product is very good than shown in image.Really liked it.',
    image: '/shoes/1.jpg',
  },
  {
    name: 'Mephisto Hurrikan Brown',
    updatedAt: '15 hour ago',
    description:
      "Mephisto Men's Hurrikan.Traditionally handcrafted classic MEPHISTO boat shoe.Also available in Rust Smooth and Brown Smooth.",
    image: '/shoes/2.jpg',
  },
];

const ProductItem = ({
  name = 'N/A',
  updatedAt = 'unknown time',
  description = '',
  image = '/bg.jpg',
}) => {
  return (
    <Box className="card" minH="252px">
      <Box className="card__image">
        <Image width="400px" height="200px" src="/bg.jpg" alt="test" />
      </Box>
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <Box
            className="card__thumb"
            width="80px"
            pos="relative"
            height="80px"
          >
            <Image layout="fill" objectFit="contain" src={image} alt="" />
          </Box>
          <div className="card__header-text">
            <Heading
              as="h3"
              color="primary.500"
              fontSize="lg"
              textTransform="capitalize"
              className="card__title"
            >
              {name}
            </Heading>
            <Box
              d="flex"
              justifyContent="space-between"
              className="card__status"
            >
              {updatedAt}&nbsp;
              <Box
                as="a"
                _hover={{
                  textDecoration: 'underline',
                }}
                href="/download/footware.apk"
                color="blue"
                download
              >
                try this out!
              </Box>
            </Box>
          </div>
        </div>
        {description ? (
          <p className="card__description">{description}</p>
        ) : null}
      </div>
    </Box>
  );
};

const ProductsPage = () => {
  return (
    <PageLayout page="products">
      <Heading as="h1">Products</Heading>
      <Grid
        templateColumns="repeat(auto-fill,350px)"
        rowGap="20px"
        columnGap="20px"
        mt={6}
      >
        {products?.map((product, index) => (
          <ProductItem
            key={index}
            name={product.name}
            updatedAt={product.updatedAt}
            description={product.description}
            image={product.image}
          />
        ))}
      </Grid>
    </PageLayout>
  );
};

export default ProductsPage;
