import { Flex, Box, Image, Text, Link } from '@chakra-ui/react';

import { Icon } from './Icon';

interface CardProps {
  id: number;
  title: string;
  streetAddress: string;
  number: number;
  complement: string;
  district: string;
  city: string;
  state: string;
}

export const Card = ({
  id,
  title = 'Titulo do Anuncio',
  streetAddress,
  number,
  complement,
  district,
  city,
  state
}: CardProps) => {
  const mainImage = 'http://placeimg.com/200/671/nature';

  return (
    <Flex h="20rem" align="center" mb="1rem" ml="1rem">
      <Flex>
        <Box w="20rem" p="1rem">
          <Image src={mainImage} borderRadius="5%" boxSize="16rem" />
        </Box>

        <Box pt="1rem">
          <Link href={`/properties/${id}`}>
            <Text fontWeight="bold">{title}</Text>
          </Link>
          <Text fontSize="1.2rem">
            {streetAddress}, {number} - {complement}
          </Text>
          <Text fontSize="1.2rem">
            {district} - {city}/{state}
          </Text>

          <Flex direction="row">
            <Icon imageUrl="/images/icon_area.svg" label="1200m2" />
            <Icon imageUrl="/images/icon_banheiro.svg" label="2" />
            <Icon imageUrl="/images/icon_quarto.svg" label="3" />
            <Icon imageUrl="/images/icon_vagas.svg" label="5" />
            <Icon imageUrl="/images/icon_pet.svg" label="SIM" />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
