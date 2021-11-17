import { useMemo } from 'react';

import { Box, Flex, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';

import { Property } from '../../../types';
import { getSpecification } from '../../../util/getSpecification';
import { DetailsProperty } from '../../DetailsProperty';

interface CardProps {
  property: Property;
}

export const Card = ({ property }: CardProps) => {
  const mainImage = useMemo(() => {
    const mainImage = property.propertyImages.find(image => image.isMainImage);

    return mainImage.imageUrl;
  }, []);

  // retorna a quantidade de banheiros do imóvel
  const numberOfBathrooms = useMemo(() => {
    return getSpecification(property.specifications, 'number of bathrooms');
  }, []);

  // retorna a quantidade de quartos do imóvel
  const numberOfRooms = useMemo(() => {
    return getSpecification(property.specifications, 'number of rooms');
  }, []);

  // retorna o tamanho do imóvel
  const areaSize = useMemo(() => {
    return getSpecification(property.specifications, 'area');
  }, []);

  const rentalPrice = useMemo(() => {
    return property.rentalPrice.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }, []);

  const salePrice = useMemo(() => {
    return property.salePrice.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }, []);

  // retorna a quantidade de vagas de garagem do imóvel
  const numberOfParkingSpaces = useMemo(() => {
    return getSpecification(property.specifications, 'number of parkingspaces');
  }, []);

  return (
    <Flex align="center" justify="center" p={4} bg="gray.100" borderRadius="5%">
      <Flex flexDirection="column" align="center" mb="3rem">
        <Box>
          <Image
            src={mainImage}
            alt={property.propertyType}
            boxSize="280px"
            mx={10}
            my={8}
            borderRadius="5%"
            loading="lazy"
          />
        </Box>

        <Box>
          <Text fontSize="1.8rem" ml={10} fontWeight="bold" color="gray.500">
            {property.propertyType}
          </Text>

          <Box h="7rem" mt="3rem">
            <Text mt={4} fontSize="1.6rem" ml={10} fontWeight="bold">
              {`${property.address.streetAddress},
              ${property.address.number},
              ${property.address.complement} - ${property.address.city} / ${property.address.state}`}
            </Text>
          </Box>

          <Box mt="1rem">
            <DetailsProperty label={'Valor Locação:'} value={rentalPrice} />
            <DetailsProperty label={'Valor Venda:'} value={salePrice} />
            <DetailsProperty label={'size: '} value={`${areaSize} m2`} />
            <DetailsProperty label={'Quartos: '} value={numberOfRooms} />
            <DetailsProperty label={'Banheiros: '} value={numberOfBathrooms} />
            <DetailsProperty label={'Vagas:'} value={numberOfParkingSpaces} />
          </Box>
        </Box>

        <Link href={`/properties/${property.id}`}>
          <Box
            as="button"
            mt="2rem"
            height="3.6rem"
            borderRadius="9999px"
            transition="0.2s"
            border="1px"
            px="8rem"
            fontSize="14px"
            fontWeight="  "
            bg="blue.800"
            borderColor="#ccd0d5"
            color="#FFF"
            _hover={{
              filter: 'brightness(0.7)'
            }}
          >
            + Detalhes
          </Box>
        </Link>
      </Flex>
    </Flex>
  );
};
