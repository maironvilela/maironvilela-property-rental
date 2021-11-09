import { Flex, Text, Box } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { Header } from '../../components/Header';
import { Slide } from '../../components/Slide';
import api from '../../services/api';
import { Property } from '../../types';

type Images = {
  id: string;
  url: string;
};

interface IdProps {
  property: Property;
  images: Images[];
}

export default function Id({ property, images }: IdProps) {
  const { isFallback } = useRouter();

  return (
    <>
      {isFallback ? (
        <h1>Carregando</h1>
      ) : (
        <Flex align="center" flexDirection="column" w="100vw">
          <Header />

          <Text mt="2rem" fontSize="2.4rem" fontWeight="bold">
            Titulo do Anúncio
          </Text>

          <Box mt="5rem" w="70rem">
            <Slide images={images} />
          </Box>
        </Flex>
      )}
    </>
  );
}

// Necessário para paginas staticas dinamicas
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('properties', {
    params: {
      page: 1,
      size: 50
    }
  });

  const paths = data.properties.map(property => {
    return {
      params: {
        id: property._id
      }
    };
  });

  return {
    paths: [],
    fallback: 'blocking'
  };
};
export const getStaticProps: GetStaticProps = async ctx => {
  const { id } = ctx.params;

  const { data } = await api.get(`/properties/${id}`);

  // console.log(JSON.stringify(data, null, 2));

  const property = data.property;

  const images = property.propertyImages.map(image => {
    return {
      id: image.id,
      url: image.imageUrl
    };
  });

  console.log(images);

  // console.log(data.property.propertyImages);

  return {
    props: {
      property,
      images
    },
    revalidate: 60 * 60 * 24 // 24 horas
  };
};
