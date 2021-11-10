import { Flex, Text, Box } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Slide } from '../../components/Slide';
import { Summary } from '../../components/Summary';
import api from '../../services/api';
import { Property } from '../../types';

type Images = {
  id: string;
  url: string;
};

type SummaryDetails = {
  key: string;
  value: string;
};

type Summary = {
  title: string;
  summary: SummaryDetails[];
};

interface IdProps {
  property: Property;
  images: Images[];
  summaryAddress: Summary;
  summaryPropertyDetails: Summary;
}

export default function Id({
  property,
  images,
  summaryAddress,
  summaryPropertyDetails
}: IdProps) {
  const { isFallback } = useRouter();

  console.log(JSON.stringify(property.address));

  return (
    <>
      {isFallback ? (
        <h1>Carregando</h1>
      ) : (
        <Flex align="center" flexDirection="column" w="100vw" justify="center">
          <Header />

          <Flex as="section" w="100vw" direction="column" align="center">
            <Text mt="2rem" fontSize="2.4rem" fontWeight="bold">
              Titulo do Anúncio
            </Text>

            <Box mt="5rem" w="70vw">
              <Slide images={images} />
            </Box>

            <Summary
              title={summaryAddress.title}
              keyValue={summaryAddress.summary}
              size={'70vw'}
              bg={'white'}
              mt={'5rem'}
            />

            <Summary
              title={summaryPropertyDetails.title}
              keyValue={summaryPropertyDetails.summary}
              size={'70vw'}
              bg={'white'}
              mt={'5rem'}
            />
          </Flex>

          <Footer />
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

  const property = data.property;

  console.log(JSON.stringify(property, null, 2));

  const images = property.propertyImages.map(image => {
    return {
      id: image.id,
      url: image.imageUrl
    };
  });

  const summaryAddress = {
    title: 'Localização ',
    summary: [
      {
        key: 'Endereço',
        value: `
          ${property.address.streetAddress},
          ${property.address.number} -
          ${property.address.complement}
        `
      },
      {
        key: 'Bairro',
        value: property.address.district
      },
      {
        key: 'Cidade',
        value: property.address.city
      },
      {
        key: 'Estado',
        value: property.address.state
      }
    ]
  };

  const summaryPropertyDetails = {
    title: 'Detalhes do Imóvel',
    summary: [
      {
        key: 'Endereço',
        value: `
          ${property.address.streetAddress},
          ${property.address.number} -
          ${property.address.complement}
        `
      }
    ]
  };

  return {
    props: {
      property,
      images,
      summaryAddress,
      summaryPropertyDetails
    },
    revalidate: 60 * 60 * 24 // 24 horas
  };
};
