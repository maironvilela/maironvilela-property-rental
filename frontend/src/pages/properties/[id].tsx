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
  summaryAmountDetails: Summary;
}

export default function Id({
  property,
  images,
  summaryAddress,
  summaryPropertyDetails,
  summaryAmountDetails
}: IdProps) {
  const { isFallback } = useRouter();

  const propertyAbout = `Excelente apartamento, 98,99m²  claro e arejado, em ponto nobre do Bairro Silveira.

  Oportunidade!!

  Excelente localização próximo a todo tipo de comércio, linhas de ônibus e a 2 quarteirões do Colégio Magnum.

  Apartamento amplo, claro e arejado sendo:

  Sala 02 ambientes com piso em porcelanato,`;

  return (
    <>
      {isFallback ? (
        <h1>Carregando</h1>
      ) : (
        <Flex align="center" flexDirection="column" w="100vw" justify="center">
          <Flex as="section" w="100vw" direction="column" align="center">
            <Text mt="2rem" fontSize="2.4rem" fontWeight="bold">
              Titulo do Anúncio
            </Text>

            <Box mt="5rem" w="70vw">
              <Slide images={images} />
            </Box>

            <Summary
              title={summaryAmountDetails.title}
              keyValue={summaryAmountDetails.summary}
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

            <Summary
              title={summaryAddress.title}
              keyValue={summaryAddress.summary}
              size={'70vw'}
              bg={'white'}
              mt={'5rem'}
            />

            <Summary
              title="Mais sobre este imóvel"
              propertyAbout={propertyAbout}
              size={'70vw'}
            />
          </Flex>
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

  console.log(property.propertyImages);

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
        key: 'Código: ',
        value: '2366525'
      },

      {
        key: 'Área: ',
        value: '600m2'
      },
      {
        key: 'Quartos: ',
        value: '5'
      },
      {
        key: 'Vagas: ',
        value: '2'
      },
      {
        key: 'Banheiros: ',
        value: '2'
      },
      {
        key: 'Aceita Pets: ',
        value: 'Sim'
      }
    ]
  };

  const summaryAmountDetails = {
    title: 'Detalhes Financeiro',
    summary: [
      {
        key: 'Valor Aluguel: ',
        value: 'R$1.600,00'
      },

      {
        key: 'Valor Venda: ',
        value: 'R$2.600.000,00'
      },
      {
        key: 'Contrato (Aluguel): ',
        value: '3 Anos'
      },
      {
        key: 'IPTU (mensal): ',
        value: 'R$610,00'
      },
      {
        key: 'Condominio (mensal): ',
        value: 'R$1.610,00'
      }
    ]
  };

  return {
    props: {
      property,
      images,
      summaryAddress,
      summaryPropertyDetails,
      summaryAmountDetails
    },
    revalidate: 60 * 60 * 24 // 24 horas
  };
};
