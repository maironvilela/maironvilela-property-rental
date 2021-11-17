import { Flex, Box, Image, Text, Link } from '@chakra-ui/react';

import { Icon } from './Icon';
import styles from './list.module.scss';

interface CardProps {
  id: number;
  description: string;
  streetAddress: string;
  number: number;
  complement: string;
  district: string;
  city: string;
  state: string;
  mainImage: string;
  sizeArea: string;
  numberOfBathrooms: string;
  numberOfRooms: string;
  numberOfParkingSpaces: string;
  allowPets: string;
}

export const Card = ({
  id,
  description,
  streetAddress,
  number,
  complement,
  district,
  city,
  state,
  mainImage,
  sizeArea = '0',
  allowPets,
  numberOfBathrooms = '0',
  numberOfRooms = '0',
  numberOfParkingSpaces = '0'
}: CardProps) => {
  return (
    <Flex
      h="20rem"
      align="center"
      mb="1rem"
      ml="1rem"
      className={styles.container}
    >
      <Flex>
        <Box w="20rem" p="1rem">
          <Image src={mainImage} borderRadius="5%" boxSize="16rem" />
        </Box>

        <Box pt="1rem">
          <Link href={`/properties/${id}`} style={{ textDecoration: 'none' }}>
            <Text fontWeight="bold" _hover={{ color: 'blue.500' }}>
              {description}
            </Text>
          </Link>
          <Text fontSize="1.2rem">
            {streetAddress}, {number} - {complement}
          </Text>
          <Text fontSize="1.2rem">
            {district} - {city}/{state}
          </Text>

          <Flex direction="row">
            <Icon imageUrl="/images/icon_area.svg" label={`${sizeArea}m2`} />
            <Icon
              imageUrl="/images/icon_banheiro.svg"
              label={numberOfBathrooms}
            />
            <Icon imageUrl="/images/icon_quarto.svg" label={numberOfRooms} />
            <Icon
              imageUrl="/images/icon_vagas.svg"
              label={numberOfParkingSpaces}
            />
            <Icon imageUrl="/images/icon_pet.svg" label={allowPets} />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
