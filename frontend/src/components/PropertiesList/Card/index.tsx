import { useMemo } from 'react';

import { Box, Flex, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';

import { Property } from '../../../types';
import { DetailsProperty } from '../../DetailsProperty';

interface CardProps {
  property: Property;
}

export const Card = ({ property }: CardProps) => {
  const mainImage = useMemo(() => {
    const mainImage = property.propertyImages.find(image => image.isMainImage);

    return mainImage.imageUrl;
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
            <DetailsProperty label={'Valor Locação:'} value={'R$1.200,00'} />
            <DetailsProperty label={'Valor Locação:'} value={'R$2.6000,00'} />
            <DetailsProperty label={'size: '} value={'100m2'} />
            <DetailsProperty label={'Quartos: '} value={'2'} />
            <DetailsProperty label={'Vagas:'} value={'3'} />
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
