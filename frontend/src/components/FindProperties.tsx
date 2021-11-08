import { Button, Flex } from '@chakra-ui/react';

export const FindProperties = () => (
  <Flex as="section" w="100vw" align="center" justify="center">
    <Button
      m={10}
      colorScheme="red"
      variant="solid"
      fontSize="2.8rem"
      p={10}
      borderRadius="9999px"
    >
      Encontre seu imóvel
    </Button>
  </Flex>
);
