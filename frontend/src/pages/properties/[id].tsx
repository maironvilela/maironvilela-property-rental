import { Flex, Text, Box } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { Slide } from '../../components/Slide';
import { Summary } from '../../components/Summary';
import api from '../../services/api';
import { Property } from '../../types';
import { formatRealCurrency } from '../../util/formattedValues';

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

  return (
    <>
      {isFallback ? (
        <h1>Carregando</h1>
      ) : (
        <Flex align="center" flexDirection="column" w="100vw" justify="center">
          <Flex as="section" w="100vw" direction="column" align="center">
            <Text
              mt="2rem"
              fontSize="2.4rem"
              fontWeight="bold"
              px="15rem"
              align="center"
            >
              {property.description}
            </Text>

            <Box mt="5rem" w="70vw">
              <Slide images={images} />
            </Box>

            <Summary
              mt="5rem"
              title={summaryAmountDetails.title}
              keyValue={summaryAmountDetails.summary}
              size={'70vw'}
              bg={'white'}
            />

            <Summary
              title={summaryPropertyDetails.title}
              keyValue={summaryPropertyDetails.summary}
              size={'70vw'}
              bg={'white'}
            />

            <Summary
              title={summaryAddress.title}
              keyValue={summaryAddress.summary}
              size={'70vw'}
              bg={'white'}
            />

            <Summary
              title="Mais sobre este imóvel"
              propertyAbout={property.aboutTheProperty}
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

  const property: Property = data.property;

  console.log(data.property.specifications);

  const allowPets = property.specifications.find(
    specification => specification.name === 'allows pets'
  );

  // retorna a quantidade de banheiros do imóvel
  const numberOfBathrooms = property.specifications.find(
    specification => specification.name.toLowerCase() === 'number of bathrooms'
  );

  // retorna a quantidade de quartos do imóvel
  const numberOfRooms = property.specifications.find(
    specification => specification.name.toLowerCase() === 'number of rooms'
  );

  // retorna o tamanho do imóvel
  const areaSize = property.specifications.find(
    specification => specification.name.toLowerCase() === 'area'
  );

  const numberOfParkingSpaces = property.specifications.find(
    specification =>
      specification.name.toLowerCase() === 'number of parkingspaces'
  );

  const images = property.propertyImages.map(image => {
    return {
      id: image.id,
      url: image.imageUrl
    };
  });

  const summaryPropertyDetails = {
    title: 'Detalhes do Imóvel',
    summary: [
      {
        key: 'Código: ',
        value: property.id
      },

      {
        key: 'Área: ',
        value: areaSize ? `${areaSize.description}m2` : '-'
      },
      {
        key: 'Quartos: ',
        value: numberOfRooms ? numberOfRooms.description : '-'
      },
      {
        key: 'Vagas: ',
        value: numberOfParkingSpaces ? numberOfParkingSpaces.description : '-'
      },
      {
        key: 'Banheiros: ',
        value: numberOfBathrooms ? numberOfBathrooms.description : '-'
      },
      {
        key: 'Aceita Pets: ',
        value: allowPets ? allowPets.description : '-'
      }
    ]
  };

  const summaryAddress = {
    title: 'Localização ',
    summary: [
      {
        key: 'Endereço:',
        value: `
          ${property.address.streetAddress},
          ${property.address.number} -
          ${property.address.complement}
        `
      },
      {
        key: 'Bairro:',
        value: property.address.district
      },
      {
        key: 'Cidade:',
        value: property.address.city
      },
      {
        key: 'Estado:',
        value: property.address.state
      }
    ]
  };

  const summaryAmountDetails = {
    title: 'Detalhes Financeiro',
    summary: [
      {
        key: 'Valor Aluguel: ',
        value: formatRealCurrency(property.rentalPrice)
      },

      {
        key: 'Valor Venda: ',
        value: formatRealCurrency(property.salePrice)
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
