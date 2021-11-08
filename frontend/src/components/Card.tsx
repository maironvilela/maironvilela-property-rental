import { Box, Flex, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';

import { DetailsProperty } from '../components/DatailsProperty';

export const Card = () => {
  return (
    <Flex align="center" justify="center" p={4}>
      <Flex flexDirection="column" align="center">
        <Box>
          <Image
            src="https://images.unsplash.com/photo-1616242780651-cdd1ddf6dcce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt="imagem"
            boxSize="250px"
            m={10}
            borderRadius="10%"
          />
        </Box>

        <Box>
          <Text fontSize="1.8rem" ml={10} fontWeight="bold">
            Casa
          </Text>

          <Text mt={4} fontSize="1.6rem" ml={10} fontWeight="bold">
            Rua Nossa Senhora da Aparecida
          </Text>

          <Text fontSize="1.6rem" ml={10} fontWeight="bold" mb={8}>
            Agua Branca - São Paulo
          </Text>
          <DetailsProperty label={'Valor Locação:'} value={'R$1.200,00'} />
          <DetailsProperty label={'Valor Locação:'} value={'R$2.6000,00'} />
          <DetailsProperty label={'size: '} value={'100m2'} />
          <DetailsProperty label={'Quartos: '} value={'2'} />
          <DetailsProperty label={'Vagas:'} value={'3'} />
        </Box>

        <Link href="">
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
