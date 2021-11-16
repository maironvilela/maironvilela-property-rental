import { Flex, Box, Image, Text } from '@chakra-ui/react';

import { Icon } from './Icon';

export const Card = () => {
  const mainImage = 'http://placeimg.com/200/671/nature';

  return (
    <Flex h="20rem" align="center" mb="1rem" ml="1rem">
      <Flex>
        <Box w="20rem" p="1rem">
          <Image src={mainImage} borderRadius="5%" boxSize="16rem" />
        </Box>

        <Box pt="1rem">
          <Text fontWeight="bold">
            Apartamento de 2 quartos para alugar – Belo Horizonte
          </Text>
          <Text fontSize="1.2rem">Rua Padre Antônio Tomás</Text>
          <Text fontSize="1.2rem">Água Branca - Belo Horizonte</Text>

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
